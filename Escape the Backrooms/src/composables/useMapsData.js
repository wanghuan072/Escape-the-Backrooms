import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/**
 * 加载 maps 数据
 */
const loadMapsData = async (lang = 'en') => {
  try {
    const module = await import(`../data/maps/${lang}.js`)
    const data = module.default || module.maps || []
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error(`Failed to load maps data (lang: ${lang})`, error)
    // 如果加载失败，尝试回退到英文
    if (lang !== 'en') {
      try {
        const fallbackModule = await import(`../data/maps/en.js`)
        const data = fallbackModule.default || fallbackModule.maps || []
        return Array.isArray(data) ? data : []
      } catch (fallbackError) {
        console.error(`Failed to load fallback maps data`, fallbackError)
        return []
      }
    }
    return []
  }
}

/**
 * Maps 数据 composable
 */
export function useMapsData() {
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
      data.value = await loadMapsData(currentLang)
    } catch (error) {
      console.error('Error loading maps data:', error)
      data.value = []
    } finally {
      loading.value = false
    }
  }

  /**
   * 根据 addressBar 查找 map
   */
  const findByAddress = (addressBar) => {
    return data.value.find(map => map.addressBar === addressBar)
  }

  /**
   * 根据 id 查找 map
   */
  const findById = (id) => {
    return data.value.find(map => map.id === id)
  }

  /**
   * 获取首页显示的 maps
   */
  const getHomeMaps = () => {
    return data.value.filter(map => map.isHome === true)
  }

  /**
   * 根据 category 分组
   */
  const getGroupedMaps = () => {
    const groups = {}
    data.value.forEach(map => {
      const category = map.category || 'Other'
      if (!groups[category]) {
        groups[category] = []
      }
      groups[category].push(map)
    })
    return groups
  }

  /**
   * 获取相邻的 map（用于上一篇/下一篇）
   */
  const getAdjacentMaps = (currentMap) => {
    if (!currentMap) return { prev: null, next: null }
    
    const index = data.value.findIndex(m => m.id === currentMap.id)
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
    getHomeMaps,
    getGroupedMaps,
    getAdjacentMaps
  }
}
