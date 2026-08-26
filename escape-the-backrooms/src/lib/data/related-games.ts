import {
  findRelatedGameByAddress,
  getRelatedGames,
  getRelatedGamesPageCopy,
} from '@/content/related-games.js'
import { SUPPORTED_LOCALES } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import type { RelatedGame } from '@/types/related-game'

export function getGames(locale: Locale): RelatedGame[] {
  return getRelatedGames(locale) as RelatedGame[]
}

export function getGamesCopy(locale: Locale) {
  return getRelatedGamesPageCopy(locale)
}

export function findGame(locale: Locale, slug: string): RelatedGame | undefined {
  return findRelatedGameByAddress(decodeURIComponent(slug), locale) as RelatedGame | undefined
}

export function getGameAlternates(id: string | number): Record<Locale, string> {
  return Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => {
      const entry = getGames(locale).find((game) => game.id === id)
      return [locale, entry ? `/backrooms-games/${entry.addressBar}` : '/backrooms-games']
    }),
  ) as Record<Locale, string>
}
