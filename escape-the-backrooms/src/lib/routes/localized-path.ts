import { localizedRouteMap } from '@/config/localized-routes.generated'
import { localizedPath } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'

function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(de|fr|es)(?=\/|$)/, '')
  return stripped || '/'
}

/**
 * Preserves the matching localized detail-page slug when a visitor changes
 * language, and falls back to the equivalent static route for all other URLs.
 */
export function getLocalizedPath(pathname: string, locale: Locale): string {
  return localizedRouteMap[pathname]?.[locale] ?? localizedPath(stripLocale(pathname), locale)
}
