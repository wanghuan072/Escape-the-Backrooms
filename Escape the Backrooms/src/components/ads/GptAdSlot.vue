<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { destroyGptSlot, Gt } from '@/utils/gptAds'

const props = defineProps({
  unit: {
    type: [Number, String],
    default: 1,
  },
})

const elementId = `div-gpt-ad-banner-${Math.random().toString(36).slice(2, 11)}`

// GPT 广告（Google Ad Manager）页面 Banner
// 加载方式：这里只注册并 display 广告位；实际请求和渲染距离由 index.html 的 GPT 原生 lazyLoad 控制。
onMounted(() => {
  Gt(elementId, props.unit)
})

// Vue 路由离开或组件卸载时销毁 GPT Slot，避免旧页面广告位残留。
onBeforeUnmount(() => {
  destroyGptSlot(elementId)
})
</script>

<template>
  <!-- GPT 广告位：Google Ad Manager 页面 Banner 容器。 -->
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
