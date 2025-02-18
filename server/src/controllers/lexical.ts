import type { Core } from '@strapi/strapi';

import querystring from 'node:querystring';

const lexical = ({ strapi }: { strapi: Core.Strapi }) => ({
  async search(ctx) {
    const { model, field } = ctx.params;

    const contentType = strapi.contentTypes[model];
    const linksField = contentType.attributes[`${field}Links`];

    if (!linksField) {
      console.log('No links field found');
      ctx.body = {};
      return;
    }

    const qs = querystring.parse(ctx.url.split('?')[1]);

    // @ts-expect-error
    const linkableComponents = linksField.components
      .filter((component: string) => component !== 'lexical-links.media')
      .map((component: string) => {
        const shortId = component.replace('lexical-links.', '');
        return `api::${shortId}.${shortId}`;
      });

    const results: {
      [key: string]: {
        documentId: string;
        id: number;
        label: string;
      }[];
    } = {};

    for (const linkableType of linkableComponents) {
      // @todo this is just a quick workaround, we probably should allow the user to configure which fields can be searched
      // we could do it similar to strapi-plugin-fuzzy-search or even integrate with the plugin itself (might be problematic?)
      const fieldName = Object.keys(strapi.contentType(linkableType).attributes).find((fieldName) =>
        ['name', 'title', 'label', 'headline'].includes(fieldName)
      );

      if (fieldName) {
        const query = {
          locale: qs.locale,
          filters: {
            [fieldName]: {
              $contains: qs.q,
            },
          },
        };
        const res = await strapi.documents(linkableType).findMany(query);

        if (res.length) {
          results[linkableType] = res.map((entity) => ({
            documentId: entity.documentId,
            id: entity.id,
            label: entity[fieldName],
          }));
        }
      }
    }

    ctx.body = JSON.stringify(results, null, 2);
  },
});

export default lexical;
