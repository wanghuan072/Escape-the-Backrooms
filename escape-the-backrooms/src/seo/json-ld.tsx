import { siteConfig } from '@/config/site'

interface JsonLdProps {
  data: Record<string, unknown>
  id?: string
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.defaultSeo.description,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo.webp`,
    },
    sameAs: [
      siteConfig.social.youtube,
      'https://twitter.com/escapethebackrooms',
      'https://facebook.com/escapethebackrooms',
      'https://instagram.com/escapethebackrooms',
      'https://discord.gg/escapethebackrooms',
    ],
  },
}

export function pageJsonLd(
  name: string,
  description: string,
  url: string,
  type: 'WebPage' | 'Article' = 'WebPage',
) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    publisher: websiteJsonLd.publisher,
    ...(type === 'Article'
      ? { author: { '@type': 'Organization', name: siteConfig.author } }
      : {}),
  }
}
