import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import AdSlot from '@/components/ads/AdSlot.vue'
import GptAdSlot from '@/components/ads/GptAdSlot.vue'

const app = createApp(App)

app.component('AdSlot', AdSlot)
app.component('GptAdSlot', GptAdSlot)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
