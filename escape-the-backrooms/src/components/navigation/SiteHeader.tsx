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
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLanguageOpen, setLanguageOpen] = useState(false)
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

  const submitSearch = () => {
    const query = searchQuery.trim()
    if (!query) return
    router.push(`${localizedPath('/search', locale)}?q=${encodeURIComponent(query)}`)
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

  const searchBox = (mobile = false) => (
    <div className={mobile ? 'mobile-search' : 'header-search'}>
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && submitSearch()}
        />
        <button className="search-button" onClick={submitSearch} type="button" aria-label={labels.search}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )

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
          {searchBox()}
          <div className="header-actions">
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
            {searchBox(true)}
            <a href={localizedPath('/', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.home}</a>
            <a href={localizedPath('/levels', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.levels}</a>
            <a href={localizedPath('/maps-keys', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.maps}</a>
            <a href={localizedPath('/codes-solutions', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.codes}</a>
            <a href={localizedPath('/backrooms-games', locale)} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{labels.relatedGames}</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
