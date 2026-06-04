<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  /** sidebar: 300×250 | leaderboard: 728×90 | native: 原生横幅（每页仅一处有效容器 id） */
  variant: {
    type: String,
    required: true,
    validator: (v) => ['sidebar', 'leaderboard', 'native'].includes(v),
  },
})

const root = ref(null)

const NATIVE_CONTAINER_ID = 'container-891ef749e6c0675d4b64b98d4922ecad'

function injectScripts(container, scripts) {
  scripts.forEach(({ inline, src, async }) => {
    const el = document.createElement('script')
    if (inline) el.textContent = inline
    if (src) {
      el.src = src
      if (async) el.async = true
      el.setAttribute('data-cfasync', 'false')
    }
    container.appendChild(el)
  })
}

function mountSidebar(el) {
  injectScripts(el, [
    {
      inline: `atOptions = {
    'key' : '3751be4b9ce0480df348da850f20d44b',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };`,
    },
    {
      src: 'https://www.highperformanceformat.com/3751be4b9ce0480df348da850f20d44b/invoke.js',
      async: true,
    },
  ])
}

function mountLeaderboard(el) {
  injectScripts(el, [
    {
      inline: `atOptions = {
    'key' : 'ab7db8cc8b466411697f6cd47e0fd01a',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };`,
    },
    {
      src: 'https://www.highperformanceformat.com/ab7db8cc8b466411697f6cd47e0fd01a/invoke.js',
      async: true,
    },
  ])
}

function mountNative(el) {
  const target = document.getElementById(NATIVE_CONTAINER_ID)
  if (target && target !== el) return

  el.id = NATIVE_CONTAINER_ID
  injectScripts(el, [
    {
      src: 'https://pl29633107.effectivecpmnetwork.com/891ef749e6c0675d4b64b98d4922ecad/invoke.js',
      async: true,
    },
  ])
}

onMounted(() => {
  const el = root.value
  if (!el) return
  el.innerHTML = ''

  if (props.variant === 'sidebar') mountSidebar(el)
  else if (props.variant === 'leaderboard') mountLeaderboard(el)
  else mountNative(el)
})

onUnmounted(() => {
  const el = root.value
  if (!el) return
  el.innerHTML = ''
  if (props.variant === 'native' && el.id === NATIVE_CONTAINER_ID) el.removeAttribute('id')
})
</script>

<template>
  <div ref="root" class="ad-slot-root" :class="`ad-slot-root--${variant}`" />
</template>
