import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import AdsAdSlot from '@/components/ads/AdsAdSlot.vue'
// 联盟广告暂时停用，保留组件以便后续恢复。
// import AdSlot from '@/components/ads/AdSlot.vue'
// GPT 广告暂时停用，保留组件以便后续恢复。
// import GptAdSlot from '@/components/ads/GptAdSlot.vue'

const app = createApp(App)

app.component('AdsAdSlot', AdsAdSlot)
// app.component('AdSlot', AdSlot)
// app.component('GptAdSlot', GptAdSlot)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
