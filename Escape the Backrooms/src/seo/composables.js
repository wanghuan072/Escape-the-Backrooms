import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import i18n from '../i18n'
import { seoConfig } from './config.js'

// SEO composable
export function useSEO() {
  const route = useRoute()

  // 当前页面的SEO数据
  const currentSEO = ref({})

  // 获取当前页面路径
  const currentPath = computed(() => {
    return route.path
  })

  // 获取Canonical URL
  const canonicalUrl = computed(() => {
    return `${seoConfig.fullDomain}${currentPath.value}`
  })

  // 设置页面SEO数据
  const setSEO = (seoData) => {
    currentSEO.value = {
      ...seoConfig.defaults,
      ...seoData
    }
    updateMetaTags()
  }

  // 更新HTML meta标签
  const updateMetaTags = () => {
    if (typeof document === 'undefined') return

    const seo = currentSEO.value

    // 更新title
    document.title = seo.title || seoConfig.defaults.title

    // 更新或创建meta标签
    updateMetaTag('description', seo.description)
    updateMetaTag('keywords', seo.keywords)
    updateMetaTag('author', seo.author)

    // Open Graph标签
    updateMetaTag('og:title', seo.title, 'property')
    updateMetaTag('og:description', seo.description, 'property')
    updateMetaTag('og:image', seo.image, 'property')
    updateMetaTag('og:url', canonicalUrl.value, 'property')
    updateMetaTag('og:type', seo.type, 'property')
    updateMetaTag('og:site_name', 'Escape the Backrooms Wiki', 'property')

    // Twitter Card标签
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', seo.title, 'name')
    updateMetaTag('twitter:description', seo.description, 'name')
    updateMetaTag('twitter:image', seo.image, 'name')
    updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')

    // Canonical URL
    updateCanonicalLink()
  }

  // 更新单个meta标签
  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return

    // 查找现有标签
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (tag) {
      // 如果标签存在，直接更新content
      tag.setAttribute('content', content)
    } else {
      // 如果标签不存在，创建新标签
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      tag.setAttribute('content', content)
      document.head.appendChild(tag)
    }
  }

  // 更新Canonical链接
  const updateCanonicalLink = () => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl.value)
  }

  // 生成结构化数据
  const generateStructuredData = (pageType = 'WebPage') => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: currentSEO.value.title,
      description: currentSEO.value.description,
      url: canonicalUrl.value,
      publisher: {
        '@type': 'Organization',
        name: 'Escape the Backrooms Wiki',
        url: seoConfig.fullDomain,
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.fullDomain}/images/logo.webp`
        },
        sameAs: [
          `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
          `https://facebook.com/${seoConfig.social.facebook}`,
          `https://instagram.com/${seoConfig.social.instagram}`,
          `https://discord.gg/${seoConfig.social.discord}`
        ]
      }
    }

    // 根据页面类型添加特定数据
    if (pageType === 'VideoGame') {
      baseData.genre = 'Horror Adventure'
      baseData.gamePlatform = ['PC', 'Steam']
      baseData.operatingSystem = ['Windows']
      baseData.applicationCategory = 'Game'
      baseData.developer = {
        '@type': 'Organization',
        name: 'Fancy Games'
      }
      baseData.publisher = {
        ...baseData.publisher,
        name: 'Secret Mode'
      }
    }

    if (pageType === 'Article') {
      baseData.author = {
        '@type': 'Organization',
        name: 'Escape the Backrooms Community'
      }
      baseData.datePublished = new Date().toISOString()
      baseData.dateModified = new Date().toISOString()
    }

    return baseData
  }

  // 添加结构化数据到页面
  const addStructuredData = (data) => {
    if (typeof document === 'undefined') return

    // 只移除动态添加的结构化数据（不包含 data-seo-default 属性的），保留 index.html 中的默认值
    const dynamicScripts = document.querySelectorAll('script[type="application/ld+json"]:not([data-seo-default])')
    dynamicScripts.forEach(script => script.remove())

    // 添加新的结构化数据（标记为动态添加）
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-dynamic', 'true')
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  return {
    currentSEO,
    currentPath,
    canonicalUrl,
    setSEO,
    updateMetaTags,
    generateStructuredData,
    addStructuredData
  }
}

// 路由名称到SEO key的映射
const routeToSeoKey = {
  'home': 'home',
  'levels': 'levels',
  'level-detail': 'levelDetail',
  'maps-keys': 'mapsKeys',
  'map-detail': 'mapDetail',
  'codes-solutions': 'codes',
  'search': 'search',
  'about-us': 'aboutUs',
  'contact-us': 'contactUs',
  'privacy-policy': 'privacyPolicy',
  'terms-of-service': 'termsOfService',
  'copyright': 'copyright',
  'wiki': 'wiki',
  'wiki-entities': 'wikiEntities',
  'wiki-entity-detail': 'wikiEntityDetail',
  'guides': 'guides'
}

