<script setup>
import { onUnmounted, shallowRef } from 'vue'
import { mountBannerAd } from './loadAd.js'

const props = defineProps({
  variant: {
    type: String,
    required: true,
    validator: (v) => ['sidebar', 'leaderboard', 'native'].includes(v),
  },
})

const root = shallowRef(null)
let teardown = null

function bindRoot(el) {
  if (!el) {
    teardown?.()
    teardown = null
    root.value = null
    return
  }
  if (el.dataset.adMounted === '1') return
  el.dataset.adMounted = '1'
  root.value = el
  teardown?.()
  teardown = mountBannerAd(el, props.variant)
}

onUnmounted(() => {
  teardown?.()
  teardown = null
  const el = root.value
  if (el) delete el.dataset.adMounted
})
</script>

<template>
  <div class="ad-slot-wrap" :class="`ad-slot-wrap--${variant}`">
    <div :ref="bindRoot" class="ad-slot-anchor" aria-hidden="true" />
  </div>
</template>
