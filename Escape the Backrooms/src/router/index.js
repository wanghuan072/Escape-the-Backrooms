import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const LevelsView = () => import('../views/LevelsView.vue')
const LevelDetailView = () => import('../views/LevelDetailView.vue')
const MapsKeysView = () => import('../views/MapsKeysView.vue')
const MapDetailView = () => import('../views/MapDetailView.vue')
const CodesSolutionsView = () => import('../views/CodesSolutionsView.vue')
const RelatedGamesView = () => import('../views/RelatedGamesView.vue')
const RelatedGameDetailView = () => import('../views/RelatedGameDetailView.vue')
// import WikiView from '../views/wiki/WikiView.vue'
// import EntitiesView from '../views/wiki/EntitiesView.vue'
// import EntityDetailView from '../views/wiki/EntityDetailView.vue'
// import GuidesView from '../views/GuidesView.vue'
// import GuideDetailView from '../views/GuideDetailView.vue'
const SearchView = () => import('../views/SearchView.vue')
import i18n, { loadLocaleMessages } from '../i18n'
import { extractLocaleFromPath } from '../utils/locales.js'

// 支持的语言列表
const supportedLocales = ['en', 'de', 'fr', 'es']

// 创建路由路径（为不同语言添加前缀）
function createRoutePath(path, locale = 'en') {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 基础路由配置
const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/levels',
    name: 'levels',
    component: LevelsView,
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/levels/:slug',
    name: 'level-detail',
    component: LevelDetailView,
    // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
  },
  {
    path: '/maps-keys',
    name: 'maps-keys',
    component: MapsKeysView,
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/maps-keys/:slug',
    name: 'map-detail',
    component: MapDetailView,
    // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
  },
  {
    path: '/codes-solutions',
    name: 'codes-solutions',
    component: CodesSolutionsView,
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/backrooms-games',
    name: 'related-games',
    component: RelatedGamesView,
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/backrooms-games/:slug',
    name: 'related-game-detail',
    component: RelatedGameDetailView,
    // Detail page TDK is loaded from related game data
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPolicyView.vue'),
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: () => import('../views/TermsOfServiceView.vue'),
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: () => import('../views/CopyrightView.vue'),
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/AboutUsView.vue'),
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/ContactUsView.vue'),
    meta: {
      seo: {
        // TDK is loaded from i18n in useAutoSEO
      }
    }
  },
]

// 生成所有语言的路由
const routes = []
baseRoutes.forEach(route => {
  // 英文路由（无前缀）
  routes.push({
    ...route,
    path: route.path,
    name: route.name,
    meta: {
      ...route.meta,
      locale: 'en'
    }
  })
  
  // 其他语言路由（有前缀）
  supportedLocales.forEach(locale => {
    if (locale !== 'en') {
      // 为每个语言创建独立的路由，使用唯一的名称
      const localizedRoute = {
        ...route,
        path: createRoutePath(route.path, locale),
        name: route.name ? `${route.name}-${locale}` : undefined,
        meta: {
          ...route.meta,
          locale: locale
        }
      }
      routes.push(localizedRoute)
    }
  })
})

routes.push({
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('../views/NotFoundView.vue'),
  meta: {
    noIndex: true,
  },
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 路由守卫：从 URL 中提取语言并设置 i18n
router.beforeEach(async (to) => {
  // 从路径中提取语言
  const locale = extractLocaleFromPath(to.path)

  await loadLocaleMessages(locale)

  // 强制设置 i18n 语言（确保在组件加载前设置）
  i18n.global.locale.value = locale
})

export default router
