<script setup>
/* GPT 广告暂时停用，恢复时取消下方注释
import { computed, inject, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Gt } from '@/utils/gptAds'

const props = defineProps({
  variant: {
    type: String,
    required: true,
    validator: (v) => ['sidebar', 'leaderboard', 'native'].includes(v),
  },
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
*/
</script>

<template>
  <!-- GPT 广告暂时停用，恢复时取消 AdSlot.vue 中 script/template 注释
  <div class="gpt-ad-slot">
    <div :id="elementId" :style="minStyle" aria-hidden="true" />
  </div>
  -->
</template>
