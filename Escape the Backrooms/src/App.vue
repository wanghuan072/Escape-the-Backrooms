<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useAutoSEO } from './seo/composables.js'
import { extractLocaleFromPath } from './composables/useLocalizedPath.js'
import './assets/css/public.css'

// 启用自动 SEO
useAutoSEO()

// 更新 HTML lang 属性
const route = useRoute()
const { locale } = useI18n()

const updateHtmlLang = () => {
  if (typeof document === 'undefined') return
  
  // 从路由路径中提取语言
  const currentLocale = extractLocaleFromPath(route.path)
  
  // 更新 HTML lang 属性
  document.documentElement.lang = currentLocale === 'de' ? 'de' : 'en'
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
    <Header />
    <main>
      <router-view />
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
