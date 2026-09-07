'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { getCodeSearchEntries } from '@/lib/data/codes'
import type { EntityEntry } from '@/types/entity'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'
import type { MapEntry } from '@/types/map'

const summaryCopy = {
  en: { found: (count: number, query: string) => `${count} title match${count === 1 ? '' : 'es'} for “${query}”`, empty: (query: string) => `No page title matches “${query}”` },
  de: { found: (count: number, query: string) => `${count} Titeltreffer für „${query}“`, empty: (query: string) => `Kein Seitentitel passt zu „${query}“` },
  fr: { found: (count: number, query: string) => `${count} titre${count > 1 ? 's' : ''} trouvé${count > 1 ? 's' : ''} pour « ${query} »`, empty: (query: string) => `Aucun titre ne correspond à « ${query} »` },
  es: { found: (count: number, query: string) => `${count} título${count === 1 ? '' : 's'} encontrado${count === 1 ? '' : 's'} para «${query}»`, empty: (query: string) => `Ningún título coincide con «${query}»` },
}

type SearchResult = {
  id: string
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
  href: string
  section: 'levels' | 'maps' | 'entities' | 'codes'
}

const titleMatches = (title: string, query: string) => title.toLocaleLowerCase().includes(query)
const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

function highlightTitle(title: string, query: string) {
  const tokens = query.trim().split(/\s+/).filter(Boolean).map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  if (!tokens.length) return { __html: escapeHtml(title) }
  return { __html: escapeHtml(title).replace(new RegExp(`(${tokens.join('|')})`, 'gi'), '<mark class="search-highlight">$1</mark>') }
}

export function SearchClient({ locale, levels, maps, entities }: { locale: Locale; levels: LevelEntry[]; maps: MapEntry[]; entities: EntityEntry[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const normalized = query.trim().toLocaleLowerCase()
  const results: SearchResult[] = normalized ? [
    ...levels.filter((item) => titleMatches(item.title, normalized)).map((item) => ({ id: `level-${item.id}`, title: item.title, description: item.description, imageUrl: item.imageUrl, imageAlt: item.imageAlt, href: localizedPath(`/levels/${item.addressBar}`, locale), section: 'levels' as const })),
    ...maps.filter((item) => titleMatches(item.title, normalized)).map((item) => ({ id: `map-${item.id}`, title: item.title, description: item.description, imageUrl: item.imageUrl, imageAlt: item.imageAlt, href: localizedPath(`/maps-keys/${item.addressBar}`, locale), section: 'maps' as const })),
    ...entities.filter((item) => titleMatches(item.name || item.title, normalized)).map((item) => ({ id: `entity-${item.id}`, title: item.name || item.title, description: item.description, imageUrl: item.imageUrl, imageAlt: item.imageAlt, href: localizedPath(`/entities/${item.slug ?? item.addressBar}`, locale), section: 'entities' as const })),
    ...getCodeSearchEntries(locale).filter((item) => titleMatches(item.title, normalized)).map((item) => ({ id: `code-${item.id}`, title: item.title, description: item.description, href: localizedPath('/codes-solutions', locale), section: 'codes' as const })),
  ] : []

  useEffect(() => { inputRef.current?.focus() }, [])
  // Keep the page field in sync with searches initiated from the header dialog.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setQuery(searchParams.get('q') ?? '') }, [searchParams])

  const performSearch = () => { const value = query.trim(); if (value) router.replace(`${localizedPath('/search', locale)}?q=${encodeURIComponent(value)}`) }
  const sectionLabel = (section: SearchResult['section']) => translate(locale, `searchPage.sections.${section}`)

  return <div className="search-view">
    <section className="page-hero"><div className="container"><div className="hero-content">
      <h1 className="page-title">{translate(locale, 'searchPage.hero.title')}</h1>
      <form className="search-box" onSubmit={(event) => { event.preventDefault(); performSearch() }}>
        <input ref={inputRef} type="search" className="search-input" placeholder={translate(locale, 'searchPage.hero.placeholder')} aria-label={translate(locale, 'searchPage.hero.placeholder')} value={query} onChange={(event) => setQuery(event.target.value)} />
        <button className="search-button" type="submit">{translate(locale, 'searchPage.hero.button')}</button>
      </form>
      {query && <p className={`results-count${results.length === 0 ? ' no-results' : ''}`}>{results.length > 0 ? summaryCopy[locale].found(results.length, query) : summaryCopy[locale].empty(query)}</p>}
    </div></div></section>
    {query ? <section className="search-results"><div className="container">
      {results.length > 0 ? <div className="title-results" role="list">
        {results.map((result) => <a key={result.id} href={result.href} className="title-result" role="listitem">
          {result.imageUrl && <div className="result-image"><IntrinsicImage src={result.imageUrl} alt={result.imageAlt || result.title} loading="lazy" sizes="(max-width: 640px) 96px, 180px" /></div>}
          <div className="result-copy"><span className="result-section">{sectionLabel(result.section)}</span><h2 dangerouslySetInnerHTML={highlightTitle(result.title, query)} /><p>{result.description}</p></div>
          <span className="result-arrow" aria-hidden="true">→</span>
        </a>)}
      </div> : <div className="no-results-container"><div className="no-results-content"><p className="no-results-text">{translate(locale, 'searchPage.noResults.trySearching')}</p></div></div>}
    </div></section> : <section className="empty-state"><div className="container"><div className="empty-content"><h2>{translate(locale, 'searchPage.emptyState.title')}</h2><p>{translate(locale, 'searchPage.emptyState.description')}</p></div></div></section>}
  </div>
}
