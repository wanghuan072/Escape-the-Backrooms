<script setup>
import { onMounted, onUnmounted, shallowRef } from 'vue'
import { mountBannerAd, mountNativeAd } from './loadAd.js'

const MOBILE_QUERY = '(max-width: 768px)'

const props = defineProps({
  /** sidebar: 300×250 | leaderboard: PC 728 / 移动 300 | native: 原生横幅（每页第一个全宽位） */
  variant: {
    type: String,
    required: true,
    validator: (v) => ['sidebar', 'leaderboard', 'native'].includes(v),
  },
})

const root = shallowRef(null)
let teardown = null
let mediaQuery = null

function isMobileViewport() {
  return typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
}

function mountAd() {
  const el = root.value
  if (!el) return

  teardown?.()
  teardown =
    props.variant === 'native'
      ? mountNativeAd(el)
      : mountBannerAd(el, props.variant, isMobileViewport())
}

function bindRoot(el) {
  if (!el) {
    teardown?.()
    teardown = null
    root.value = null
    return
  }
  if (el.dataset.adMounted === '1' && el === root.value) return
  el.dataset.adMounted = '1'
  root.value = el
  mountAd()
}

function onViewportChange() {
  if (props.variant === 'leaderboard' && root.value) {
    mountAd()
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia(MOBILE_QUERY)
  mediaQuery.addEventListener('change', onViewportChange)
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', onViewportChange)
  teardown?.()
  teardown = null
  const el = root.value
  if (el) delete el.dataset.adMounted
})
</script>

<template>
  <div
    class="ad-slot-wrap"
    :class="[
      `ad-slot-wrap--${variant}`,
      { 'ad-slot-wrap--mobile-banner': variant === 'leaderboard' },
    ]"
  >
    <div :ref="bindRoot" class="ad-slot-anchor" aria-hidden="true" />
  </div>
</template>
