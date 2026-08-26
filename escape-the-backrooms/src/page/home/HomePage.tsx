import { AdPlacement } from '@/components/ads/AdPlacement'
import { AdsAdSlot } from '@/components/ads/AdsAdSlot'
import { getEntities } from '@/lib/data/entities'
import { getLevels } from '@/lib/data/levels'
import { getMaps } from '@/lib/data/maps'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { HomeVideo } from '@/page/home/components/HomeVideo'
import type { EntityEntry } from '@/types/entity'
import type { Locale } from '@/types/locale'
import '@/style/page/home/home-page.module.css'

const spanishEntities: Record<number, Partial<EntityEntry>> = {
  1: { title: 'Vagabundo', description: 'Seres humanos atrapados en los Backrooms, casi siempre vistos con un traje de protección.' },
  2: { title: 'Bacteria', description: 'Criaturas humanoides negras con estructura esquelética de alambres que persiguen a los vagabundos al verlos.' },
  3: { title: 'Ladrón de piel', description: 'Entidades humanoides grises capaces de robar la piel de un jugador y hacerse pasar por vagabundos.' },
}

function SectionHeader({ locale, section, link, linkText }: { locale: Locale; section: string; link?: string; linkText?: string }) {
  return <div className="section-header"><div className="header-content"><span className="section-label">{translate(locale, `homePage.${section}.label`)}</span><h2 className="section-title">{translate(locale, `homePage.${section}.title`)}</h2><p className="section-subtitle">{translate(locale, `homePage.${section}.subtitle`)}</p></div>{link && linkText && <a href={localizedPath(link, locale)} className="section-link">{translate(locale, linkText)}</a>}</div>
}

function GameInfoCard({ locale, card, labeled }: { locale: Locale; card: 'card01' | 'card02' | 'card03'; labeled?: boolean }) {
  return <div className="info-card"><h3>{translate(locale, `homePage.gameInfo.${card}Title`)}</h3><ul className="info-list">{Array.from({ length: 6 }, (_, index) => { const number = String(index + 1).padStart(2, '0'); return <li key={number}>{labeled && <strong>{translate(locale, `homePage.gameInfo.${card}Item${number}Label`)}</strong>} {translate(locale, `homePage.gameInfo.${card}Item${number}${labeled ? 'Value' : ''}`)}</li> })}</ul></div>
}

