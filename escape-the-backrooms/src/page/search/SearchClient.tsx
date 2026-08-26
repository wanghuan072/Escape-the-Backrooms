'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { GptAdSlot } from '@/components/ads/GptRuntime'
import { localizedPath, translate } from '@/lib/i18n/messages'
import type { EntityEntry } from '@/types/entity'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'
import type { MapEntry } from '@/types/map'

interface CodeEntry { id: number; title: string; code: string; description: string; type: string }

const englishCodes: CodeEntry[] = [
  { id: 1, title: 'Level 3 - Elevator Code', code: '042', description: 'The elevator code for Level 3 (Electrical Station). Enter this code in the elevator keypad to access different floors.', type: 'elevator' },
  { id: 2, title: 'Level 4 - Elevator Code', code: '729', description: 'Elevator code required to navigate between floors in Level 4 (Abandoned Office).', type: 'elevator' },
  { id: 3, title: 'Level 5 - Elevator Code', code: '314', description: 'The elevator code for Level 5 (Terror Hotel). This code is needed to access the upper floors of the hotel.', type: 'elevator' },
  { id: 4, title: 'Level 8 - Elevator Code', code: '826', description: 'Elevator code for Level 8 (Cave System). Use this to navigate the complex cave network.', type: 'elevator' },
  { id: 5, title: 'Level 1 - Door Code', code: '1234', description: 'Door code for Level 1. This code unlocks a secure door that blocks progress to the next area.', type: 'door' },
  { id: 6, title: 'Level 2 - Door Code', code: '5678', description: 'Door code required to unlock doors in Level 2 (Pipe Dreams).', type: 'door' },
  { id: 7, title: 'Level 4 - Door Code', code: '9012', description: 'Door code for Level 4. Unlocks the exit door to progress to the next level.', type: 'door' },
  { id: 8, title: 'Level 52 - Door Code', code: '3456', description: "Door code for Level 52 (School Halls). Required to unlock the principal's office door.", type: 'door' },
  { id: 9, title: 'Level 94 - Computer Password', code: 'PASSWORD', description: 'Computer password for Level 94 (Motion). This password is needed to access the computer system and unlock important information.', type: 'computer' },
  { id: 10, title: 'Level 3999 - Computer Password', code: 'ESCAPE', description: 'The final computer password for Level 3999 (The True Ending). This password is crucial for completing the escape sequence.', type: 'computer' },
]

const spanishCodes: CodeEntry[] = [
  { id: 1, title: 'Nivel 3 - Código del ascensor', code: '042', description: 'Código del ascensor del Nivel 3 (Estación eléctrica). Introdúcelo en el teclado del ascensor para acceder a diferentes plantas.', type: 'ascensor' },
  { id: 2, title: 'Nivel 4 - Código del ascensor', code: '729', description: 'Código necesario para moverte entre plantas en el Nivel 4 (Oficina abandonada).', type: 'ascensor' },
  { id: 3, title: 'Nivel 5 - Código del ascensor', code: '314', description: 'Código del ascensor del Nivel 5 (Hotel del Terror). Se usa para acceder a las plantas superiores del hotel.', type: 'ascensor' },
  { id: 4, title: 'Nivel 8 - Código del ascensor', code: '826', description: 'Código del ascensor del Nivel 8 (Sistema de cuevas). Úsalo para avanzar por la red de cuevas.', type: 'ascensor' },
  { id: 5, title: 'Nivel 1 - Código de puerta', code: '1234', description: 'Código de puerta del Nivel 1. Desbloquea una puerta segura que bloquea el avance.', type: 'puerta' },
  { id: 6, title: 'Nivel 2 - Código de puerta', code: '5678', description: 'Código necesario para abrir puertas en el Nivel 2 (Pipe Dreams).', type: 'puerta' },
  { id: 7, title: 'Nivel 4 - Código de puerta', code: '9012', description: 'Código de puerta del Nivel 4. Abre la salida para avanzar al siguiente nivel.', type: 'puerta' },
  { id: 8, title: 'Nivel 52 - Código de puerta', code: '3456', description: 'Código de puerta del Nivel 52 (School Halls). Necesario para abrir la puerta de la oficina del director.', type: 'puerta' },
  { id: 9, title: 'Nivel 94 - Contraseña de computadora', code: 'PASSWORD', description: 'Contraseña de la computadora del Nivel 94 (Motion). Sirve para acceder al sistema y desbloquear información importante.', type: 'computadora' },
  { id: 10, title: 'Nivel 3999 - Contraseña de computadora', code: 'ESCAPE', description: 'Contraseña final de la computadora del Nivel 3999 (The True Ending). Es clave para completar la secuencia de escape.', type: 'computadora' },
]

