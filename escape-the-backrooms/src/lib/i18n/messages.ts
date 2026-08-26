import de from '@/content/i18n/de.js'
import en from '@/content/i18n/en.js'
import es from '@/content/i18n/es.js'
import fr from '@/content/i18n/fr.js'
import type { Locale } from '@/types/locale'

export const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'es'] as const
export const PREFIXED_LOCALES = ['de', 'fr', 'es'] as const

const dictionaries = { en, de, fr, es } as const

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale)
}

export function getMessages(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en
}

function readPath(source: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((value, key) => {
    if (!value || typeof value !== 'object') return undefined
    return (value as Record<string, unknown>)[key]
  }, source)
}

export function translate(locale: Locale, path: string): string {
  const localized = readPath(getMessages(locale), path)
  const fallback = readPath(getMessages('en'), path)
  const value = localized ?? fallback ?? path
  return typeof value === 'string' || typeof value === 'number' ? String(value) : path
}

export function localizedPath(path: string, locale: Locale): string {
  const normalized = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`
  if (locale === 'en') return normalized
  return normalized === '/' ? `/${locale}/` : `/${locale}${normalized}`
}

export function localeFromPath(path: string): Locale {
  const first = path.split('/').filter(Boolean)[0]
  return first && isLocale(first) ? first : 'en'
}
