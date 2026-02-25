import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import de from './locales/de.js'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de
  },
  warnHtmlMessage: false
})

export default i18n
