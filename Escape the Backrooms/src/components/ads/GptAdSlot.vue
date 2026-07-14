<script setup>
import { onMounted } from 'vue'
import { Gt } from '@/utils/gptAds'

const props = defineProps({
  unit: {
    type: [Number, String],
    default: 1,
  },
})

const elementId = `div-gpt-ad-banner-${Math.random().toString(36).slice(2, 11)}`

onMounted(() => {
  Gt(elementId, props.unit)
})
</script>

<template>
  <div class="gpt-ad-slot">
    <div :id="elementId" class="gpt-ad-inner" style="min-width: 300px; min-height: 250px;" aria-hidden="true"></div>
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
