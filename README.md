# strapi-plugin-lexical

Integrates the [Lexical WYSIWYG editor](https://lexical.dev/) as a custom field in Strapi.

[![https://nodei.co/npm/strapi-plugin-lexical.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/strapi-plugin-lexical.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/strapi-plugin-lexical)


> **Alpha Software**  
> This plugin is in active development. Contributions in the form of bug reports, feature suggestions, and pull requests are highly encouraged!
<details>
<summary>Table of contents</summary>

<!-- TOC -->

- [strapi-plugin-lexical](#strapi-plugin-lexical)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Handling Media and Internal Links](#handling-media-and-internal-links)
      - [Opt-in Mechanism](#opt-in-mechanism)
        - [Example Fields](#example-fields)
      - [Integration in Lexical](#integration-in-lexical)
        - [Media References](#media-references)
        - [Internal Links](#internal-links)
      - [Querying Related Data](#querying-related-data)
  - [Roadmap](#roadmap)
    - [v0 - Alpha](#v0---alpha)
    - [v1 - Stable](#v1---stable)
  - [Contributing](#contributing)
  - [Resources](#resources)

<!-- /TOC -->

</details>

## Installation

1. Install the plugin:
   ```bash
   npm install strapi-plugin-lexical
   ```

2. Include the required CSS and Prism.js in your Strapi admin:
   ```javascript
   // ./src/admin/app.js
   import "strapi-plugin-lexical/dist/style.css";
   import "prismjs";
   ```

3. Add Vite support for Prism.js:
   - Install the plugin:
     ```bash
     npm install --save-dev vite-plugin-prismjs
     ```
   - Update your Vite configuration:
     ```javascript
     // ./src/admin/vite.config.js
     import { mergeConfig } from "vite";
     import prismjs from "vite-plugin-prismjs";

     export default (config) =>
       mergeConfig(config, {
         plugins: [
           prismjs({
             languages: "all", // Load all languages or customize as needed
           }),
         ],
       });
     ```
    > **Note:** Prism.js is required even if you don't plan to support code blocks. If you find a workaround to avoid this, please share it with us via a pull request or issue. We happily skip this installation step if we can!


## Usage

- A new **Lexical** field type will be available in the Strapi content-type builder.
- Currently, it supports features migrated from the [Lexical playground](https://playground.lexical.dev/).
- For rendering content on your frontend, consider using libraries like [payload-lexical-react-renderer](https://github.com/atelierdisko/payload-lexical-react-renderer) or similar tools.

### Handling Media and Internal Links

This plugin ensures reliable rendering of images and internal links by maintaining relationships between rich text content and referenced entities. By using **dynamic zones** and **predefined components**, the full power of the Strapi API is available when querying related data.

> **Important:** This is readme section is WIP. We will update this soon and give better examples on how to query and render images and links

#### Opt-in Mechanism  

To enable this feature, create a **secondary field** with the suffix **`Links`**. This field must be a **dynamic zone** where you define the types of content (media and collections) that should be linked.  

##### Example Fields  
- **`Content`** (Type: Lexical Custom Field) – Stores the rich text content.  
- **`ContentLinks`** (Type: Dynamic Zone) – Stores extracted references, with selected components for linking media and collections.  

#### Integration in Lexical  

Rich text content within Strapi is stored as **Lexical nodes**, which are automatically parsed and extracted into Strapi. This ensures that all referenced media and internal links are readily available for your frontend, always reflecting the latest data.

##### Media References

- Images are stored as **`StrapiImage`** node in Lexical.
- Other file types are planned but not yet supported.

**StrapiImage Node Data Structure:**
```json
{ "documentId": "id_of_media_asset" }
```

##### Internal Links

- Internal links are stored using the regular **`Link`** node in Lexical.
- The URL follows the format:  
  `strapi://collectionName/documentId`
  
  This ensures that even if a page’s slug changes, links remain valid.

**Example: Fetching the Latest API Data**
```js
const [collectionName, documentId] = linkNode.url.replace("strapi://", "").split("/");
const articles = client.collection(collectionName);
const singleArticle = await articles.findOne(documentId);
```

#### Querying Related Data

On the data side, the `yourFieldLinks` field can be queried as a **regular dynamic zone**, ensuring that referenced media and links are always up-to-date. This prevents broken images and outdated links while giving users better control over content dependencies.

By maintaining these relationships, users can be notified when deleting content that is still referenced elsewhere, helping prevent accidental data loss.



## Roadmap

### v0 - Alpha
- Implement basic functionality.
- Port features from the Lexical playground as the initial foundation.
- Create field presets:
  - **Simple**, **Complex**, and **Full** (selectable during field setup).
- Gather community feedback.
- Look for a potential co-maintainer.

### v1 - Stable
- Introduce plugin-based architecture:
  - Allow users to extend functionality with their own plugins.
- Enable configuration of presets via plugin settings.
- Open to community ideas! [Submit an issue](https://github.com/hashbite/strapi-plugin-lexical/issues).

---

## Contributing

We welcome contributions! Here’s how you can help:
- Report bugs or suggest features via the [issue tracker](https://github.com/hashbite/strapi-plugin-lexical/issues).
- Submit pull requests to improve functionality or documentation.
- Share your feedback and ideas to shape the plugin’s future.

---

## Resources

- [Lexical Documentation](https://lexical.dev/docs)
- [Lexical Playground](https://playground.lexical.dev/)
- [Payload Lexical React Renderer](https://github.com/atelierdisko/payload-lexical-react-renderer)
- [Strapi Plugin Development Guide](https://docs.strapi.io/developer-docs/latest/plugin-development/introduction.html)