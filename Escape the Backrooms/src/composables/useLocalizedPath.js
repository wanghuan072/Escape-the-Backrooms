import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { addLocalePrefix, extractLocaleFromPath } from '../utils/locales.js'
import { translateLocalizedPath } from '../utils/localizedRoutes.js'

export { extractLocaleFromPath } from '../utils/locales.js'

/**
 * 获取本地化路径的 composable
 */
export function useLocalizedPath() {
  const { locale } = useI18n()
  const route = useRoute()
  
  const getLocalizedPath = (path) => {
    // 优先从当前路由路径中提取语言（更可靠）
    // 这样可以确保即使 locale.value 还没有更新，也能使用正确的语言前缀
    const currentLocale = extractLocaleFromPath(route.path)
    
    return addLocalePrefix(path, currentLocale)
  }
  
  // 从当前路由路径中提取语言（更可靠）
  const getCurrentLocale = () => {
    return extractLocaleFromPath(route.path)
  }
  
  return {
    getLocalizedPath,
    getCurrentLocale,
    getTranslatedPath: translateLocalizedPath,
    locale
  }
}
