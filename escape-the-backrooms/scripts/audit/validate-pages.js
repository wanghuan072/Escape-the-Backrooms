import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const siteUrl = 'https://escapethebackrooms.org'
const locales = ['en', 'de', 'fr', 'es']
const prefixedLocales = locales.slice(1)
const baseRoutes = [
  '/',
  '/levels',
  '/maps-keys',
  '/codes-solutions',
  '/backrooms-games',
  '/search',
  '/privacy-policy',
  '/terms-of-service',
  '/copyright',
  '/about-us',
  '/contact-us',
]
const sitemapBaseRoutes = baseRoutes.slice(0, 6)
const requireSitemapToday = process.argv.includes('--require-sitemap-today')
const errors = []

function addError(scope, message) {
  errors.push(`${scope}: ${message}`)
}

function localizedPath(routePath, locale) {
  if (locale === 'en') return routePath
  return routePath === '/' ? `/${locale}/` : `/${locale}${routePath}`
}

function normalizePathname(value) {
  let pathname = value || '/'
  try {
    pathname = decodeURIComponent(pathname)
  } catch {
    // Keep the original path so the audit can report it.
  }
  if (!pathname.startsWith('/')) pathname = `/${pathname}`
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function decodeHtml(value) {
  return String(value || '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
}

function textContent(value) {
  return decodeHtml(value)
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseAttributes(tag) {
  const attributes = {}
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    attributes[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4] ?? '')
  }
  return attributes
}

function tags(html, tagName) {
  return html.match(new RegExp(`<${tagName}\\b[^>]*>`, 'gi')) || []
}

function findMeta(html, key, value) {
  const normalized = value.toLowerCase()
  return tags(html, 'meta')
    .map(parseAttributes)
    .find((attributes) => attributes[key]?.toLowerCase() === normalized)?.content
}

function findLink(html, rel, hreflang) {
  return tags(html, 'link')
    .map(parseAttributes)
    .find((attributes) => {
      const rels = (attributes.rel || '').toLowerCase().split(/\s+/)
      return rels.includes(rel) && (!hreflang || attributes.hreflang === hreflang)
    })?.href
}

async function collectRoutes() {
  const routes = []
  const sitemapRoutes = []
  const datasets = { levels: {}, maps: {} }

  for (const locale of locales) {
    const levelsModule = await import(`../../src/content/levels/${locale}.js`)
    const mapsModule = await import(`../../src/content/maps/${locale}.js`)
    datasets.levels[locale] = levelsModule.default || []
    datasets.maps[locale] = mapsModule.default || []
  }

  const gamesModule = await import('../../src/content/related-games.js')

  for (const locale of locales) {
    routes.push(...baseRoutes.map((routePath) => localizedPath(routePath, locale)))
    sitemapRoutes.push(...sitemapBaseRoutes.map((routePath) => localizedPath(routePath, locale)))

    for (const level of datasets.levels[locale]) {
      const routePath = localizedPath(`/levels/${level.addressBar}`, locale)
      routes.push(routePath)
      sitemapRoutes.push(routePath)
    }
    for (const map of datasets.maps[locale]) {
      const routePath = localizedPath(`/maps-keys/${map.addressBar}`, locale)
      routes.push(routePath)
      sitemapRoutes.push(routePath)
    }
    for (const game of gamesModule.getRelatedGames(locale)) {
      const routePath = localizedPath(`/backrooms-games/${game.addressBar}`, locale)
      routes.push(routePath)
      sitemapRoutes.push(routePath)
    }
  }

  return {
    routes: [...new Set(routes)],
    sitemapRoutes: [...new Set(sitemapRoutes)],
  }
}

function expandRedirect(redirect) {
  const localeToken = ':locale(de|fr|es)'
  if (!redirect.source.includes(localeToken)) return [redirect]

  return prefixedLocales.map((locale) => ({
    ...redirect,
    source: redirect.source.replace(localeToken, locale),
    destination: redirect.destination.replace(':locale', locale),
  }))
}

function validateVercelConfig(validPaths) {
  const configPath = path.join(rootDir, 'vercel.json')
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

  if (config.$schema !== 'https://openapi.vercel.sh/vercel.json') addError('vercel.json', 'official schema URL is missing')
  if (config.framework !== 'nextjs') addError('vercel.json', 'framework must be nextjs')
  if (config.installCommand !== 'npm ci') addError('vercel.json', 'installCommand must be npm ci')
  if (config.buildCommand !== 'npm run build') addError('vercel.json', 'buildCommand must be npm run build')

  const rawSources = new Set()
  const expandedRedirects = []
  for (const redirect of config.redirects || []) {
    if (!redirect.source || !redirect.destination) addError('vercel.json', 'redirect is missing source or destination')
    if (rawSources.has(redirect.source)) addError('vercel.json', `duplicate redirect source ${redirect.source}`)
    rawSources.add(redirect.source)
    if (![301, 302, 303, 307, 308].includes(redirect.statusCode)) {
      addError('vercel.json', `unsupported redirect status for ${redirect.source}`)
    }
    expandedRedirects.push(...expandRedirect(redirect))
  }

  for (const redirect of expandedRedirects) {
    if (/^https?:\/\//.test(redirect.destination)) continue
    const destination = normalizePathname(redirect.destination)
    if (!validPaths.has(destination)) {
      addError('vercel.json', `redirect target is not a public route: ${redirect.destination}`)
    }
  }

  const faviconHeaders = (config.headers || []).find((entry) => entry.source === '/favicon.ico')?.headers || []
  const faviconHeaderMap = Object.fromEntries(faviconHeaders.map((header) => [header.key.toLowerCase(), header.value]))
  if (faviconHeaderMap['content-type'] !== 'image/x-icon') addError('vercel.json', 'favicon Content-Type header is missing')
  if (!faviconHeaderMap['cache-control']) addError('vercel.json', 'favicon Cache-Control header is missing')

  const vercelIgnorePath = path.join(rootDir, '.vercelignore')
  if (!fs.existsSync(vercelIgnorePath)) {
    addError('.vercelignore', 'file is missing')
  } else {
    const ignored = fs.readFileSync(vercelIgnorePath, 'utf8')
    for (const required of ['node_modules', '.next', '.env*', '.vercel']) {
      if (!ignored.split(/\r?\n/).includes(required)) addError('.vercelignore', `missing ${required}`)
    }
  }

  return new Set(expandedRedirects.map((redirect) => normalizePathname(redirect.source)))
}

function validateSitemap(expectedRoutes) {
  const sitemapPath = path.join(rootDir, 'public/sitemap.xml')
  const sitemap = fs.readFileSync(sitemapPath, 'utf8')
  const blocks = sitemap.match(/<url>[\s\S]*?<\/url>/g) || []
  const actualLocations = []
  const today = new Date().toISOString().slice(0, 10)

  for (const block of blocks) {
    const loc = decodeHtml(block.match(/<loc>([^<]+)<\/loc>/)?.[1])
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]
    if (!loc) {
      addError('sitemap.xml', 'URL entry is missing loc')
      continue
    }
    actualLocations.push(loc)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(lastmod || '')) addError('sitemap.xml', `${loc} has an invalid lastmod`)
    if (lastmod && lastmod > today) addError('sitemap.xml', `${loc} has a future lastmod ${lastmod}`)
    if (requireSitemapToday && lastmod !== today) addError('sitemap.xml', `${loc} lastmod is not today (${today})`)
  }

  const expectedLocations = new Set([...expectedRoutes].map((routePath) => `${siteUrl}${routePath}`))
  const actualSet = new Set(actualLocations)
  if (actualSet.size !== actualLocations.length) addError('sitemap.xml', 'duplicate loc entries found')
  for (const expected of expectedLocations) {
    if (!actualSet.has(expected)) addError('sitemap.xml', `missing URL ${expected}`)
  }
  for (const actual of actualSet) {
    if (!expectedLocations.has(actual)) addError('sitemap.xml', `unexpected URL ${actual}`)
  }

  const robots = fs.readFileSync(path.join(rootDir, 'public/robots.txt'), 'utf8')
  if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) addError('robots.txt', 'sitemap URL is missing or incorrect')
  for (const privatePath of ['/privacy-policy', '/terms-of-service', '/copyright', '/about-us', '/contact-us']) {
    if (actualSet.has(`${siteUrl}${privatePath}`)) addError('sitemap.xml', `robots-excluded URL is present: ${privatePath}`)
  }

  return { sitemap, robots, count: actualLocations.length }
}

