<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mountBannerAd, mountNativeAd, resolveBannerVariant } from './loadAd.js'

const props = defineProps({
  variant: {
    type: String,
    required: true,
    validator: (value) => ['sidebar', 'leaderboard', 'native'].includes(value),
  },
})

const route = useRoute()
const slotRef = ref(null)
const isMobile = ref(false)
let cleanup = () => {}

const resolvedVariant = computed(() => resolveBannerVariant(props.variant, isMobile.value))

const minStyle = computed(() => {
  if (props.variant === 'native') {
    return { minWidth: '300px', minHeight: '50px' }
  }
  if (resolvedVariant.value === 'sidebar') {
    return { minWidth: '300px', minHeight: '250px' }
  }
  return { minWidth: '300px', minHeight: '90px' }
})

function updateViewportState() {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches
}

async function mountAd() {
  cleanup()
  cleanup = () => {}
  await nextTick()

  if (!slotRef.value) return

  if (props.variant === 'native') {
    cleanup = mountNativeAd(slotRef.value)
    return
  }

  cleanup = mountBannerAd(slotRef.value, props.variant, isMobile.value)
}

onMounted(() => {
  updateViewportState()
  window.addEventListener('resize', updateViewportState)
  mountAd()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewportState)
  cleanup()
})

watch(
  () => [route.fullPath, props.variant, isMobile.value],
  () => {
    mountAd()
  },
)
</script>

<template>
  <div class="affiliate-ad-slot" :class="`affiliate-ad-slot--${variant}`">
    <div ref="slotRef" class="affiliate-ad-inner" :style="minStyle" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
.affiliate-ad-slot {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.affiliate-ad-inner {
  display: flex;
  justify-content: center;
  max-width: 100%;
}

.affiliate-ad-slot--native .affiliate-ad-inner {
  width: 100%;
}
</style>
