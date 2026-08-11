<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeGptOutOfPageAds from './components/ads/HomeGptOutOfPageAds.vue'
import PostGptOutOfPageAds from './components/ads/PostGptOutOfPageAds.vue'
import { useAutoSEO } from './seo/composables.js'
import { extractLocaleFromPath } from './composables/useLocalizedPath.js'
import './assets/css/public.css'

// 启用自动 SEO
useAutoSEO()

const route = useRoute()
const mainElement = ref(null)
let mediaObserver

const optimizeEmbeddedMedia = () => {
  if (!mainElement.value) return

  mainElement.value.querySelectorAll('.v-html-style img').forEach((image) => {
    if (!image.hasAttribute('loading')) image.setAttribute('loading', 'lazy')
    if (!image.hasAttribute('decoding')) image.setAttribute('decoding', 'async')
  })

  mainElement.value.querySelectorAll('.v-html-style iframe').forEach((frame) => {
    if (!frame.hasAttribute('loading')) frame.setAttribute('loading', 'lazy')
  })
}

onMounted(async () => {
  await nextTick()
  optimizeEmbeddedMedia()

  mediaObserver = new MutationObserver(optimizeEmbeddedMedia)
  mediaObserver.observe(mainElement.value, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  mediaObserver?.disconnect()
})
const isHomeRoute = computed(() => {
  const routeName = String(route.name ?? '')
  return routeName === 'home' || routeName.startsWith('home-')
})

// GPT banner 在每个页面内按 1 → 2 → 3 循环，切换页面后重新从 1 开始。
const bannerSeq = ref(0)
provide('gptNextBannerUnit', () => {
  bannerSeq.value = bannerSeq.value >= 3 ? 1 : bannerSeq.value + 1
  return bannerSeq.value
})

watch(
  () => route.fullPath,
  () => {
    bannerSeq.value = 0
  },
  { flush: 'sync' },
)

// 更新 HTML lang 属性
const { locale } = useI18n()

const updateHtmlLang = () => {
  if (typeof document === 'undefined') return
  
  // 从路由路径中提取语言
  const currentLocale = extractLocaleFromPath(route.path)
  
  // 更新 HTML lang 属性
  document.documentElement.lang = currentLocale
}

// 监听路由变化，更新 lang 属性
watch(() => route.path, () => {
  updateHtmlLang()
}, { immediate: true })

// 监听语言变化，更新 lang 属性
watch(() => locale.value, () => {
  updateHtmlLang()
}, { immediate: true })
</script>

<template>
  <div id="app">
    <HomeGptOutOfPageAds v-if="isHomeRoute" :key="`home-${route.fullPath}`" />
    <PostGptOutOfPageAds v-else :key="`post-${route.fullPath}`" />
    <Header />
    <main ref="mainElement">
      <router-view :key="route.fullPath" />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

main {
  flex: 1;
  position: relative;
  z-index: 1;
}
</style>
