import type { Core, Struct } from '@strapi/strapi';

const bootstrap = async ({ strapi }: { strapi: Core.Strapi }) => {
  const validComponents: string[] = ['linkable.media'];
  const existingComponents = Object.keys(strapi.components);

  // Create media linkable component
  const componentUID: `${string}.${string}` = `linkable.media`;
  const componentSchema: Partial<Struct.ComponentSchema> = {
    category: 'Linkable',
    uid: componentUID,
    info: {
      displayName: 'Media',
      description: `Component linking to media`,
    },
    attributes: {
      links: {
        type: 'media',
        multiple: true,
      },
    },
  };

  if (!existingComponents.includes('linkable.media')) {
    await strapi
      .plugin('content-type-builder')
      .services.components.createComponent({ component: componentSchema });
    strapi.log.info(`Lexical: Created linkable media component: ${componentUID}`);
  }

  // Retrieve all API content types (excluding core types like users-permissions)
  const contentTypes = Object.entries(strapi.contentTypes)
    .filter(([uid]) => uid.startsWith('api::')) // Only user-defined content types
    .map(([uid]) => uid);

  for (const contentTypeUID of contentTypes) {
    const contentType = strapi.contentTypes[contentTypeUID];

    if (contentType) {
      const componentUID: `${string}.${string}` = `linkable.${contentType.info.singularName}`;
      validComponents.push(componentUID);
      const componentSchema: Struct.ComponentSchema = {
        category: 'Linkable',
        displayName: contentType.info.displayName,
        uid: componentUID,
        info: {
          displayName: contentType.info.displayName,
          description: `Component linking to ${contentType.info.displayName}`,
        },
        attributes: {
          links: {
            type: 'relation',
            relation: 'oneToMany',
            // @ts-expect-error no we need an string here. wrong types?
            target: contentTypeUID,
            writable: false,
          },
        },
      };

      // Check if component already exists before creating it
      if (!existingComponents.some((component) => component === componentUID)) {
        // Register the component
        await strapi
          .plugin('content-type-builder')
          .services.components.createComponent({ component: componentSchema });
        strapi.log.info(`Lexical: Created linkable component: ${componentUID}`);
      }
    }
  }

  // Delete linkables to old/deleted collections
  for (const outdatedLinkable of existingComponents.filter(
    (c) => c.startsWith('linkable.') && !validComponents.includes(c)
  )) {
    strapi.log.info(`Lexical: Deleting outdated linkable component: ${outdatedLinkable}`);
    await strapi
      .plugin('content-type-builder')
      .services.components.deleteComponent(outdatedLinkable);
  }
};

export default bootstrap;
