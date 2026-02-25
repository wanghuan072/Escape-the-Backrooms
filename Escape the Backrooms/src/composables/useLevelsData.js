import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * 加载 levels 数据
 */
const loadLevelsData = async (lang = 'en') => {
  try {
    const module = await import(`../data/levels/${lang}.js`)
    const data = module.default || module.levels || []
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error(`Failed to load levels data (lang: ${lang})`, error)
    // 如果加载失败，尝试回退到英文
    if (lang !== 'en') {
      try {
        const fallbackModule = await import(`../data/levels/en.js`)
        const data = fallbackModule.default || fallbackModule.levels || []
        return Array.isArray(data) ? data : []
      } catch (fallbackError) {
        console.error(`Failed to load fallback levels data`, fallbackError)
        return []
      }
    }
    return []
  }
}

/**
 * Levels 数据 composable
 */
export function useLevelsData() {
  const { locale } = useI18n()
  const data = ref([])
  const loading = ref(false)

  /**
   * 加载数据
   */
  const loadData = async (lang = null) => {
    const currentLang = lang || locale.value || 'en'
    loading.value = true
    try {
      data.value = await loadLevelsData(currentLang)
    } catch (error) {
      console.error('Error loading levels data:', error)
      data.value = []
    } finally {
      loading.value = false
    }
  }

  /**
   * 根据 addressBar 查找 level
   */
  const findByAddress = (addressBar) => {
    return data.value.find(level => level.addressBar === addressBar)
  }

  /**
   * 根据 id 查找 level
   */
  const findById = (id) => {
    return data.value.find(level => level.id === id)
  }

  /**
   * 获取首页显示的 levels
   */
  const getHomeLevels = () => {
    return data.value.filter(level => level.isHome === true)
  }

  /**
   * 根据 category 分组
   */
  const getGroupedLevels = () => {
    const groups = {}
    data.value.forEach(level => {
      const category = level.category || 'Other'
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(level)
    })
    return groups
  }

  /**
   * 获取相邻的 level（用于上一篇/下一篇）
   */
  const getAdjacentLevels = (currentLevel) => {
    if (!currentLevel) return { prev: null, next: null }
    
    const index = data.value.findIndex(l => l.id === currentLevel.id)
    return {
      prev: index > 0 ? data.value[index - 1] : null,
      next: index >= 0 && index < data.value.length - 1 ? data.value[index + 1] : null
    }
  }

  return {
    data,
    loading,
    loadData,
    findByAddress,
    findById,
    getHomeLevels,
    getGroupedLevels,
    getAdjacentLevels
  }
}
