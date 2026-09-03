import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { localizedPath, SUPPORTED_LOCALES, translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import type { SeoRecord } from '@/types/seo'

interface MetadataOptions {
  locale: Locale
  path: string
  seo?: Partial<SeoRecord>
  seoKey?: string
  image?: string
  type?: 'website' | 'article'
  alternatePaths?: Partial<Record<Locale, string>>
  noIndex?: boolean
}

function absoluteUrl(path: string): string {
  return `${siteConfig.url}${path}`
}

export function buildMetadata({
  locale,
  path,
  seo,
  seoKey,
  image = siteConfig.defaultSeo.image,
  type = 'website',
  alternatePaths,
  noIndex = false,
}: MetadataOptions): Metadata {
  const localizedSeo = seoKey
    ? {
        title: translate(locale, `tdk.${seoKey}.title`),
        description: translate(locale, `tdk.${seoKey}.description`),
        keywords: translate(locale, `tdk.${seoKey}.keywords`),
      }
    : undefined
  const finalSeo = {
    ...siteConfig.defaultSeo,
    ...localizedSeo,
    ...seo,
  }
  const canonicalPath = localizedPath(path, locale)
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((alternateLocale) => {
      const alternatePath = alternatePaths?.[alternateLocale] ?? path
      return [alternateLocale, absoluteUrl(localizedPath(alternatePath, alternateLocale))]
    }),
  )

  return {
    title: finalSeo.title,
    description: finalSeo.description,
    keywords: finalSeo.keywords,
    authors: [{ name: siteConfig.author }],
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages: {
        ...languages,
        'x-default': languages.en,
      },
    },
    openGraph: {
      title: finalSeo.title,
      description: finalSeo.description,
      images: [image],
      url: absoluteUrl(canonicalPath),
      type,
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: finalSeo.title,
      description: finalSeo.description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  }
}
