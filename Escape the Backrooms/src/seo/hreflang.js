import { seoConfig } from './config.js'

export function updateHreflangTags(localizedPaths) {
  if (typeof document === 'undefined') return

  document
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((link) => link.remove())

  Object.entries(localizedPaths).forEach(([locale, path]) => {
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', locale)
    link.setAttribute('href', `${seoConfig.fullDomain}${path}`)
    document.head.appendChild(link)
  })

  const defaultLink = document.createElement('link')
  defaultLink.setAttribute('rel', 'alternate')
  defaultLink.setAttribute('hreflang', 'x-default')
  defaultLink.setAttribute('href', `${seoConfig.fullDomain}${localizedPaths.en || '/'}`)
  document.head.appendChild(defaultLink)
}
