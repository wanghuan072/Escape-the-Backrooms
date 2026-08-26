import { AdPlacement } from '@/components/ads/AdPlacement'
import { getLevels, resolveLevelAddress } from '@/lib/data/levels'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { siteConfig } from '@/config/site'
import { JsonLd, pageJsonLd } from '@/seo/json-ld'
import { optimizeRichHtml } from '@/lib/html/media'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'
import '@/style/page/levels/level-detail-page.module.css'

export default function LevelDetailPage({ locale, level }: { locale: Locale; level: LevelEntry }) {
  const allLevels = getLevels(locale)
  const index = allLevels.findIndex((entry) => entry.id === level.id)
  const previous = index > 0 ? allLevels[index - 1] : undefined
  const next = index >= 0 && index < allLevels.length - 1 ? allLevels[index + 1] : undefined
  const featuredHref = (featured: NonNullable<LevelEntry['featured']>[number]) => featured.addressBar.startsWith('#')
    ? `${localizedPath(`/levels/${level.addressBar}`, locale)}${featured.addressBar}`
    : localizedPath(`/levels/${resolveLevelAddress(locale, featured.addressBar, featured.title)}`, locale)

  return (
    <>
    <JsonLd data={pageJsonLd(level.seo.title || level.title, level.seo.description || level.description, `${siteConfig.url}${localizedPath(`/levels/${level.addressBar}`, locale)}`, 'Article')} />
    <div className="level-detail-view">
      <section className="page-hero"><div className="container"><div className="header-content"><div className="title-section"><h1 className="page-title">{level.pageTitle}</h1>{level.quote && <div className="quote"><div className="quote-text">{level.quote}</div>{level.quoteBy && <div className="quote-by">— {level.quoteBy}</div>}</div>}</div><div className="header-badges">{level.survivalDifficulty && <div className="badge"><span className="badge-label">{translate(locale, 'levelDetailPage.badge.survivalDifficulty')}</span><span className="badge-value">{level.survivalDifficulty}</span></div>}{level.sanityDanger && <div className="badge"><span className="badge-label">{translate(locale, 'levelDetailPage.badge.sanityDanger')}</span><span className="badge-value">{level.sanityDanger}</span></div>}</div></div></div></section>
      <AdPlacement />
      <section className="detail-content"><div className="container"><div className="content-layout">
        <main className="main-content">
          <div className="content-body v-html-style" dangerouslySetInnerHTML={{ __html: optimizeRichHtml(level.detailsHtml) }} />
          <AdPlacement />
          {(previous || next) && <div className="nav-links">
            {previous && <a href={localizedPath(`/levels/${previous.addressBar}`, locale)} className="nav-link prev-link"><span className="nav-arrow">←</span><div className="nav-content"><span className="nav-label">{translate(locale, 'levelDetailPage.navigation.previous')}</span><span className="nav-title">{previous.title}</span></div></a>}
            {next && <a href={localizedPath(`/levels/${next.addressBar}`, locale)} className="nav-link next-link"><div className="nav-content"><span className="nav-label">{translate(locale, 'levelDetailPage.navigation.next')}</span><span className="nav-title">{next.title}</span></div><span className="nav-arrow">→</span></a>}
          </div>}
          <AdPlacement />
        </main>
        <aside className="sidebar">
          <div className="image-card"><div className="image-wrapper">{level.imageUrl ? <img src={level.imageUrl} alt={level.imageAlt || level.title} className="level-image" loading="lazy" /> : <div className="level-image placeholder">{level.title}</div>}</div></div>
          <AdPlacement />
          {level.sideBarInfo && <div className="info-card">{level.sideBarInfo.name && <div className="info-header"><h3 className="info-title">{level.sideBarInfo.name}</h3></div>}<div className="info-content">{level.sideBarInfo.difficulty && <div className="info-row"><div className="info-label">{translate(locale, 'levelDetailPage.sidebar.difficulty')}</div><div className="info-value-text">{level.sideBarInfo.difficulty}</div></div>}{level.sideBarInfo.objectives && <div className="info-row"><div className="info-label">{translate(locale, 'levelDetailPage.sidebar.objectives')}</div><div className="info-value-text">{level.sideBarInfo.objectives}</div></div>}</div></div>}
          <AdPlacement />
          {level.featured && level.featured.length > 0 && <div className="info-card"><div className="info-header"><h3 className="info-title">{translate(locale, 'levelDetailPage.sidebar.featuredTitle')}</h3></div><div className="featured-levels">{level.featured.map((featured) => <a key={featured.title} href={featuredHref(featured)} className="featured-item">{featured.imageUrl && <img src={featured.imageUrl} alt={featured.title} className="featured-image" loading="lazy" />}<div className="featured-info"><div className="featured-title">{featured.title}</div>{featured.description && <div className="featured-desc">{featured.description}</div>}</div></a>)}</div></div>}
          <AdPlacement />
        </aside>
      </div></div></section>
    </div>
    </>
  )
}
