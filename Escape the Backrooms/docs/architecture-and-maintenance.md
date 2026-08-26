# Architecture and maintenance

## Repository layout

The Git repository root is the parent directory of this frontend. This `Escape the Backrooms` directory is intentionally the Next.js frontend so that future backend applications can be added beside it and committed to the same repository. Keep repository-wide files such as `.github` at the outer Git root; do not add a second `.github` directory inside this frontend.

Run frontend commands from this directory. Development uses the standard Next.js command:

```bash
npm run dev
```

## Framework and directory responsibilities

The site uses Next.js App Router, React, and TypeScript.

- `src/app`: URL map and Next.js framework boundaries only. The standard route files in this directory are generated and intentionally thin.
- `src/page`: complete page implementations grouped by public content area.
- `src/components`: UI shared by multiple page areas.
- `src/style`: all authored CSS, mirroring the ownership structure under `page` and `components`.
- `src/types`: domain contracts split into levels, maps, entities, related games, locale, and SEO.
- `src/lib`: domain queries, localization, rich-HTML transforms, and route helpers.
- `src/config`: stable site, navigation, advertising, and generated localized-route configuration.
- `src/seo`: shared Metadata and JSON-LD behavior.
- `scripts/data`: content-derived route and sitemap generators.
- `scripts/audit`: non-UI validation and audit commands.

English routes are unprefixed. German, French, and Spanish use `/de`, `/fr`, and `/es`. Public route paths, slug casing, query strings, hashes, and legacy redirects in `vercel.json` are compatibility contracts and must not be changed during structural work.

## Why rich content lives in `src/content`

The global project convention reserves `src/data` for pure JSON without imports, exports, functions, CSS concerns, or HTML fragments. This project intentionally uses `src/content` instead because the preserved source contains JavaScript modules, localization accessors, and trusted rich-HTML strings.

The manually maintained content sources are:

- `src/content/levels/<locale>.js`
- `src/content/maps/<locale>.js`
- `src/content/i18n/<locale>.js`
- `src/content/wiki/entities.js`
- `src/content/related-games.js`

Keep content values, HTML, image paths, IDs, slugs, and per-entry SEO records unchanged unless a content change is explicitly requested. Pages consume these sources through the domain modules in `src/lib/data`; they should not import the large source collections directly.

## Generated files

Do not edit these files directly:

- `src/config/localized-routes.generated.ts`
- the standard English and localized `page.tsx` route files generated under `src/app`
- `public/sitemap.xml`
- `scripts/data/.sitemap-cache.json`

`npm run predev` and `npm run prebuild` run both route generators:

1. `scripts/data/generate-localized-routes.js` builds cross-locale detail-page mappings.
2. `scripts/data/generate-next-routes.js` writes thin App Router entry files.

Run `npm run generate-sitemap` after a deliberate URL or content inventory change. The sitemap cache compares content fingerprints: unchanged URLs preserve their existing `lastmod`, while new or changed URLs receive the current date.

## SEO contracts

`src/seo/metadata.ts` is the single Metadata conversion layer. Static-page TDK comes from the locale dictionaries; detail-page TDK stays with its content record. Each indexable page must retain:

- exactly one H1;
- title, description, and keywords;
- canonical URL;
- `en`, `de`, `fr`, `es`, and `x-default` alternates;
- Open Graph and Twitter metadata;
- WebSite plus page-appropriate JSON-LD;
- the existing public URL and image URLs.

Unknown URLs keep the requested browser address and are handled by App Router catch-all/detail routes calling `notFound()`. Localized root layouts provide fallback TDK, while the `not-found.tsx` boundaries render the normal site shell; together they return HTTP 404 and emit `noindex, nofollow`. Do not add a public internal route such as `/site-404` or a proxy rewrite for this purpose.

## Preserved integrations

`public/collet-data.js` is company-managed and must not be reformatted or edited as part of application work. The root document loads it from `/collet-data.js`. The root document also contains exactly one executable `window.localStorage.removeItem('__lsv__');` statement.

Advertising identifiers and behavior live in `src/config/ads.ts` and `src/components/ads`. Preserve their unit paths, delayed loading, page scope, and banner sequence unless an advertising change is explicitly requested.

## Vercel deployment

The Vercel project must use `Escape the Backrooms` as its **Root Directory** in **Project Settings → Build and Deployment**. Root Directory is a Vercel project setting and cannot be declared in `vercel.json`. Once that directory is selected, `vercel.json` pins the Next.js framework, deterministic `npm ci` install, `npm run build`, redirects, and response headers. Do not set a custom Output Directory; Vercel uses the Next.js framework output automatically.

`.vercelignore` excludes local caches, editor settings, environment files, documentation, and audit-only scripts from CLI uploads. It must not exclude `scripts/data`, because the prebuild generators run during deployment.

## Release checklist

Use a supported Node.js version from `package.json`, then run:

```bash
npm ci
npm run check
npm audit --omit=dev
```

`npm run check` performs linting, TypeScript validation, structure and data audits, and a production build. The HTTP page audit runs against an already-started production server so its lifecycle stays explicit and reliable. In two terminals, run:

```powershell
# Terminal 1
npm run start -- --hostname 127.0.0.1 --port 3000

# Terminal 2
$env:PAGE_AUDIT_BASE_URL = 'http://127.0.0.1:3000'
npm run audit:pages
```

The page audit requires all 220 valid routes to return 200 with non-empty content, one non-empty H1, complete TDK/canonical/hreflang metadata, JSON-LD, valid internal links and rendered assets. It also verifies the 200 sitemap URLs and eight localized 404 cases, including the retired `/site-404` paths, for status, fallback TDK, `noindex, nofollow`, locale, and rendered content. CI starts the production server and runs this audit automatically after `npm run check`.

When public URLs or content inventory intentionally changes, also run:

```bash
npm run generate-sitemap
npm run check
```

Before deployment, verify representative desktop and mobile pages, search, menu behavior, locale switching, detail-page slug mapping, 404 responses, console errors, and the complete public-route inventory. Next.js build output belongs in `.next`; do not deploy or retain a Vite-era `dist` directory.