function expectedLocale(routePath) {
  const locale = routePath.split('/').filter(Boolean)[0]
  return prefixedLocales.includes(locale) ? locale : 'en'
}

function localUrlPath(value) {
  if (!value || /^(?:mailto:|tel:|javascript:|#)/i.test(value)) return null
  try {
    const url = new URL(value, siteUrl)
    if (url.origin !== siteUrl) return null
    return normalizePathname(url.pathname)
  } catch {
    return null
  }
}

async function fetchWithRetry(url, options) {
  let response
  let lastError
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const headers = new Headers(options?.headers)
    headers.set('connection', 'close')
    try {
      response = await fetch(url, { ...options, headers, signal: AbortSignal.timeout(30000) })
      if (response.status < 500 || attempt === 2) return response
      await response.arrayBuffer()
    } catch (error) {
      lastError = error
      if (attempt === 2) {
        throw new Error(`request failed after 3 attempts: ${url}`, { cause: lastError })
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 150 * (attempt + 1)))
  }
  return response
}

async function auditPage(baseUrl, routePath, validPaths, redirectSources, linkedAssets, brokenLinks) {
  const response = await fetchWithRetry(`${baseUrl}${routePath}`, { redirect: 'manual', headers: { accept: 'text/html' } })
  const scope = routePath
  if (response.status !== 200) {
    addError(scope, `expected HTTP 200, received ${response.status}`)
    return
  }
  if (!response.headers.get('content-type')?.includes('text/html')) addError(scope, 'response is not HTML')

  const html = await response.text()
  if (html.length < 1000) addError(scope, `HTML response is unexpectedly small (${html.length} bytes)`)

  const title = textContent(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1])
  if (!title) addError(scope, 'title is empty')
  for (const name of ['description', 'keywords']) {
    if (!findMeta(html, 'name', name)?.trim()) addError(scope, `meta ${name} is empty or missing`)
  }
  const robots = findMeta(html, 'name', 'robots')?.toLowerCase() || ''
  if (!robots.includes('index') || robots.includes('noindex') || !robots.includes('follow')) {
    addError(scope, `public page robots must allow indexing and following (${robots || 'missing'})`)
  }
  for (const property of ['og:title', 'og:description', 'og:url']) {
    if (!findMeta(html, 'property', property)?.trim()) addError(scope, `${property} is empty or missing`)
  }
  if (!findMeta(html, 'name', 'twitter:card')?.trim()) addError(scope, 'twitter:card is empty or missing')

  const canonical = findLink(html, 'canonical')
  const expectedCanonical = `${siteUrl}${routePath}`
  if (canonical !== expectedCanonical) addError(scope, `canonical mismatch: ${canonical || 'missing'}`)
  for (const hreflang of [...locales, 'x-default']) {
    if (!findLink(html, 'alternate', hreflang)) addError(scope, `missing hreflang ${hreflang}`)
  }

  const htmlTag = parseAttributes(tags(html, 'html')[0] || '')
  const locale = expectedLocale(routePath)
  if (htmlTag.lang !== locale) addError(scope, `html lang is ${htmlTag.lang || 'missing'}, expected ${locale}`)

  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => textContent(match[1]))
  if (headings.length !== 1) addError(scope, `expected one H1, found ${headings.length}`)
  else if (!headings[0]) addError(scope, 'H1 is empty')

  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1]
  const mainText = textContent(main)
  if (mainText.length < 80) addError(scope, `main content is empty or too short (${mainText.length} characters)`)
  if (!/<script\b[^>]*type="application\/ld\+json"/i.test(html)) addError(scope, 'JSON-LD is missing')
  for (const tag of tags(html, 'a')) {
    const href = parseAttributes(tag).href
    const pathname = localUrlPath(href)
    if (pathname && !validPaths.has(pathname) && !redirectSources.has(pathname)) {
      brokenLinks.add(`${routePath} -> ${href}`)
    }
  }

  for (const tagName of ['img', 'source', 'video']) {
    for (const tag of tags(html, tagName)) {
      const source = parseAttributes(tag).src
      const pathname = localUrlPath(source)
      if (pathname && !pathname.startsWith('/_next/')) linkedAssets.add(pathname)
    }
  }
}

