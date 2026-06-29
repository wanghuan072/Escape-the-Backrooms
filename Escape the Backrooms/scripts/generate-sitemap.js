import crypto from 'crypto'
import fs from 'fs'
import path from 'path'
import process from 'node:process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CACHE_FILE = path.join(__dirname, '.sitemap-cache.json')
const PUBLIC_SITEMAP = path.join(__dirname, '../public/sitemap.xml')

// SEO配置
const seoConfig = {
  fullDomain: 'https://escapethebackrooms.org',
}

// 支持的语言列表
const supportedLocales = ['en', 'de', 'fr', 'es']

// 基础路由配置
// Note: Legal pages (privacy-policy, terms-of-service, copyright) are excluded from sitemap
const baseRoutes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/levels', name: 'levels', priority: 0.9, changefreq: 'weekly' },
  { path: '/maps-keys', name: 'maps-keys', priority: 0.9, changefreq: 'weekly' },
  { path: '/codes-solutions', name: 'codes-solutions', priority: 0.9, changefreq: 'weekly' },
  { path: '/search', name: 'search', priority: 0.7, changefreq: 'daily' },
]

function today() {
  return new Date().toISOString().split('T')[0]
}

function fingerprint(value) {
  return crypto.createHash('sha256').update(String(value)).digest('hex').slice(0, 16)
}

function createLocalizedPath(routePath, locale = 'en') {
  if (locale === 'en') {
    return routePath
  }
  return `/${locale}${routePath}`
}

function fullUrl(routePath) {
  return `${seoConfig.fullDomain}${routePath}`
}

function loadCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'))
    }
  } catch (error) {
    console.warn('⚠️  Failed to read sitemap cache:', error.message)
  }
  return {}
}

function parseSitemapLastmods(sitemapPath) {
  const map = {}
  if (!fs.existsSync(sitemapPath)) return map

  const content = fs.readFileSync(sitemapPath, 'utf8')
  const blocks = content.match(/<url>[\s\S]*?<\/url>/g) || []

  for (const block of blocks) {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]
    const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]
    if (loc && lastmod) {
      map[loc] = lastmod
    }
  }

  return map
}

/**
 * 仅新 URL 使用当天日期；已在 cache 或旧 sitemap 中的 URL 保留原 lastmod
 */
function resolveLastmod(loc, cache, sitemapLastmods) {
  if (cache[loc]?.lastmod) {
    return { lastmod: cache[loc].lastmod, isNew: false }
  }
  if (sitemapLastmods[loc]) {
    return { lastmod: sitemapLastmods[loc], isNew: false }
  }
  return { lastmod: today(), isNew: true }
}

async function loadData(locale = 'en') {
  const data = {
    levels: [],
    maps: [],
  }

  try {
    const levelsModule = await import(`../src/data/levels/${locale}.js`).catch(() =>
      import('../src/data/levels/en.js'),
    )
    data.levels = levelsModule.default || levelsModule.levels || []
  } catch (error) {
    console.warn(`Failed to load levels data (${locale}):`, error.message)
  }

  try {
    const mapsModule = await import(`../src/data/maps/${locale}.js`).catch(() =>
      import('../src/data/maps/en.js'),
    )
    data.maps = mapsModule.default || mapsModule.maps || []
  } catch (error) {
    console.warn(`Failed to load maps data (${locale}):`, error.message)
  }

  return data
}

