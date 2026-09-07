'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { languages, navigationLabels } from '@/config/navigation'
import { localizedPath } from '@/lib/i18n/messages'
import { getLocalizedPath } from '@/lib/routes/localized-path'
import type { Locale } from '@/types/locale'
import '@/style/navigation/site-header.module.css'

interface SiteHeaderProps {
  locale: Locale
  searchPlaceholder: string
}

export function SiteHeader({ locale, searchPlaceholder }: SiteHeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const languageRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setLanguageOpen] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)
  const labels = navigationLabels[locale]
  const currentLanguageName = languages.find((language) => language.code === locale)?.name ?? 'English'

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageOpen(false)
      }
    }
    document.addEventListener('click', closeOnOutsideClick)
    return () => document.removeEventListener('click', closeOnOutsideClick)
  }, [])

  useEffect(() => {
    if (!isSearchOpen) return
    searchInputRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setSearchOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isSearchOpen])

  const submitSearch = () => {
    const query = searchQuery.trim()
    if (!query) return
    router.push(`${localizedPath('/search', locale)}?q=${encodeURIComponent(query)}`)
    setSearchOpen(false)
  }

  const selectLanguage = (targetLocale: Locale) => {
    if (targetLocale === locale) {
      setLanguageOpen(false)
      return
    }
    const suffix = `${window.location.search}${window.location.hash}`
    router.push(`${getLocalizedPath(pathname, targetLocale)}${suffix}`)
    setLanguageOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-wrap">
          <div className="logo">
            <a href={localizedPath('/', locale)} className="logo-link" aria-label={labels.siteHome}>
              <Image src="/images/logo.webp" alt="" className="logo-image" width={70} height={49} priority sizes="(max-width: 768px) 40px, 60px" />
              <span className="logo-text">Escape the Backrooms</span>
            </a>
          </div>
          <div className="header-actions">
            <button className="header-search-trigger" onClick={() => { setSearchOpen(true); setMobileMenuOpen(false) }} aria-label={labels.search} type="button"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 21 15.7 15.7M17.2 10.6a6.6 6.6 0 1 1-13.2 0 6.6 6.6 0 0 1 13.2 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></button>
            <button
              className={`mobile-menu-toggle${isMobileMenuOpen ? ' active' : ''}`}
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? labels.closeMenu : labels.openMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="primary-navigation"
              type="button"
            >
              <span className="hamburger-line" /><span className="hamburger-line" /><span className="hamburger-line" />
            </button>
            <div className="language-switcher" ref={languageRef}>
              <button className="language-button" onClick={() => setLanguageOpen((open) => !open)} aria-label={`${labels.currentLanguage}: ${currentLanguageName}`} aria-expanded={isLanguageOpen} type="button">
                <span className="language-text">{currentLanguageName}</span>
                <svg className={`language-arrow${isLanguageOpen ? ' open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isLanguageOpen && (
                <div className="language-dropdown open">
                  {languages.map((language) => (
                    <button key={language.code} className={`language-option${locale === language.code ? ' active' : ''}`} onClick={() => selectLanguage(language.code)} type="button">
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <nav id="primary-navigation" className={`nav${isMobileMenuOpen ? ' open' : ''}`} aria-label={labels.navigate}>
            <a href={localizedPath('/', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.home}</a>
            <a href={localizedPath('/levels', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.levels}</a>
            <a href={localizedPath('/entities', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.entities}</a>
            <a href={localizedPath('/maps-keys', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.maps}</a>
            <a href={localizedPath('/codes-solutions', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.codes}</a>
            <a href={localizedPath('/backrooms-games', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.relatedGames}</a>
          </nav>
        </div>
      </div>
      {isSearchOpen && <div className="site-search-overlay" role="presentation" onMouseDown={() => setSearchOpen(false)}><section className="site-search-dialog" role="dialog" aria-modal="true" aria-label={labels.search} onMouseDown={(event) => event.stopPropagation()}><form className="site-search-form" onSubmit={(event) => { event.preventDefault(); submitSearch() }}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 21 15.7 15.7M17.2 10.6a6.6 6.6 0 1 1-13.2 0 6.6 6.6 0 0 1 13.2 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg><input ref={searchInputRef} type="search" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder={searchPlaceholder} aria-label={searchPlaceholder} /><button className="site-search-close" type="button" onClick={() => setSearchOpen(false)} aria-label={labels.closeMenu}>×</button></form><div className="site-search-links"><div><span>{labels.quickLinks}</span><small>Esc</small></div><a href={localizedPath('/levels', locale)} onClick={() => setSearchOpen(false)}>{labels.levels}<b>→</b></a><a href={localizedPath('/entities', locale)} onClick={() => setSearchOpen(false)}>{labels.entities}<b>→</b></a><a href={localizedPath('/maps-keys', locale)} onClick={() => setSearchOpen(false)}>{labels.maps}<b>→</b></a><a href={localizedPath('/codes-solutions', locale)} onClick={() => setSearchOpen(false)}>{labels.codes}<b>→</b></a></div></section></div>}
    </header>
  )
}
