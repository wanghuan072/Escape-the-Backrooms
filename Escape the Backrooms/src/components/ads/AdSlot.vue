<script setup>
import { computed, inject, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Gt } from '@/utils/gptAds'

const props = defineProps({
  /** sidebar: 300×250 | leaderboard: PC 728 / 移动 300 | native: 原生横幅（每页第一个全宽位） */
  variant: {
    type: String,
    required: true,
    validator: (v) => ['sidebar', 'leaderboard', 'native'].includes(v),
  },
  /** 显式指定 GPT 单元：1 | 2 | 3 */
  unit: {
    type: [Number, String],
    default: null,
  },
})

const route = useRoute()
const nextBannerUnit = inject('gptNextBannerUnit', null)

const elementId = `div-gpt-ad-slot-${Math.random().toString(36).slice(2, 11)}`

const minStyle = computed(() => {
  if (props.variant === 'native') {
    return { minWidth: '300px', minHeight: '50px' }
  }
  if (props.variant === 'sidebar') {
    return { minWidth: '300px', minHeight: '250px' }
  }
  return { minWidth: '300px', minHeight: '90px' }
})

function resolveUnit() {
  if (props.unit != null && props.unit !== '') {
    return props.unit
  }
  if (props.variant === 'native' || props.variant === 'sidebar') {
    return 1
  }
  return nextBannerUnit ? nextBannerUnit() : 1
}

function mountAd() {
  Gt(elementId, resolveUnit())
}

onMounted(mountAd)

watch(
  () => route.fullPath,
  () => {
    mountAd()
  },
)
</script>

<template>
  <div class="gpt-ad-slot">
    <div :id="elementId" :style="minStyle" aria-hidden="true" />
  </div>
</template>
