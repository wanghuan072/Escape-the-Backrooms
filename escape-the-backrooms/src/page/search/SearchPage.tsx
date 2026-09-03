import { Suspense } from 'react'
import { getEntities } from '@/lib/data/entities'
import { getLevels } from '@/lib/data/levels'
import { getMaps } from '@/lib/data/maps'
import { translate } from '@/lib/i18n/messages'
import { SearchClient } from '@/page/search/SearchClient'
import type { Locale } from '@/types/locale'
import '@/style/page/search/search-page.module.css'

function SearchFallback({ locale }: { locale: Locale }) {
  return <div className="search-view">
    <section className="page-hero"><div className="container"><div className="hero-content"><h1 className="page-title">{translate(locale, 'searchPage.hero.title')}</h1><div className="search-box"><input type="text" className="search-input" placeholder={translate(locale, 'searchPage.hero.placeholder')} aria-label={translate(locale, 'searchPage.hero.placeholder')} defaultValue="" /><button className="search-button" type="button">{translate(locale, 'searchPage.hero.button')}</button></div></div></div></section>
    <section className="empty-state"><div className="container"><div className="empty-content"><h2>{translate(locale, 'searchPage.emptyState.title')}</h2><p>{translate(locale, 'searchPage.emptyState.description')}</p></div></div></section>
  </div>
}

export default function SearchPage({ locale }: { locale: Locale }) {
  return <Suspense fallback={<SearchFallback locale={locale} />}><SearchClient locale={locale} levels={getLevels(locale)} maps={getMaps(locale)} entities={getEntities(locale)} /></Suspense>
}
