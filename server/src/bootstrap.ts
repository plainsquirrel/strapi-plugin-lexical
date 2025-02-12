import type { Core, Struct } from '@strapi/strapi';

const bootstrap = async ({ strapi }: { strapi: Core.Strapi }) => {
  // Create media links component
  const mediaComponentUID: `${string}.${string}` = `lexical-links.media`;
  const mediaComponentSchema: Partial<Struct.ComponentSchema> = {
    category: 'lexical-links',
    // @ts-expect-error yes, its there, and required. types seem to be wrong
    displayName: 'Media',
    uid: mediaComponentUID,
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

  const validComponents: string[] = [mediaComponentUID];
  const existingComponents = Object.keys(strapi.components);

  if (!existingComponents.includes(mediaComponentUID)) {
    await strapi
      .plugin('content-type-builder')
      .services.components.createComponent({ component: mediaComponentSchema });
    strapi.log.info(`Lexical: Created links component for media assets: ${mediaComponentUID}`);
  }

  // Retrieve all API content types (excluding core types like users-permissions)
  const contentTypes = Object.entries(strapi.contentTypes)
    .filter(([uid]) => uid.startsWith('api::')) // Only user-defined content types
    .map(([uid]) => uid);

  for (const contentTypeUID of contentTypes) {
    const contentType = strapi.contentTypes[contentTypeUID];

    if (contentType) {
      const componentUID: `${string}.${string}` = `lexical-links.${contentType.info.singularName}`;

      validComponents.push(componentUID);
      const componentSchema: Struct.ComponentSchema = {
        category: 'lexical-links',
        displayName: contentType.info.singularName,
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
        strapi.log.info(`Lexical: Created links component for ${componentUID}`);
      }
    }
  }

  // Delete links to old/deleted collections
  for (const outdatedLinkComponent of existingComponents.filter(
    (c) => c.startsWith('lexical-links.') && !validComponents.includes(c)
  )) {
    strapi.log.info(`Lexical: Deleting outdated links component of ${outdatedLinkComponent}`);
    await strapi
      .plugin('content-type-builder')
      .services.components.deleteComponent(outdatedLinkComponent);
  }
};

export default bootstrap;