// 自动SEO composable - 监听路由变化自动设置SEO
export function useAutoSEO() {
  const { setSEO, generateStructuredData, addStructuredData } = useSEO()
  const route = useRoute()
  const { locale } = useI18n()
  
  // 处理SEO的函数
  const handleSEO = async () => {
    const routeName = route.name
    
    // 从路由名称中提取基础名称（移除语言后缀，如 'home-de' -> 'home', 'levels-de' -> 'levels'）
    let baseRouteName = routeName
    if (typeof routeName === 'string') {
      // 检查是否是带语言后缀的路由名称（以 '-en'、'-de' 或 '-fa' 结尾）
      const supportedLocales = ['en', 'de', 'fa']
      for (const loc of supportedLocales) {
        if (routeName.endsWith(`-${loc}`)) {
          baseRouteName = routeName.slice(0, -(loc.length + 1)) // 移除 '-en'、'-de' 或 '-fa'
          break
        }
      }
    }
    
    // 详情页的 SEO 由页面组件自己从数据中设置，跳过自动 SEO
    if (baseRouteName === 'level-detail' || baseRouteName === 'map-detail' || baseRouteName === 'wiki-entity-detail') {
      return
    }
    
    // 如果提取后的名称不在映射中，使用原始名称
    const actualRouteName = routeToSeoKey[baseRouteName] ? baseRouteName : routeName
    const seoKey = routeToSeoKey[actualRouteName]

    let finalSEOData = {
      ...seoConfig.defaults
    }
    let hasSeoData = false

    // 先从 i18n 获取静态页面的 TDK
    if (seoKey) {
      try {
        // 直接访问 i18n 的 messages，避免警告
        const messages = i18n.global.messages.value || i18n.global.messages
        const currentLocale = locale.value || 'en'
        const localeMessages = messages[currentLocale]
        
        if (localeMessages && localeMessages.tdk && localeMessages.tdk[seoKey]) {
          const tdk = localeMessages.tdk[seoKey]
          if (tdk && typeof tdk === 'object' && tdk.title) {
            finalSEOData = {
              ...finalSEOData,
              title: tdk.title,
              description: tdk.description || finalSEOData.description,
              keywords: tdk.keywords || finalSEOData.keywords
            }
            hasSeoData = true
          }
        }
      } catch (error) {
        // 静默处理错误
      }
    }

    // 如果从 i18n 获取失败，尝试从路由 meta 中获取 SEO 数据
    if (!hasSeoData && route.meta && route.meta.seo) {
      finalSEOData = {
        ...finalSEOData,
        ...route.meta.seo
      }
    }

    // 设置 SEO
    setSEO(finalSEOData)
    
    // 添加结构化数据
    const structuredData = generateStructuredData(finalSEOData.type === 'article' ? 'Article' : 'WebPage')
    addStructuredData(structuredData)
    
    // 更新 hreflang 标签
    updateHreflangTags()
  }
  
  // 更新 hreflang 标签（支持多语言）
  const updateHreflangTags = () => {
    if (typeof document === 'undefined') return
    
    // 移除现有的 hreflang 标签
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]')
    existingHreflangs.forEach(link => link.remove())
    
    const supportedLocales = ['en', 'de', 'fa']
    const currentPath = route.path
    
    // 从当前路径中提取基础路径（移除语言前缀）
    let basePath = currentPath
    const pathSegments = currentPath.split('/').filter(Boolean)
    if (pathSegments.length > 0 && supportedLocales.includes(pathSegments[0])) {
      pathSegments.shift()
      basePath = '/' + pathSegments.join('/')
    }
    
    // 为每种语言生成 hreflang 标签
    supportedLocales.forEach(locale => {
      const localizedPath = locale === 'en' ? basePath : `/${locale}${basePath}`
      const fullUrl = `${seoConfig.fullDomain}${localizedPath}`
      
      const link = document.createElement('link')
      link.setAttribute('rel', 'alternate')
      link.setAttribute('hreflang', locale)
      link.setAttribute('href', fullUrl)
      document.head.appendChild(link)
    })
    
    // 添加 x-default（指向英文版本）
    const defaultPath = basePath
    const defaultUrl = `${seoConfig.fullDomain}${defaultPath}`
    const defaultLink = document.createElement('link')
    defaultLink.setAttribute('rel', 'alternate')
    defaultLink.setAttribute('hreflang', 'x-default')
    defaultLink.setAttribute('href', defaultUrl)
    document.head.appendChild(defaultLink)
  }
  
  // 监听路由变化
  watch(
    [() => route.fullPath, () => route.name],
    async () => {
      await handleSEO()
    },
    { immediate: true }
  )
}

