import {
  SUPPORTED_LOCALES,
  addLocalePrefix,
  extractLocaleFromPath,
  stripLocalePrefix,
} from './locales.js'

const DETAIL_ROUTE_PATTERN = /^\/(levels|maps-keys|backrooms-games)\/([^/]+)\/?$/

async function loadRouteEntries(section, locale) {
  if (section === 'levels') {
    const module = await import(`../data/levels/${locale}.js`)
    return module.default || []
  }

  if (section === 'maps-keys') {
    const module = await import(`../data/maps/${locale}.js`)
    return module.default || []
  }

  if (section === 'backrooms-games') {
    const module = await import('../data/relatedGames.js')
    return module.getRelatedGames?.(locale) || []
  }

  return []
}

function findEntryByAddress(entries, address) {
  return entries.find((entry) => entry.addressBar === address)
}

/**
 * Translate a route while preserving the stable content id behind localized slugs.
 * Static pages keep the same path; detail pages resolve their target-language slug.
 */
export async function translateLocalizedPath(path, targetLocale) {
  const safeTargetLocale = SUPPORTED_LOCALES.includes(targetLocale) ? targetLocale : 'en'
  const sourceLocale = extractLocaleFromPath(path)
  const basePath = stripLocalePrefix(path)
  const detailMatch = basePath.match(DETAIL_ROUTE_PATTERN)

  if (!detailMatch || sourceLocale === safeTargetLocale) {
    return addLocalePrefix(basePath, safeTargetLocale)
  }

  const [, section, sourceAddress] = detailMatch

  try {
    const [sourceEntries, targetEntries] = await Promise.all([
      loadRouteEntries(section, sourceLocale),
      loadRouteEntries(section, safeTargetLocale),
    ])
    const sourceEntry = findEntryByAddress(sourceEntries, decodeURIComponent(sourceAddress))
    const targetEntry = sourceEntry
      ? targetEntries.find((entry) => entry.id === sourceEntry.id)
      : null

    if (targetEntry?.addressBar) {
      return addLocalePrefix(`/${section}/${targetEntry.addressBar}`, safeTargetLocale)
    }
  } catch (error) {
    console.error(`Failed to translate localized route (${sourceLocale} -> ${safeTargetLocale})`, error)
  }

  return addLocalePrefix(basePath, safeTargetLocale)
}

export async function getLocalizedRouteAlternates(path) {
  const entries = await Promise.all(
    SUPPORTED_LOCALES.map(async (locale) => [locale, await translateLocalizedPath(path, locale)]),
  )

  return Object.fromEntries(entries)
}