async function auditInParallel(items, worker, concurrency = 6) {
  let cursor = 0
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor
      cursor += 1
      try {
        await worker(items[index])
      } catch (error) {
        addError(items[index], error instanceof Error ? error.message : String(error))
      }
    }
  }))
}

async function validateNotFound(baseUrl, routePath, locale) {
  const response = await fetchWithRetry(`${baseUrl}${routePath}`, { redirect: 'manual' })
  const html = await response.text()
  if (response.status !== 404) addError(routePath, `expected HTTP 404, received ${response.status}`)
  const title = textContent(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1])
  if (!title) addError(routePath, '404 title is empty or missing')
  for (const name of ['description', 'keywords']) {
    if (!findMeta(html, 'name', name)?.trim()) addError(routePath, `404 meta ${name} is empty or missing`)
  }
  const streamedNotFound = html.includes('not-found-view') && html.includes('\\"aria-label\\":\\"404\\"')
  if (!textContent(html).includes('404') && !streamedNotFound) {
    addError(routePath, '404 response body is empty or missing its status content')
  }
  const robotsValues = tags(html, 'meta')
    .map(parseAttributes)
    .filter((attributes) => attributes.name?.toLowerCase() === 'robots')
    .map((attributes) => attributes.content?.toLowerCase() || '')
  if (!robotsValues.some((value) => value.includes('noindex'))) addError(routePath, '404 page is missing noindex')
  if (!robotsValues.some((value) => value.includes('nofollow'))) addError(routePath, '404 page is missing nofollow')
  const htmlTag = parseAttributes(tags(html, 'html')[0] || '')
  const streamedLocale = html.includes(`\\"lang\\":\\"${locale}\\"`)
  if (htmlTag.lang !== locale && !streamedLocale) {
    addError(routePath, `404 html lang is ${htmlTag.lang || 'missing'}, expected ${locale}`)
  }
}

