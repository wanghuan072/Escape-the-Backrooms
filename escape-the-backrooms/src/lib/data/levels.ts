import deLevels from '@/content/levels/de.js'
import enLevels from '@/content/levels/en.js'
import esLevels from '@/content/levels/es.js'
import frLevels from '@/content/levels/fr.js'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'

const levels = {
  en: enLevels,
  de: deLevels,
  fr: frLevels,
  es: esLevels,
} as Record<Locale, LevelEntry[]>

export function getLevels(locale: Locale): LevelEntry[] {
  return levels[locale] ?? levels.en
}

export function findLevel(locale: Locale, slug: string): LevelEntry | undefined {
  return getLevels(locale).find((entry) => entry.addressBar === decodeURIComponent(slug))
}

const normalizeAddress = (address: string) => address.trim().toLowerCase().replace(/-walkthrough$/i, '')
const extractLevelKey = (value = '') => {
  const match = value.match(/(?:level|niveau|nivel)[-\s]*([0-9]+(?:[.-][0-9]+)?|[!b]+)/i)
  return match?.[1]?.replace('-', '.')?.toLowerCase()
}

export function resolveLevelAddress(locale: Locale, address: string, title = ''): string {
  if (!address || address.startsWith('#')) return address
  const localized = getLevels(locale)
  const english = getLevels('en').find((entry) => entry.addressBar === address)
  if (english) {
    const translated = localized.find((entry) => entry.id === english.id)
    if (translated) return translated.addressBar
  }
  const normalized = normalizeAddress(address)
  const direct = localized.find((entry) => normalizeAddress(entry.addressBar) === normalized)
  if (direct) return direct.addressBar
  const levelKey = extractLevelKey(address) ?? extractLevelKey(title)
  const identity = localized.find((entry) =>
    [entry.addressBar, entry.title, entry.pageTitle, entry.sideBarInfo?.name]
      .some((value) => extractLevelKey(value) === levelKey),
  )
  return identity?.addressBar ?? address
}

export function getLevelAlternates(id: string | number): Record<Locale, string> {
  return Object.fromEntries(
    (Object.keys(levels) as Locale[]).map((locale) => {
      const entry = levels[locale].find((candidate) => candidate.id === id)
      return [locale, entry ? `/levels/${entry.addressBar}` : '/levels']
    }),
  ) as Record<Locale, string>
}
