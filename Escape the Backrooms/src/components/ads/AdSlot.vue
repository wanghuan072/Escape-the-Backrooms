<script setup>
const props = defineProps({
  /** sidebar: 300×250 | leaderboard: 728×90 | native: 原生横幅 */
  variant: {
    type: String,
    required: true,
    validator: (v) => ['sidebar', 'leaderboard', 'native'].includes(v),
  },
})

const IFRAME_CONFIG = {
  sidebar: {
    src: '/ads/banner-300x250.html',
    width: 300,
    height: 250,
    title: 'Advertisement 300x250',
  },
  leaderboard: {
    src: '/ads/banner-728x90.html',
    width: 728,
    height: 90,
    title: 'Advertisement 728x90',
  },
  native: {
    src: '/ads/native-banner.html',
    width: '100%',
    height: 120,
    title: 'Advertisement native',
  },
}

const config = IFRAME_CONFIG[props.variant]
</script>

<template>
  <iframe
    class="ad-slot-iframe"
    :class="`ad-slot-iframe--${variant}`"
    :src="config.src"
    :title="config.title"
    :width="config.width"
    :height="config.height"
    frameborder="0"
    scrolling="no"
    loading="eager"
    referrerpolicy="no-referrer-when-downgrade"
  />
</template>
