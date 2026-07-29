<script setup>
import { onMounted } from 'vue'

// ADS 广告（Google AdSense）
// 加载方式：index.html 延迟加载 adsbygoogle.js；组件挂载时向 adsbygoogle 队列提交当前广告位。
onMounted(() => {
  window.adsbygoogle = window.adsbygoogle || []
  window.adsbygoogle.push({})
})
</script>

<template>
  <!-- ADS 广告位：AdSense adsense-banner-1，仅用于首页 FAQ 下方。 -->
  <div class="ads-ad-slot">
    <ins
      class="adsbygoogle"
      style="display: block; height: 90px"
      data-ad-client="ca-pub-1042701865163735"
      data-ad-slot="3495022871"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<style scoped>
.ads-ad-slot {
  width: 100%;
  height: 90px;
}
</style>