async function main() {
  const inventory = await collectRoutes()
  const validPaths = new Set(inventory.routes.map(normalizePathname))
  const sitemapPaths = new Set(inventory.sitemapRoutes)
  if (validPaths.size !== inventory.routes.length) addError('routes', 'duplicate public routes found')
  if (inventory.routes.length !== 228) addError('routes', `expected 228 public routes, found ${inventory.routes.length}`)
  if (inventory.sitemapRoutes.length !== 208) addError('routes', `expected 208 sitemap routes, found ${inventory.sitemapRoutes.length}`)

  const redirectSources = validateVercelConfig(validPaths)
  const sitemapResult = validateSitemap(sitemapPaths)

  const configuredBaseUrl = process.env.PAGE_AUDIT_BASE_URL?.replace(/\/$/, '')
  if (!configuredBaseUrl) {
    throw new Error(
      'PAGE_AUDIT_BASE_URL is required. Start the production server first, then run ' +
      '`PAGE_AUDIT_BASE_URL=http://127.0.0.1:3000 npm run audit:pages`.',
    )
  }
  const baseUrl = configuredBaseUrl
  const linkedAssets = new Set(['/favicon.ico', '/robots.txt', '/sitemap.xml', '/ads.txt', '/collet-data.js'])
  const brokenLinks = new Set()

  const notFoundChecks = locales.flatMap((locale) => [
    { routePath: localizedPath('/__page-audit-missing__', locale), locale },
    { routePath: localizedPath('/site-404', locale), locale },
  ])
  await auditInParallel(notFoundChecks, ({ routePath, locale }) =>
    validateNotFound(baseUrl, routePath, locale))

  await auditInParallel(inventory.routes, (routePath) =>
    auditPage(baseUrl, routePath, validPaths, redirectSources, linkedAssets, brokenLinks))

  for (const brokenLink of brokenLinks) addError('internal link', brokenLink)

  await auditInParallel([...linkedAssets], async (assetPath) => {
    const response = await fetchWithRetry(`${baseUrl}${assetPath}`, { redirect: 'manual' })
    if (response.status !== 200) addError(assetPath, `expected asset HTTP 200, received ${response.status}`)
    const content = await response.arrayBuffer()
    if (content.byteLength === 0) addError(assetPath, 'asset response is empty')
  })

  const liveSitemap = await (await fetchWithRetry(`${baseUrl}/sitemap.xml`)).text()
  const liveRobots = await (await fetchWithRetry(`${baseUrl}/robots.txt`)).text()
  if (liveSitemap.trim() !== sitemapResult.sitemap.trim()) addError('/sitemap.xml', 'served sitemap differs from public/sitemap.xml')
  if (liveRobots.trim() !== sitemapResult.robots.trim()) addError('/robots.txt', 'served robots.txt differs from public/robots.txt')

  if (errors.length) {
    console.error(`Page audit failed with ${errors.length} issue(s):`)
    for (const error of errors) console.error(`- ${error}`)
    process.exitCode = 1
    return
  }

  console.log(
    `Page audit passed: ${inventory.routes.length} public pages, ${sitemapResult.count} sitemap URLs, ` +
    `${linkedAssets.size} rendered/static assets, ${notFoundChecks.length} localized 404 responses.`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
