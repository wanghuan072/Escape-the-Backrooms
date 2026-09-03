'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GptAdSlot } from '@/components/ads/GptRuntime'
import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { getCodeSearchEntries } from '@/lib/data/codes'
import type { EntityEntry } from '@/types/entity'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'
import type { MapEntry } from '@/types/map'

const summaryCopy = {
  en: { found: (count: number, query: string) => `Found ${count} result${count > 1 ? 's' : ''} for "${query}"`, empty: (query: string) => `No results found for "${query}"` },
  de: { found: (count: number, query: string) => `${count} Ergebnis${count > 1 ? 'se' : ''} für "${query}" gefunden`, empty: (query: string) => `Keine Ergebnisse für "${query}" gefunden` },
  fr: { found: (count: number, query: string) => `${count} résultat${count > 1 ? 's' : ''} pour "${query}"`, empty: (query: string) => `Aucun résultat pour "${query}"` },
  es: { found: (count: number, query: string) => `${count} resultado${count > 1 ? 's' : ''} para "${query}"`, empty: (query: string) => `No se encontraron resultados para "${query}"` },
}

const searchInText = (text: unknown, query: string) => typeof text === 'string' && text.toLowerCase().includes(query)
const escapeHtml = (text: unknown) => String(text ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
const highlightText = (text: unknown, query: string) => {
  const safeText = escapeHtml(text)
  const tokens = query.trim().split(/\s+/).filter(Boolean)
  if (!safeText || !tokens.length) return safeText
  const pattern = tokens.map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  return safeText.replace(new RegExp(`(${pattern})`, 'gi'), '<mark class="search-highlight">$1</mark>')
}

function SearchAd() { return <aside className="container search-page-ad"><GptAdSlot /></aside> }

export function SearchClient({ locale, levels, maps, entities }: { locale: Locale; levels: LevelEntry[]; maps: MapEntry[]; entities: EntityEntry[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const normalized = query.trim().toLowerCase()
  const codes = getCodeSearchEntries(locale)
  const levelResults = normalized ? levels.filter((item) => searchInText(item.title, normalized) || searchInText(item.description, normalized) || item.tags?.some((tag) => searchInText(tag, normalized)) || searchInText(item.detailsHtml, normalized) || searchInText(item.category, normalized)) : []
  const mapResults = normalized ? maps.filter((item) => searchInText(item.title, normalized) || searchInText(item.description, normalized) || item.tags?.some((tag) => searchInText(tag, normalized)) || searchInText(item.detailsHtml, normalized) || searchInText(item.category, normalized) || item.mapPoints?.some((point) => searchInText(point.title, normalized) || searchInText(point.content, normalized))) : []
  const entityResults = normalized ? entities.filter((item) => searchInText(item.name, normalized) || searchInText(item.title, normalized) || searchInText(item.description, normalized) || item.tags?.some((tag) => searchInText(tag, normalized)) || searchInText(item.detailsHtml, normalized) || searchInText(item.dangerLevel, normalized) || searchInText(item.species, normalized) || searchInText(item.firstAppearsIn, normalized)) : []
  const codeResults = normalized ? codes.filter((item) => searchInText(item.title, normalized) || searchInText(item.code, normalized) || searchInText(item.description, normalized) || searchInText(item.type, normalized)) : []
  const resultCount = levelResults.length + mapResults.length + entityResults.length + codeResults.length

  useEffect(() => { inputRef.current?.focus() }, [])
  // Keep the field in sync when a search is started from the persistent site header.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { const next = searchParams.get('q'); if (next) setQuery(next) }, [searchParams])
  const performSearch = () => { if (query.trim()) router.replace(`${localizedPath('/search', locale)}?q=${encodeURIComponent(query.trim())}`) }
  const highlighted = (text: unknown) => ({ __html: highlightText(text, query) })

  return <div className="search-view">
    <section className="page-hero"><div className="container"><div className="hero-content"><h1 className="page-title">{translate(locale, 'searchPage.hero.title')}</h1><div className="search-box"><input ref={inputRef} type="text" className="search-input" placeholder={translate(locale, 'searchPage.hero.placeholder')} aria-label={translate(locale, 'searchPage.hero.placeholder')} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && performSearch()} /><button className="search-button" onClick={performSearch} type="button">{translate(locale, 'searchPage.hero.button')}</button></div>{query && <p className={`results-count${resultCount === 0 ? ' no-results' : ''}`}>{resultCount > 0 ? summaryCopy[locale].found(resultCount, query) : summaryCopy[locale].empty(query)}</p>}</div></div></section>
    <SearchAd />
    {query ? <section className="search-results"><div className="container">{resultCount > 0 ? <div className="results-container">
      {levelResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">📋</span>{translate(locale, 'searchPage.sections.levels')} ({levelResults.length})</h2><div className="results-grid">{levelResults.map((item) => <a key={`level-${item.id}`} href={localizedPath(`/levels/${item.addressBar}`, locale)} className="result-card">{item.imageUrl && <div className="card-image"><IntrinsicImage src={item.imageUrl} alt={item.imageAlt || item.title} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" /></div>}<div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className="card-category" dangerouslySetInnerHTML={highlighted(item.category)} /><div className="card-tags">{item.tags?.slice(0, 3).map((tag) => <span key={tag} className="tag" dangerouslySetInnerHTML={highlighted(tag)} />)}</div></div></div></a>)}</div></div>}
      {mapResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">🗺️</span>{translate(locale, 'searchPage.sections.maps')} ({mapResults.length})</h2><div className="results-grid">{mapResults.map((item) => <a key={`map-${item.id}`} href={localizedPath(`/maps-keys/${item.addressBar}`, locale)} className="result-card">{item.imageUrl && <div className="card-image"><IntrinsicImage src={item.imageUrl} alt={item.imageAlt || item.title} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" /></div>}<div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className="card-category" dangerouslySetInnerHTML={highlighted(item.category)} /><div className="card-tags">{item.tags?.slice(0, 3).map((tag) => <span key={tag} className="tag" dangerouslySetInnerHTML={highlighted(tag)} />)}</div></div></div></a>)}</div></div>}
      {entityResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">👹</span>{translate(locale, 'searchPage.sections.entities')} ({entityResults.length})</h2><div className="results-grid">{entityResults.map((item) => <div key={`entity-${item.id}`} className="result-card">{item.imageUrl && <div className="card-image"><IntrinsicImage src={item.imageUrl} alt={item.imageAlt || item.name || item.title} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" /></div>}<div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.name || item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className={`card-category ${item.dangerClass ?? ''}`} dangerouslySetInnerHTML={highlighted(item.dangerLevel)} /><div className="card-tags">{item.tags?.slice(0, 3).map((tag) => <span key={tag} className="tag" dangerouslySetInnerHTML={highlighted(tag)} />)}</div></div></div></div>)}</div></div>}
      {codeResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">🔢</span>{translate(locale, 'searchPage.sections.codes')} ({codeResults.length})</h2><div className="results-grid">{codeResults.map((item) => <a key={`code-${item.id}`} href={localizedPath('/codes-solutions', locale)} className="result-card code-card"><div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className="code-value" dangerouslySetInnerHTML={highlighted(item.code)} /></div></div></a>)}</div></div>}
    </div> : <div className="no-results-container"><div className="no-results-content"><p className="no-results-text">{translate(locale, 'searchPage.noResults.trySearching')}</p><ul className="suggestions-list">{['levelNames', 'entityNames', 'mapNames', 'codes', 'keywords'].map((key) => <li key={key}>{translate(locale, `searchPage.noResults.suggestions.${key}`)}</li>)}</ul></div></div>}</div></section> : <section className="empty-state"><div className="container"><div className="empty-content"><h2>{translate(locale, 'searchPage.emptyState.title')}</h2><p>{translate(locale, 'searchPage.emptyState.description')}</p></div></div></section>}
  </div>
}