const spanishEntities: Record<number, Partial<EntityEntry>> = {
  1: { name: 'Vagabundo', title: 'Vagabundo', description: 'Seres humanos atrapados en los Backrooms, casi siempre vistos con un traje de protección.', dangerLevel: 'Amistoso', species: 'Humano' },
  2: { name: 'Bacteria', title: 'Bacteria', description: 'Criaturas humanoides negras con estructura esquelética de alambres que persiguen a los vagabundos al verlos.', dangerLevel: 'Moderado', species: 'Bacteria' },
  3: { name: 'Ladrón de piel', title: 'Ladrón de piel', description: 'Entidades humanoides grises capaces de robar la piel de un jugador y hacerse pasar por vagabundos.', dangerLevel: 'Peligroso', species: 'Humanoide' },
}

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
  const localizedEntities = useMemo(() => entities.map((entity) => locale === 'es' ? { ...entity, ...spanishEntities[Number(entity.id)] } : entity), [entities, locale])
  const codes = locale === 'es' ? spanishCodes : englishCodes
  const levelResults = normalized ? levels.filter((item) => searchInText(item.title, normalized) || searchInText(item.description, normalized) || item.tags?.some((tag) => searchInText(tag, normalized)) || searchInText(item.detailsHtml, normalized) || searchInText(item.category, normalized)) : []
  const mapResults = normalized ? maps.filter((item) => searchInText(item.title, normalized) || searchInText(item.description, normalized) || item.tags?.some((tag) => searchInText(tag, normalized)) || searchInText(item.detailsHtml, normalized) || searchInText(item.category, normalized) || item.mapPoints?.some((point) => searchInText(point.title, normalized) || searchInText(point.content, normalized))) : []
  const entityResults = normalized ? localizedEntities.filter((item) => searchInText(item.name, normalized) || searchInText(item.title, normalized) || searchInText(item.description, normalized) || item.tags?.some((tag) => searchInText(tag, normalized)) || searchInText(item.detailsHtml, normalized) || searchInText(item.dangerLevel, normalized) || searchInText(item.species, normalized) || searchInText(item.firstAppearsIn, normalized)) : []
  const codeResults = normalized ? codes.filter((item) => searchInText(item.title, normalized) || searchInText(item.code, normalized) || searchInText(item.description, normalized) || searchInText(item.type, normalized)) : []
  const resultCount = levelResults.length + mapResults.length + entityResults.length + codeResults.length

  useEffect(() => { inputRef.current?.focus() }, [])
  // Keep the field in sync when a search is started from the persistent site header.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { const next = searchParams.get('q'); if (next) setQuery(next) }, [searchParams])
  const performSearch = () => { if (query.trim()) router.replace(`${localizedPath('/search', locale)}?q=${encodeURIComponent(query.trim())}`) }
  const highlighted = (text: unknown) => ({ __html: highlightText(text, query) })

  return <div className="search-view">
    <section className="page-hero"><div className="container"><div className="hero-content"><h1 className="page-title">{translate(locale, 'searchPage.hero.title')}</h1><div className="search-box"><input ref={inputRef} type="text" className="search-input" placeholder={translate(locale, 'searchPage.hero.placeholder')} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && performSearch()} /><button className="search-button" onClick={performSearch} type="button">{translate(locale, 'searchPage.hero.button')}</button></div>{query && <p className={`results-count${resultCount === 0 ? ' no-results' : ''}`}>{resultCount > 0 ? summaryCopy[locale].found(resultCount, query) : summaryCopy[locale].empty(query)}</p>}</div></div></section>
    <SearchAd />
    {query ? <section className="search-results"><div className="container">{resultCount > 0 ? <div className="results-container">
      {levelResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">📋</span>{translate(locale, 'searchPage.sections.levels')} ({levelResults.length})</h2><div className="results-grid">{levelResults.map((item) => <a key={`level-${item.id}`} href={localizedPath(`/levels/${item.addressBar}`, locale)} className="result-card">{item.imageUrl && <div className="card-image"><img src={item.imageUrl} alt={item.imageAlt || item.title} loading="lazy" /></div>}<div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className="card-category" dangerouslySetInnerHTML={highlighted(item.category)} /><div className="card-tags">{item.tags?.slice(0, 3).map((tag) => <span key={tag} className="tag" dangerouslySetInnerHTML={highlighted(tag)} />)}</div></div></div></a>)}</div></div>}
      {mapResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">🗺️</span>{translate(locale, 'searchPage.sections.maps')} ({mapResults.length})</h2><div className="results-grid">{mapResults.map((item) => <a key={`map-${item.id}`} href={localizedPath(`/maps-keys/${item.addressBar}`, locale)} className="result-card">{item.imageUrl && <div className="card-image"><img src={item.imageUrl} alt={item.imageAlt || item.title} loading="lazy" /></div>}<div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className="card-category" dangerouslySetInnerHTML={highlighted(item.category)} /><div className="card-tags">{item.tags?.slice(0, 3).map((tag) => <span key={tag} className="tag" dangerouslySetInnerHTML={highlighted(tag)} />)}</div></div></div></a>)}</div></div>}
      {entityResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">👹</span>{translate(locale, 'searchPage.sections.entities')} ({entityResults.length})</h2><div className="results-grid">{entityResults.map((item) => <div key={`entity-${item.id}`} className="result-card">{item.imageUrl && <div className="card-image"><img src={item.imageUrl} alt={item.imageAlt || item.name} loading="lazy" /></div>}<div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.name || item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className={`card-category ${item.dangerClass ?? ''}`} dangerouslySetInnerHTML={highlighted(item.dangerLevel)} /><div className="card-tags">{item.tags?.slice(0, 3).map((tag) => <span key={tag} className="tag" dangerouslySetInnerHTML={highlighted(tag)} />)}</div></div></div></div>)}</div></div>}
      {codeResults.length > 0 && <div className="results-section"><h2 className="section-title"><span className="section-icon">🔢</span>{translate(locale, 'searchPage.sections.codes')} ({codeResults.length})</h2><div className="results-grid">{codeResults.map((item) => <a key={`code-${item.id}`} href={localizedPath('/codes-solutions', locale)} className="result-card code-card"><div className="card-content"><h3 className="card-title" dangerouslySetInnerHTML={highlighted(item.title)} /><p className="card-description" dangerouslySetInnerHTML={highlighted(item.description)} /><div className="card-meta"><span className="code-value" dangerouslySetInnerHTML={highlighted(item.code)} /></div></div></a>)}</div></div>}
    </div> : <div className="no-results-container"><div className="no-results-content"><p className="no-results-text">{translate(locale, 'searchPage.noResults.trySearching')}</p><ul className="suggestions-list">{['levelNames', 'entityNames', 'mapNames', 'codes', 'keywords'].map((key) => <li key={key}>{translate(locale, `searchPage.noResults.suggestions.${key}`)}</li>)}</ul></div></div>}</div></section> : <section className="empty-state"><div className="container"><div className="empty-content"><h2>{translate(locale, 'searchPage.emptyState.title')}</h2><p>{translate(locale, 'searchPage.emptyState.description')}</p></div></div></section>}
  </div>
}
