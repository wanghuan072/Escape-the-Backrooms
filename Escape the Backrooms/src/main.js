import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 广告系统总览（三套代码完全独立）：
// 1. ADS 广告（Google AdSense）：组件已启用，仅在首页 FAQ 下方放置；全局脚本由 index.html 延迟加载。
// 2. GPT 广告（Google Ad Manager）：组件已启用；全局 GPT、懒加载、Anchor 和 Interstitial 由 index.html 初始化。
// 3. 联盟广告：组件和加载代码保留，但 import、全局注册及页面广告位目前均保持注释，不会执行。
import AdsAdSlot from '@/components/ads/AdsAdSlot.vue'
import GptAdSlot from '@/components/ads/GptAdSlot.vue'
// 联盟广告暂时停用，保留组件以便后续恢复。
// import AdSlot from '@/components/ads/AdSlot.vue'

const app = createApp(App)

app.component('AdsAdSlot', AdsAdSlot)
app.component('GptAdSlot', GptAdSlot)
// app.component('AdSlot', AdSlot)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
