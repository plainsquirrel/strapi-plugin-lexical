import type { Core } from '@strapi/strapi';

import querystring from 'node:querystring';

// turns "companies" into "api::company:company"
function findCollectionUID(strapi: Core.Strapi, collectionName: string) {
  const realCollectionName = collectionName.replace(/[- ]/g, '_');
  const [collectionUID] = Object.entries(strapi.contentTypes).find(
    ([, collectionType]) => {
      return collectionType.collectionName === realCollectionName;
    }
  );
  return collectionUID;
}

// @todo this is just a quick workaround, we probably should allow the user to configure which fields can be searched
// we could do it similar to strapi-plugin-fuzzy-search or even integrate with the plugin itself (might be problematic?)
function findTitleField(strapi: Core.Strapi, collectionTypeUID) {
  const contentType = strapi.contentTypes[collectionTypeUID]
  return Object.keys(contentType.attributes).find((fieldName) =>
    ['name', 'title', 'label', 'headline'].includes(fieldName)
  );
}      

const lexicalSearch = ({ strapi }: { strapi: Core.Strapi }) => ({
  async search(ctx) {
    const { model, field } = ctx.params;

    const contentType = strapi.contentTypes[model];
    const linksField = contentType.attributes[`${field}Links`];

    if (!linksField) {
      console.log('No links field found');
      ctx.body = [];
      return;
    }

    const qs = querystring.parse(ctx.url.split('?')[1]);

    // @ts-expect-error
    const linkableComponents = linksField.components
      .filter((component: string) => component !== 'lexical-links.media')
      .map((component: string) => {
        const collectionName = component.replace('lexical-links.', '');
        return findCollectionUID(strapi, collectionName);
      });

    const results: {
      documentId: string;
      collectionName: string;
      id: number;
      label: string;
    }[] = [];

    for (const linkableComponent of linkableComponents) {
      const fieldName = findTitleField(strapi, linkableComponent)

      if (fieldName) {
        const query = {
          locale: qs.locale,
          filters: {
            [fieldName]: {
              $contains: qs.q,
            },
          },
        };
        const res = await strapi.documents(linkableComponent).findMany(query);

        if (res.length) {
          const { collectionName } = strapi.contentType(linkableComponent);
          for (const entity of res) {
            results.push({
              documentId: entity.documentId,
              id: entity.id,
              label: entity[fieldName],
              collectionName,
            });
          }
        }
      }
    }

    ctx.body = JSON.stringify(results, null, 2);
  },
  // get a single result so we can preview the currently selected item
  async get(ctx) {
    const { collectionName, documentId } = ctx.params;
    const collectionUID = findCollectionUID(strapi, collectionName);
    const entity = await strapi.documents(collectionUID as any).findOne({ documentId });
    const fieldName = findTitleField(strapi, collectionUID);
    ctx.body = JSON.stringify(
      { documentId: entity.documentId, id: entity.id, label: entity[fieldName], collectionName },
      null,
      2
    );
  },
  // Take api plural url and turn it into api identifies
  // @todo i bet strapi can do that and i am too dump?
  async identify(ctx) {
    const collectionUID = findCollectionUID(strapi, ctx.params.collectionName);
    ctx.body = JSON.stringify({ collectionUID });
  },
});

export default lexicalSearch;
