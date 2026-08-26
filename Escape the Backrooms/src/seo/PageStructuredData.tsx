import { siteConfig } from '@/config/site'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { JsonLd, pageJsonLd } from '@/seo/json-ld'
import type { Locale } from '@/types/locale'

interface PageStructuredDataProps {
  locale: Locale
  path: string
  seoKey: string
}

export function PageStructuredData({ locale, path, seoKey }: PageStructuredDataProps) {
  const title = translate(locale, `tdk.${seoKey}.title`)
  const description = translate(locale, `tdk.${seoKey}.description`)
  const url = `${siteConfig.url}${localizedPath(path, locale)}`

  return <JsonLd data={pageJsonLd(title, description, url)} />
}
