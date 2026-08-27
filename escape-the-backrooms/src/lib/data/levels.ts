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

export function getLevelAlternates(id: string | number): Record<Locale, string> {
  return Object.fromEntries(
    (Object.keys(levels) as Locale[]).map((locale) => {
      const entry = levels[locale].find((candidate) => candidate.id === id)
      return [locale, entry ? `/levels/${entry.addressBar}` : '/levels']
    }),
  ) as Record<Locale, string>
}
