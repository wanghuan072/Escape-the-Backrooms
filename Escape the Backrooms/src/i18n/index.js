import { createI18n } from 'vue-i18n'
import en from './locales/en.js'

const localeLoaders = {
  de: () => import('./locales/de.js'),
  fr: () => import('./locales/fr.js'),
  es: () => import('./locales/es.js'),
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
  },
  warnHtmlMessage: false
})

export async function loadLocaleMessages(locale) {
  if (i18n.global.availableLocales.includes(locale) || locale === 'en') return

  const loader = localeLoaders[locale]
  if (!loader) return

  const module = await loader()
  i18n.global.setLocaleMessage(locale, module.default || {})
}

export default i18n
