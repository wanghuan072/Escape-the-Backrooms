import { RootDocument } from '@/components/layout/RootDocument'
import type { Viewport } from 'next'
import { PREFIXED_LOCALES } from '@/lib/i18n/messages'
import { buildMetadata } from '@/seo/metadata'
import type { Locale } from '@/types/locale'
import '@/style/globals.css'

export const viewport: Viewport = { themeColor: '#ffd700' }

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> }

function resolveLocale(value: string): Locale {
  return PREFIXED_LOCALES.includes(value as (typeof PREFIXED_LOCALES)[number])
    ? value as Locale
    : 'en'
}

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Pick<Props, 'params'>) {
  const locale = resolveLocale((await params).locale)
  return buildMetadata({ locale, path: '/', noIndex: true })
}

export default async function LocalizedRootLayout({ children, params }: Props) {
  const locale = resolveLocale((await params).locale)
  return <RootDocument locale={locale}>{children}</RootDocument>
}
