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

const levelEightPrimarySlug = 'level-8-cave-system-walkthrough'
const levelEightDuplicateSlug = 'level-8-cave-system-guide'

const additionalLevelEightNotesTitle: Record<Locale, string> = {
  en: 'Additional Level 8 Route Notes',
  de: 'Ergänzende Hinweise zur Route durch Level 8',
  fr: 'Conseils supplémentaires pour le parcours du niveau 8',
  es: 'Notas adicionales para la ruta del nivel 8',
}

function mergeLevelEightEntries(locale: Locale, entries: LevelEntry[]): LevelEntry[] {
  const primary = entries.find((entry) => entry.addressBar === levelEightPrimarySlug)
  const duplicate = entries.find((entry) => entry.addressBar === levelEightDuplicateSlug)
  if (!primary || !duplicate) return entries

  const additionalNotes = duplicate.detailsHtml
    .replace(/^\s*<p\b[^>]*>[\s\S]*?<\/p>/i, '')
    .replace(/<h2\b[^>]*>[\s\S]*?<\/h2>\s*<iframe\b[^>]*><\/iframe>/i, '')
    .replace(/<h3\b[^>]*>[\s\S]*?<\/h3>\s*<ul>[\s\S]*?<\/ul>/i, '')

  return entries
    .filter((entry) => entry.addressBar !== levelEightDuplicateSlug)
    .map((entry) => entry.addressBar === levelEightPrimarySlug
      ? { ...entry, detailsHtml: `${entry.detailsHtml}\n<h2>${additionalLevelEightNotesTitle[locale]}</h2>${additionalNotes}` }
      : entry)
}

export function getLevels(locale: Locale): LevelEntry[] {
  return mergeLevelEightEntries(locale, levels[locale] ?? levels.en)
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
