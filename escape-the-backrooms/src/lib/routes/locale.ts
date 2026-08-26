import { notFound } from 'next/navigation'
import { PREFIXED_LOCALES } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'

export function requirePrefixedLocale(value: string): Locale {
  if (!PREFIXED_LOCALES.includes(value as (typeof PREFIXED_LOCALES)[number])) notFound()
  return value as Locale
}
