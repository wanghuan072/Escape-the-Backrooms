import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { seoConfig } from '../src/seo/config.js'
import { addLocalePrefix } from '../src/utils/locales.js'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(rootDir, 'dist')
const indexPath = path.join(distDir, 'index.html')
const locales = ['en', 'de', 'fr', 'es']

const staticRoutes = [
  { path: '/', seoKey: 'home' },
  { path: '/levels', seoKey: 'levels' },
  { path: '/maps-keys', seoKey: 'maps' },
  { path: '/codes-solutions', seoKey: 'codes' },
  { path: '/backrooms-games', seoKey: 'relatedGames' },
  { path: '/search', seoKey: 'search' },
  { path: '/privacy-policy', seoKey: 'privacyPolicy' },
  { path: '/terms-of-service', seoKey: 'termsOfService' },
  { path: '/copyright', seoKey: 'copyright' },
  { path: '/about-us', seoKey: 'aboutUs' },
  { path: '/contact-us', seoKey: 'contactUs' },
]

function escapeAttribute(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function replaceMeta(html, attribute, name, value) {
  if (!value) return html
  const pattern = new RegExp(`(<meta\\s+${attribute}=["']${name}["'][^>]*content=["'])[^"']*`, 'i')
  return html.replace(pattern, `$1${escapeAttribute(value)}`)
}

function renderHead(template, { locale, urlPath, seo, alternates, noIndex = false }) {
  const canonicalUrl = `${seoConfig.fullDomain}${urlPath}`
  const finalSeo = { ...seoConfig.defaults, ...seo }
  let html = template

  html = html.replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${locale}">`)
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(finalSeo.title)}</title>`)
  html = replaceMeta(html, 'name', 'description', finalSeo.description)
  html = replaceMeta(html, 'name', 'keywords', finalSeo.keywords)
  html = replaceMeta(html, 'property', 'og:title', finalSeo.title)
  html = replaceMeta(html, 'property', 'og:description', finalSeo.description)
  html = replaceMeta(html, 'property', 'og:image', finalSeo.image)
  html = replaceMeta(html, 'property', 'og:url', canonicalUrl)
  html = replaceMeta(html, 'property', 'og:type', finalSeo.type || 'website')
  html = replaceMeta(html, 'name', 'twitter:title', finalSeo.title)
  html = replaceMeta(html, 'name', 'twitter:description', finalSeo.description)
  html = replaceMeta(html, 'name', 'twitter:image', finalSeo.image)
  html = html.replace(
    /(<link\s+rel=["']canonical["'][^>]*href=["'])[^"']*/i,
    `$1${escapeAttribute(canonicalUrl)}`,
  )

  if (noIndex) {
    html = replaceMeta(html, 'name', 'robots', 'noindex, nofollow')
    html = replaceMeta(html, 'name', 'googlebot', 'noindex, nofollow')
  }

  if (alternates) {
    const alternateTags = Object.entries(alternates)
      .map(([alternateLocale, alternatePath]) =>
        `  <link rel="alternate" hreflang="${alternateLocale}" href="${seoConfig.fullDomain}${escapeAttribute(alternatePath)}">`,
      )
    alternateTags.push(
      `  <link rel="alternate" hreflang="x-default" href="${seoConfig.fullDomain}${escapeAttribute(alternates.en || '/')}">`,
    )
    html = html.replace('</head>', `${alternateTags.join('\n')}\n</head>`)
  }

  return html
}

function outputPathForUrl(urlPath) {
  if (urlPath === '/') return indexPath
  const relativePath = urlPath.replace(/^\//, '').replace(/\/$/, '')
  return path.join(distDir, relativePath, 'index.html')
}

function writePage(urlPath, html) {
  const outputPath = outputPathForUrl(urlPath)
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, html, 'utf8')
}

function staticAlternates(routePath) {
  return Object.fromEntries(locales.map((locale) => [locale, addLocalePrefix(routePath, locale)]))
}

function detailAlternates(section, id, datasets) {
  return Object.fromEntries(
    locales.map((locale) => {
      const entry = datasets[locale].find((item) => item.id === id)
      const routePath = `/${section}/${entry.addressBar}`
      return [locale, addLocalePrefix(routePath, locale)]
    }),
  )
}

async function loadLocalizedData(type) {
  const data = {}
  for (const locale of locales) {
    const module = await import(`../src/data/${type}/${locale}.js`)
    data[locale] = module.default || []
  }
  return data
}

async function main() {
  if (!fs.existsSync(indexPath)) {
    throw new Error('dist/index.html is missing; run Vite build first')
  }

  const template = fs.readFileSync(indexPath, 'utf8')
  const messages = {}
  for (const locale of locales) {
    messages[locale] = (await import(`../src/i18n/locales/${locale}.js`)).default
  }

  const [levels, maps, relatedGamesModule] = await Promise.all([
    loadLocalizedData('levels'),
    loadLocalizedData('maps'),
    import('../src/data/relatedGames.js'),
  ])
  const games = Object.fromEntries(
    locales.map((locale) => [locale, relatedGamesModule.getRelatedGames(locale)]),
  )

  let pageCount = 0

  for (const locale of locales) {
    for (const route of staticRoutes) {
      const urlPath = addLocalePrefix(route.path, locale)
      const seo = messages[locale]?.tdk?.[route.seoKey] || seoConfig.defaults
      writePage(
        urlPath,
        renderHead(template, {
          locale,
          urlPath,
          seo,
          alternates: staticAlternates(route.path),
        }),
      )
      pageCount += 1
    }

    for (const level of levels[locale]) {
      const urlPath = addLocalePrefix(`/levels/${level.addressBar}`, locale)
      writePage(
        urlPath,
        renderHead(template, {
          locale,
          urlPath,
          seo: {
            ...level.seo,
            image: level.imageUrl
              ? `${seoConfig.fullDomain}${level.imageUrl}`
              : seoConfig.defaults.image,
            type: 'article',
          },
          alternates: detailAlternates('levels', level.id, levels),
        }),
      )
      pageCount += 1
    }

    for (const map of maps[locale]) {
      const urlPath = addLocalePrefix(`/maps-keys/${map.addressBar}`, locale)
      writePage(
        urlPath,
        renderHead(template, {
          locale,
          urlPath,
          seo: {
            ...map.seo,
            image: map.imageUrl
              ? `${seoConfig.fullDomain}${map.imageUrl}`
              : seoConfig.defaults.image,
            type: 'article',
          },
          alternates: detailAlternates('maps-keys', map.id, maps),
        }),
      )
      pageCount += 1
    }

    for (const game of games[locale]) {
      const urlPath = addLocalePrefix(`/backrooms-games/${game.addressBar}`, locale)
      writePage(
        urlPath,
        renderHead(template, {
          locale,
          urlPath,
          seo: {
            ...game.seo,
            image: game.imageUrl || seoConfig.defaults.image,
            type: 'article',
          },
          alternates: detailAlternates('backrooms-games', game.id, games),
        }),
      )
      pageCount += 1
    }
  }

  const notFoundHtml = renderHead(template, {
    locale: 'en',
    urlPath: '/',
    seo: seoConfig.defaults,
    noIndex: true,
  })
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8')

  console.log(`Generated ${pageCount} static route shells and dist/404.html.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
