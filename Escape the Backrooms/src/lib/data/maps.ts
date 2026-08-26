import deMaps from '@/content/maps/de.js'
import enMaps from '@/content/maps/en.js'
import esMaps from '@/content/maps/es.js'
import frMaps from '@/content/maps/fr.js'
import type { Locale } from '@/types/locale'
import type { MapEntry } from '@/types/map'

const maps = {
  en: enMaps,
  de: deMaps,
  fr: frMaps,
  es: esMaps,
} as Record<Locale, MapEntry[]>

export function getMaps(locale: Locale): MapEntry[] {
  return maps[locale] ?? maps.en
}

export function findMap(locale: Locale, slug: string): MapEntry | undefined {
  return getMaps(locale).find((entry) => entry.addressBar === decodeURIComponent(slug))
}

export function getMapAlternates(id: string | number): Record<Locale, string> {
  return Object.fromEntries(
    (Object.keys(maps) as Locale[]).map((locale) => {
      const entry = maps[locale].find((candidate) => candidate.id === id)
      return [locale, entry ? `/maps-keys/${entry.addressBar}` : '/maps-keys']
    }),
  ) as Record<Locale, string>
}
