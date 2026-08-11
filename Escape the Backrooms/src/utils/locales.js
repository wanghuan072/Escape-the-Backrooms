export const SUPPORTED_LOCALES = ['en', 'de', 'fr', 'es']

export function extractLocaleFromPath(path = '/') {
  const firstSegment = String(path).split('/').filter(Boolean)[0]
  return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : 'en'
}

export function stripLocalePrefix(path = '/') {
  const normalizedPath = String(path).startsWith('/') ? String(path) : `/${path}`
  const segments = normalizedPath.split('/').filter(Boolean)

  if (SUPPORTED_LOCALES.includes(segments[0])) {
    segments.shift()
  }

  return segments.length ? `/${segments.join('/')}` : '/'
}

export function addLocalePrefix(path = '/', locale = 'en') {
  const basePath = stripLocalePrefix(path)
  if (locale === 'en') return basePath
  return basePath === '/' ? `/${locale}/` : `/${locale}${basePath}`
}
