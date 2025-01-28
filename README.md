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
   import "../../node_modules/strapi-plugin-lexical/dist/style.css";
   import "prismjs";
   ```
   (Why importing so weird? [See here](https://github.com/strapi/sdk-plugin/issues/73))

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
    > **Note:** Prism.js is required even if you don't plan to support code blocks. If you find a workaround, please share it with us via a pull request or issue.
---

## Usage

- A new **Lexical** field type will be available in the Strapi content-type builder.
- Currently, it supports features migrated from the [Lexical playground](https://playground.lexical.dev/).
- For rendering content on your frontend, consider using libraries like [payload-lexical-react-renderer](https://github.com/atelierdisko/payload-lexical-react-renderer) or similar tools.

---

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