<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useAutoSEO } from './seo/composables.js'
import './assets/css/public.css'

// 启用自动 SEO
useAutoSEO()
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
