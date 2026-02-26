import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://escapethebackrooms.org'
}

// 支持的语言列表
const supportedLocales = ['en', 'de', 'fa']

// 生成本地化路径
function createLocalizedPath(path, locale = 'en') {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 基础路由配置
// Note: Legal pages (privacy-policy, terms-of-service, copyright) are excluded from sitemap
const baseRoutes = [
  { path: '/', name: 'home', priority: 1.0, changefreq: 'weekly' },
  { path: '/levels', name: 'levels', priority: 0.9, changefreq: 'weekly' },
  { path: '/maps-keys', name: 'maps-keys', priority: 0.9, changefreq: 'weekly' },
  { path: '/codes-solutions', name: 'codes-solutions', priority: 0.9, changefreq: 'weekly' },
  // { path: '/wiki', name: 'wiki', priority: 0.8, changefreq: 'weekly' },
  // { path: '/wiki/entities', name: 'wiki-entities', priority: 0.8, changefreq: 'weekly' },
  // { path: '/guides', name: 'guides', priority: 0.8, changefreq: 'weekly' },
  { path: '/search', name: 'search', priority: 0.7, changefreq: 'daily' },
]

// 动态加载数据（支持多语言）
async function loadData(locale = 'en') {
  const data = {
    levels: [],
    maps: [],
    entities: []
  }

  try {
    // 加载 levels 数据
    const levelsModule = await import(`../src/data/levels/${locale}.js`).catch(() => 
      import('../src/data/levels/en.js')
    )
    data.levels = levelsModule.default || levelsModule.levels || []
  } catch (error) {
    console.warn(`Failed to load levels data (${locale}):`, error.message)
  }

  try {
    // 加载 maps 数据
    const mapsModule = await import(`../src/data/maps/${locale}.js`).catch(() => 
      import('../src/data/maps/en.js')
    )
    data.maps = mapsModule.default || mapsModule.maps || []
  } catch (error) {
    console.warn(`Failed to load maps data (${locale}):`, error.message)
  }

  // try {
  //   // 加载 entities 数据
  //   const entitiesModule = await import('../src/data/wiki/entities.js')
  //   data.entities = entitiesModule.default || []
  // } catch (error) {
  //   console.warn('Failed to load entities data:', error.message)
  // }

  return data
}

// 生成单个URL的XML
function generateUrlXml(path, lastmod, priority, changefreq) {
  const roundedPriority = priority.toFixed(1)
  return `  <url>
    <loc>${seoConfig.fullDomain}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${roundedPriority}</priority>
  </url>`
}

// 生成站点地图（支持多语言）
async function generateSitemap() {
  const lastmod = new Date().toISOString().split('T')[0]

  // 加载所有语言的数据
  const allData = {}
  for (const locale of supportedLocales) {
    allData[locale] = await loadData(locale)
  }

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`

  // 生成基础路由（为每种语言生成）
  baseRoutes.forEach(route => {
    supportedLocales.forEach(locale => {
      const localizedPath = createLocalizedPath(route.path, locale)
      sitemapXml += `\n${generateUrlXml(localizedPath, lastmod, route.priority, route.changefreq)}`
    })
  })

  // 为 levels 生成URL（为每种语言生成）
  supportedLocales.forEach(locale => {
    const levels = allData[locale].levels || []
    levels.forEach(level => {
      if (!level || !level.addressBar) return
      const levelPath = createLocalizedPath(`/levels/${level.addressBar}`, locale)
      sitemapXml += `\n${generateUrlXml(levelPath, lastmod, 0.8, 'monthly')}`
    })
  })

  // 为 maps 生成URL（为每种语言生成）
  supportedLocales.forEach(locale => {
    const maps = allData[locale].maps || []
    maps.forEach(map => {
      if (!map || !map.addressBar) return
      const mapPath = createLocalizedPath(`/maps-keys/${map.addressBar}`, locale)
      sitemapXml += `\n${generateUrlXml(mapPath, lastmod, 0.8, 'monthly')}`
    })
  })

  // 为 entities 生成URL（为每种语言生成）
  // const entities = data.entities || []
  // entities.forEach(entity => {
  //   if (!entity || !entity.slug) return
  //   const entityPath = `/wiki/entities/${entity.slug}`
  //   sitemapXml += `\n${generateUrlXml(entityPath, lastmod, 0.7, 'monthly')}`
  // })

  sitemapXml += `\n</urlset>`

  return sitemapXml
}

// 生成并保存站点地图
async function main() {
  try {
    console.log('📦 Loading data...')
    
    console.log('🗺️  Generating sitemap...')
    const sitemapContent = await generateSitemap()
    
    const publicPath = path.join(__dirname, '../public/sitemap.xml')
    const distPath = path.join(__dirname, '../dist/sitemap.xml')

    // 确保public目录存在
    const publicDir = path.dirname(publicPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    fs.writeFileSync(publicPath, sitemapContent, 'utf8')
    console.log('✅ Generated sitemap.xml in public folder')

    // 如果dist目录存在，也复制一份
    if (fs.existsSync(path.join(__dirname, '../dist'))) {
      fs.writeFileSync(distPath, sitemapContent, 'utf8')
      console.log('✅ Generated sitemap.xml in dist folder')
    }

    const urlCount = (sitemapContent.match(/<url>/g) || []).length
    console.log(`✅ Total URLs in sitemap: ${urlCount}`)
    
    // 统计各语言的URL数量
    const enUrls = sitemapContent.match(/<loc>https:\/\/escapethebackrooms\.org\/[^<]*<\/loc>/g) || []
    const enUrlCount = enUrls.filter(url => !url.includes('/de/') && !url.includes('/fa/')).length
    const deUrlCount = enUrls.filter(url => url.includes('/de/')).length
    const faUrlCount = enUrls.filter(url => url.includes('/fa/')).length
    
    // 统计各类URL数量
    const levelsCount = (sitemapContent.match(/\/levels\//g) || []).length
    const mapsCount = (sitemapContent.match(/\/maps-keys\//g) || []).length
    
    console.log('\n📊 URLs by language:')
    console.log(`   English (en): ${enUrlCount}`)
    console.log(`   German (de): ${deUrlCount}`)
    console.log(`   French (fa): ${faUrlCount}`)
    console.log(`   Total: ${urlCount}`)
    
    console.log('\n📊 URLs by category:')
    console.log(`   Base routes: ${baseRoutes.length * supportedLocales.length}`)
    console.log(`   Levels: ${levelsCount}`)
    console.log(`   Maps: ${mapsCount}`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml') && 
                      sitemapContent.includes('<urlset') && 
                      sitemapContent.includes('</urlset>')
    
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

