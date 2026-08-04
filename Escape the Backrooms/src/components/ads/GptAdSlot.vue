<script setup>
import { inject, onBeforeUnmount, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { destroyGptBanner, mountGptBanner } from '@/utils/gptAds'

const props = defineProps({
  unit: {
    type: [Number, String],
    default: null,
  },
})

const route = useRoute()
const nextBannerUnit = inject('gptNextBannerUnit', () => 1)
const elementId = `div-gpt-ad-banner-${Math.random().toString(36).slice(2, 11)}`
let scope

onMounted(() => {
  const routeName = String(route.name ?? '')
  scope = routeName === 'home' || routeName.startsWith('home-') ? 'home' : 'post'
  const unit = props.unit ?? nextBannerUnit()
  mountGptBanner(elementId, scope, unit)
})

onBeforeUnmount(() => {
  destroyGptBanner(elementId, scope)
})
</script>

<template>
  <div class="gpt-ad-slot">
    <div :id="elementId" class="gpt-ad-inner" style="min-width: 300px; min-height: 90px;" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
.gpt-ad-slot {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.gpt-ad-inner {
  display: flex;
  justify-content: center;
  max-width: 100%;
}
</style>
