import { AdPlacement } from '@/components/ads/AdPlacement'
import { getMaps } from '@/lib/data/maps'
import { localizedPath, translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import '@/style/page/maps/maps-page.module.css'

function KeyCard({ locale, level, infoRows, steps }: { locale: Locale; level: 'level0' | 'level1' | 'level5'; infoRows: Array<['location' | 'prerequisite' | 'totalRequired' | 'obtainMethod' | 'required', string]>; steps: number }) {
  return (
    <div className="key-card">
      <div className="key-card-header"><div className="key-level"><span className="key-icon">🔑</span><div><h3 className="key-title">{translate(locale, `mapsPage.keysSection.${level}.title`)}</h3><span className="key-count">{translate(locale, `mapsPage.keysSection.${level}.count`)}</span></div></div></div>
      <div className="key-card-body">
        <div className="key-info">{infoRows.map(([label, value]) => <div className="info-item" key={label}><span className="info-label">{translate(locale, `mapsPage.keysSection.labels.${label}`)}</span><span className="info-value">{translate(locale, `mapsPage.keysSection.${level}.${value}`)}</span></div>)}</div>
        <div className="key-steps"><h4 className="steps-title">{translate(locale, 'mapsPage.keysSection.labels.collectionSteps')}</h4><ol className="steps-list">{Array.from({ length: steps }, (_, index) => <li key={index}>{translate(locale, `mapsPage.keysSection.${level}.steps.step${index + 1}`)}</li>)}</ol></div>
      </div>
    </div>
  )
}

export default function MapsPage({ locale }: { locale: Locale }) {
  const maps = getMaps(locale)
  return (
    <div className="maps-keys-view">
      <section className="page-hero"><div className="container"><div className="hero-content"><h1 className="page-title">{translate(locale, 'mapsPage.hero.title')}</h1><p className="page-subtitle">{translate(locale, 'mapsPage.hero.subtitle')}</p></div></div></section>
      <AdPlacement />
      <section className="maps-section"><div className="container">
        <div className="section-header"><h2 className="section-title">{translate(locale, 'mapsPage.mapsSection.title')}</h2><p className="section-subtitle">{translate(locale, 'mapsPage.mapsSection.subtitle')}</p></div>
        <div className="maps-grid">{maps.map((map) => <a key={map.id} href={localizedPath(`/maps-keys/${map.addressBar}`, locale)} className="map-card"><div className="map-image">{map.imageUrl ? <img src={map.imageUrl} alt={map.imageAlt || map.title} className="map-thumb" loading="lazy" /> : <div className="map-thumb placeholder">{map.title}</div>}</div><div className="map-content"><h3 className="map-title">{map.title}</h3><p className="map-desc">{map.description}</p><div className="map-meta"><span className="map-category">{map.category}</span>{map.tags && map.tags.length > 0 && <span className="map-tags">{map.tags.slice(0, 2).map((tag) => <span key={tag} className="map-tag">{tag}</span>)}</span>}</div></div></a>)}</div>
      </div></section>
      <AdPlacement />
      <section className="keys-section"><div className="container">
        <div className="section-header"><h2 className="section-title">{translate(locale, 'mapsPage.keysSection.title')}</h2><p className="section-subtitle">{translate(locale, 'mapsPage.keysSection.subtitle')}</p></div>
        <div className="keys-intro"><div className="intro-icon">🔑</div><div className="intro-content"><h3 className="intro-title">{translate(locale, 'mapsPage.keysSection.introTitle')}</h3><p className="intro-text">{translate(locale, 'mapsPage.keysSection.introText')}</p></div></div>
        <AdPlacement />
        <div className="keys-grid">
          <KeyCard locale={locale} level="level0" infoRows={[["location", "location"], ["prerequisite", "prerequisite"]]} steps={4} />
          <KeyCard locale={locale} level="level1" infoRows={[["location", "location"], ["totalRequired", "totalRequired"]]} steps={5} />
          <KeyCard locale={locale} level="level5" infoRows={[["location", "location"], ["obtainMethod", "obtainMethod"], ["required", "required"]]} steps={6} />
        </div>
      </div></section>
      <AdPlacement />
    </div>
  )
}