function generateUrlXml(loc, lastmod, priority, changefreq) {
  const roundedPriority = priority.toFixed(1)
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

async function collectUrlEntries() {
  const allData = {}
  for (const locale of supportedLocales) {
    allData[locale] = await loadData(locale)
  }

  const entries = []

  baseRoutes.forEach((route) => {
    supportedLocales.forEach((locale) => {
      const routePath = createLocalizedPath(route.path, locale)
      entries.push({
        loc: fullUrl(routePath),
        priority: route.priority,
        changefreq: route.changefreq,
        hash: fingerprint(`route:${routePath}`),
      })
    })
  })

  supportedLocales.forEach((locale) => {
    const levels = allData[locale].levels || []
    levels.forEach((level) => {
      if (!level?.addressBar) return
      const routePath = createLocalizedPath(`/levels/${level.addressBar}`, locale)
      entries.push({
        loc: fullUrl(routePath),
        priority: 0.8,
        changefreq: 'monthly',
        hash: fingerprint(`level:${locale}:${level.id}:${level.addressBar}`),
      })
    })
  })

  supportedLocales.forEach((locale) => {
    const maps = allData[locale].maps || []
    maps.forEach((map) => {
      if (!map?.addressBar) return
      const routePath = createLocalizedPath(`/maps-keys/${map.addressBar}`, locale)
      entries.push({
        loc: fullUrl(routePath),
        priority: 0.8,
        changefreq: 'monthly',
        hash: fingerprint(`map:${locale}:${map.id}:${map.addressBar}`),
      })
    })
  })

  return entries
}

async function generateSitemap() {
  const cache = loadCache()
  const sitemapLastmods = parseSitemapLastmods(PUBLIC_SITEMAP)
  const entries = await collectUrlEntries()

  const nextCache = {}
  let newCount = 0
  let preservedCount = 0

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`

  for (const entry of entries) {
    const { lastmod, isNew } = resolveLastmod(entry.loc, cache, sitemapLastmods)
    if (isNew) newCount += 1
    else preservedCount += 1

    nextCache[entry.loc] = {
      hash: entry.hash,
      lastmod,
    }

    sitemapXml += `\n${generateUrlXml(entry.loc, lastmod, entry.priority, entry.changefreq)}`
  }

  sitemapXml += `\n</urlset>`

  return {
    sitemapXml,
    nextCache,
    stats: {
      total: entries.length,
      newCount,
      preservedCount,
    },
  }
}

async function main() {
  try {
    console.log('📦 Loading data...')

    console.log('🗺️  Generating sitemap...')
    const { sitemapXml, nextCache, stats } = await generateSitemap()

    fs.writeFileSync(CACHE_FILE, `${JSON.stringify(nextCache, null, 2)}\n`, 'utf8')
    console.log('✅ Updated .sitemap-cache.json')

    const publicPath = PUBLIC_SITEMAP
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    const publicDir = path.dirname(publicPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(publicPath, sitemapXml, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemapXml, 'utf8')
      console.log('✅ Generated sitemap.xml in dist folder')
    }

    console.log(`✅ Total URLs in sitemap: ${stats.total}`)
    console.log(`   New URLs (lastmod = today): ${stats.newCount}`)
    console.log(`   Existing URLs (lastmod preserved): ${stats.preservedCount}`)

    const enUrls = sitemapXml.match(/<loc>https:\/\/escapethebackrooms\.org\/[^<]*<\/loc>/g) || []
    const enUrlCount = enUrls.filter((url) => !url.includes('/de/') && !url.includes('/fr/') && !url.includes('/es/')).length
    const deUrlCount = enUrls.filter((url) => url.includes('/de/')).length
    const frUrlCount = enUrls.filter((url) => url.includes('/fr/')).length
    const esUrlCount = enUrls.filter((url) => url.includes('/es/')).length
    const levelsCount = (sitemapXml.match(/\/levels\//g) || []).length
    const mapsCount = (sitemapXml.match(/\/maps-keys\//g) || []).length

    console.log('\n📊 URLs by language:')
    console.log(`   English (en): ${enUrlCount}`)
    console.log(`   German (de): ${deUrlCount}`)
    console.log(`   French (fr): ${frUrlCount}`)
    console.log(`   Spanish (es): ${esUrlCount}`)
    console.log(`   Total: ${stats.total}`)

    console.log('\n📊 URLs by category:')
    console.log(`   Base routes: ${baseRoutes.length * supportedLocales.length}`)
    console.log(`   Levels: ${levelsCount}`)
    console.log(`   Maps: ${mapsCount}`)

    const validation =
      sitemapXml.includes('<?xml') &&
      sitemapXml.includes('<urlset') &&
      sitemapXml.includes('</urlset>')

    if (validation) {
      console.log('\n✅ Sitemap validation passed')
    } else {
      console.warn('\n⚠️  Sitemap validation failed')
    }
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

main()