export default function HomePage({ locale }: { locale: Locale }) {
  const homeLevels = getLevels(locale).filter((level) => level.isHome).slice(-6)
  const homeMaps = getMaps(locale).filter((map) => map.isHome)
  const homeEntities = getEntities().filter((entity) => entity.isHome).map((entity) => locale === 'es' ? { ...entity, ...spanishEntities[Number(entity.id)] } : entity)
  const faqItems = Array.from({ length: 10 }, (_, index) => { const number = String(index + 1).padStart(2, '0'); return { question: translate(locale, `homePage.faq.item${number}Question`), answer: translate(locale, `homePage.faq.item${number}Answer`) } })

  return (
    <div className="home-view">
      <section className="hero"><div className="container"><div className="hero-layout">
        <div className="hero-content">
          <div className="hero-badges"><span className="badge badge-new">{translate(locale, 'homePage.hero.badgeNew')}</span><span className="badge">{translate(locale, 'homePage.hero.badgeSteam')}</span></div>
          <h1 className="hero-title">{translate(locale, 'homePage.hero.title')}</h1><p className="hero-description">{translate(locale, 'homePage.hero.description')}</p>
          <div className="hero-features">{[1, 2, 3, 4].map((number) => <div className="feature-item" key={number}>{translate(locale, `homePage.hero.feature0${number}`)}</div>)}</div>
          <div className="hero-stats">{[1, 2, 3].map((number) => <div className="stat-box" key={number}><div className="stat-number">{translate(locale, `homePage.hero.stat0${number}Number`)}</div><div className="stat-text">{translate(locale, `homePage.hero.stat0${number}Text`)}</div></div>)}</div>
          <div className="hero-actions"><a href={localizedPath('/levels', locale)} className="btn btn-primary">{translate(locale, 'homePage.hero.button01')}</a><a href={localizedPath('/codes-solutions', locale)} className="btn btn-secondary">{translate(locale, 'homePage.hero.button02')}</a></div>
        </div>
        <HomeVideo title={translate(locale, 'homePage.hero.videoTitle')} />
      </div></div><AdPlacement /></section>

      {homeLevels.length > 0 && <section className="featured-section"><div className="container"><SectionHeader locale={locale} section="featuredLevels" link="/levels" linkText="homePage.featuredLevels.linkText" /><div className="featured-grid">{homeLevels.map((level) => <a key={level.id} href={localizedPath(`/levels/${level.addressBar}`, locale)} className="featured-card"><div className="card-image">{level.imageUrl ? <img src={level.imageUrl} alt={level.imageAlt || level.title} className="card-img" loading="lazy" /> : <div className="card-img placeholder">{level.title}</div>}<div className="image-overlay" />{level.category && <div className="card-badge-top">{level.category}</div>}</div><div className="card-content"><h3 className="card-title">{level.title}</h3><p className="card-desc">{level.description}</p>{level.tags && level.tags.length > 0 && <div className="card-tags">{level.tags.slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>}</div></a>)}</div></div><AdPlacement /></section>}

      {homeMaps.length > 0 && <section className="featured-section"><div className="container"><SectionHeader locale={locale} section="featuredMaps" link="/maps-keys" linkText="homePage.featuredMaps.linkText" /><div className="featured-grid">{homeMaps.map((map) => <a key={map.id} href={localizedPath(`/maps-keys/${map.addressBar}`, locale)} className="featured-card"><div className="card-image">{map.imageUrl ? <img src={map.imageUrl} alt={map.imageAlt || map.title} className="card-img" loading="lazy" /> : <div className="card-img placeholder">{map.title}</div>}<div className="image-overlay" />{map.category && <div className="card-badge-top">{map.category}</div>}</div><div className="card-content"><h3 className="card-title">{map.title}</h3><p className="card-desc">{map.description}</p>{map.tags && map.tags.length > 0 && <div className="card-tags">{map.tags.slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>}</div></a>)}</div></div><AdPlacement /></section>}

      {homeEntities.length > 0 && <section className="featured-section"><div className="container"><SectionHeader locale={locale} section="featuredEntities" /><div className="featured-grid">{homeEntities.map((entity) => <div key={entity.id} className="featured-card"><div className="card-image">{entity.imageUrl ? <img src={entity.imageUrl} alt={entity.imageAlt || entity.name} className="card-img" loading="lazy" /> : <div className="card-img placeholder">{entity.name}</div>}<div className="image-overlay" /><div className={`card-badge-top ${entity.dangerClass ?? ''}`}>{entity.dangerLevel}</div></div><div className="card-content"><h3 className="card-title">{entity.title}</h3><p className="card-desc">{entity.description}</p><div className="card-meta">{entity.species && <span className="meta-item">{entity.species}</span>}{entity.firstAppearsIn && <span className="meta-item">{entity.firstAppearsIn}</span>}</div></div></div>)}</div></div><AdPlacement /></section>}

      <section className="game-info"><div className="container"><SectionHeader locale={locale} section="gameInfo" /><div className="info-grid"><GameInfoCard locale={locale} card="card01" labeled /><GameInfoCard locale={locale} card="card02" labeled /><GameInfoCard locale={locale} card="card03" /></div></div><AdPlacement /></section>

      <section className="about-section" id="about"><div className="container"><div className="about-wrap"><SectionHeader locale={locale} section="about" /><div className="about-content"><div className="about-text">{[1, 2, 3].map((number) => <p key={number} dangerouslySetInnerHTML={{ __html: translate(locale, `homePage.about.text0${number}`) }} />)}</div><div className="about-highlights">{[1, 2, 3, 4, 5, 6].map((number) => <div className="highlight-item" key={number}><div><strong>{translate(locale, `homePage.about.highlight0${number}Title`)}</strong><p>{translate(locale, `homePage.about.highlight0${number}Text`)}</p></div></div>)}</div></div></div></div><AdPlacement /></section>

      <section className="faq-section" id="faq"><div className="container"><div className="faq-wrap"><SectionHeader locale={locale} section="faq" /><div className="faq-list">{faqItems.map((item, index) => <div className="faq-item" key={index}><h3 className="faq-question">{item.question}</h3><div className="faq-answer"><p dangerouslySetInnerHTML={{ __html: item.answer }} /></div></div>)}</div></div></div><aside className="container home-page-ad"><AdsAdSlot /></aside></section>
    </div>
  )
}
