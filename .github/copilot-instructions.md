# Copilot instructions for La Chipería

## Project overview

La Chipería is a single-page React storefront for an Argentine, gluten-free bakery. It is a Create React App using JavaScript, Tailwind CSS, Framer Motion, React Icons-compatible dependencies, and Vercel Analytics. There is no application backend in this repository.

The page is assembled in `src/App.js` in this order:

1. `Navbar` — sticky navigation linking to page section IDs.
2. `Hero` — animated landing section and primary calls to action.
3. `About` — brand history, mission, vision, and location.
4. `Food` — catalog with client-side category filtering.
5. `Card` — animated values/pillars section.
6. `Category` — contact section, WhatsApp/Instagram links, and Formspree form.

`src/index.js` mounts the app under `React.StrictMode` and renders Vercel Analytics. Product and category content is centralized in `src/data/data.js`; `Food` filters products by the `category` field and renders the result. Static files such as the logo belong in `public/` and are referenced with root-relative URLs (for example, `/logo.svg`). Most product and decorative images currently use remote URLs.

## Commands

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Run the test runner interactively:

```bash
npm test
```

Run tests once in CI/non-interactive mode:

```bash
npm test -- --watchAll=false
```

Run one test file (when a test exists):

```bash
npm test -- --watchAll=false --runTestsByPath src/path/to/file.test.js
```

There is no standalone lint script. CRA’s ESLint checks run as part of the development/build workflow. Do not add a new lint or formatting tool without an explicit project requirement.

## MCP

The repository includes `.vscode/mcp.json` with:

- Playwright MCP for browser-based inspection of the responsive storefront, navigation anchors, catalog filtering, animations, and contact form UI. Start the app with `npm start` before using Playwright against the local site.
- Notion MCP at `https://mcp.notion.com/mcp` for retrieving the approved brand source of truth. Use Notion search first, then fetch the relevant page before changing brand copy, product descriptions, contact details, visual direction, or other content that may be maintained there. Treat Notion as a content reference, not as runtime application data; transcribe only the needed approved values into the appropriate source file and never commit credentials or private page content unrelated to the site.

## Implementation conventions

- Keep page sections as focused components under `src/components/`; wire their order and global composition through `src/App.js`.
- Preserve the existing section IDs (`inicio`, `catalogo`, `nosotros`, `contacto`) when changing navigation or adding links. Update `Navbar` and the relevant section together if an ID changes.
- Keep catalog records in `src/data/data.js`. Use a stable numeric `id`, a lowercase internal `category` key, a display `name`, and an `image` URL. If adding a category, update both `categoryLabels` and `filterButtons` in `Food.js`.
- User-facing copy is Spanish and uses the voseo style (`Pedí`, `Conocenos`, `Escribinos`). Match that voice when adding or editing text.
- Styling is primarily Tailwind utility classes, including project-specific arbitrary colors, gradients, rounded corners, shadows, and responsive breakpoints. Global typography, colors, smooth scrolling, and animation keyframes live in `src/index.css`; Tailwind scans `src/**/*.{js,jsx,ts,tsx}`.
- Use Framer Motion for the established entrance, hover, and scroll-into-view animations. Keep animation behavior decorative and avoid making core catalog/contact functionality depend on animation callbacks.
- External actions are intentional integrations: WhatsApp uses the `wa.me` URL in `Category.js`, Instagram links to `lachiperia`, and contact submissions use the Formspree endpoint defined there. Preserve `target="_blank"` with `rel="noreferrer"` for external links and update these endpoints deliberately.
- Use semantic HTML and meaningful `alt` text for the image-heavy storefront. Keep the current visual language and responsive layout when modifying components.
- Keep JavaScript/JSX style consistent with the surrounding files (semicolons are generally omitted in components; imports are local relative paths).
