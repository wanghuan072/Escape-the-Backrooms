import { AdPlacement } from '@/components/ads/AdPlacement'
import { getLevels } from '@/lib/data/levels'
import { getMapLevelRelation, getMapsForLevel } from '@/lib/data/map-level-relations'
import { RelatedContentLinks } from '@/components/content/RelatedContentLinks'
import { VideoChapters } from '@/components/content/VideoChapters'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { siteConfig } from '@/config/site'
import { JsonLd, pageJsonLd } from '@/seo/json-ld'
import { extractRichHtmlHeadings, extractVideoHighlights, identifyFirstVideoIframe, optimizeRichHtml, splitRichHtmlAtFirstIframe, splitRichHtmlAtFirstParagraph } from '@/lib/html/media'
import { addContextualLinks } from '@/lib/html/contextual-links'
import { createGuideChapters, getYouTubeVideo } from '@/lib/data/youtube'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'
import '@/style/page/levels/level-detail-page.module.css'

export default function LevelDetailPage({ locale, level }: { locale: Locale; level: LevelEntry }) {
  const video = getYouTubeVideo(level.detailsHtml)
  const allLevels = getLevels(locale)
  const index = allLevels.findIndex((entry) => entry.id === level.id)
  const previous = index > 0 ? allLevels[index - 1] : undefined
  const next = index >= 0 && index < allLevels.length - 1 ? allLevels[index + 1] : undefined
  const relatedMaps = getMapsForLevel(locale, level.id)
  const levelHtml = addContextualLinks(level.detailsHtml, relatedMaps.flatMap((map) => {
    const relation = getMapLevelRelation(map.id)
    if (!relation) return []
    return [{
      paragraph: relation.levelLinkParagraph,
      lead: translate(locale, 'levelDetailPage.inlineMapLink'),
      href: localizedPath(`/maps-keys/${map.addressBar}`, locale),
      label: map.title,
    }]
  }))
  const highlights = extractVideoHighlights(levelHtml)
  const { remainingHtml: afterIntroHtml } = splitRichHtmlAtFirstParagraph(highlights.remainingHtml)
  const { videoHtml, remainingHtml } = splitRichHtmlAtFirstIframe(afterIntroHtml)
  const chapters = video?.chapters ?? (video ? createGuideChapters(video.durationSeconds, extractRichHtmlHeadings(remainingHtml)) : [])
  return (
    <>
    <JsonLd data={pageJsonLd(level.seo.title || level.title, level.seo.description || level.description, `${siteConfig.url}${localizedPath(`/levels/${level.addressBar}`, locale)}`, 'Article', { authorName: 'Bombit Team', authorUrl: siteConfig.social.youtube, dateModified: video?.updatedAt })} />
    <div className="level-detail-view">
      <section className="page-hero level-hero"><div className="container"><div className="header-content"><div className="title-section"><span className="level-eyebrow">{level.category || 'Walkthrough'}</span><h1 className="page-title">{level.pageTitle}</h1>{video && <LevelVideoMeta locale={locale} video={video} />}<p className="level-hero-summary">{level.description}</p>{highlights.items.length > 0 && <div className="level-video-highlights"><div className="video-highlights-title">{highlights.title}</div><div className="video-highlights-grid">{highlights.items.map((item, index) => <div className="video-highlight" key={index} dangerouslySetInnerHTML={{ __html: item }} />)}</div></div>}</div><div className="level-hero-visual">{level.imageUrl ? <img src={level.imageUrl} alt={level.imageAlt || level.title} loading="eager" /> : <span>{level.title}</span>}</div></div></div></section>
      <section className="detail-content"><div className="container"><div className="content-layout">
        <main className="main-content">
          <AdPlacement className="level-inline-ad" horizontal />
          {videoHtml && <div id="video-guide" className="content-body level-video-guide v-html-style" dangerouslySetInnerHTML={{ __html: optimizeRichHtml(identifyFirstVideoIframe(videoHtml)) }} />}
          {chapters.length ? <VideoChapters chapters={chapters} /> : null}
          <div className="content-body v-html-style" dangerouslySetInnerHTML={{ __html: optimizeRichHtml(remainingHtml) }} />
          <RelatedContentLinks
            title={translate(locale, 'levelDetailPage.relatedMaps.title')}
            actionLabel={translate(locale, 'levelDetailPage.relatedMaps.action')}
            links={relatedMaps.map((map) => ({
              href: localizedPath(`/maps-keys/${map.addressBar}`, locale),
              title: map.title,
              description: map.description,
              imageUrl: map.imageUrl,
              imageAlt: map.imageAlt,
            }))}
          />
          {(previous || next) && <div className="nav-links">
            {previous && <a href={localizedPath(`/levels/${previous.addressBar}`, locale)} className="nav-link prev-link"><span className="nav-arrow">←</span><div className="nav-content"><span className="nav-label">{translate(locale, 'levelDetailPage.navigation.previous')}</span><span className="nav-title">{previous.title}</span></div></a>}
            {next && <a href={localizedPath(`/levels/${next.addressBar}`, locale)} className="nav-link next-link"><div className="nav-content"><span className="nav-label">{translate(locale, 'levelDetailPage.navigation.next')}</span><span className="nav-title">{next.title}</span></div><span className="nav-arrow">→</span></a>}
          </div>}
          <AdPlacement />
        </main>
        <aside className="sidebar">
          <AdPlacement />
          {level.sideBarInfo && <div className="info-card">{level.sideBarInfo.name && <div className="info-header"><h3 className="info-title">{level.sideBarInfo.name}</h3></div>}<div className="info-content">{level.sideBarInfo.difficulty && <div className="info-row"><div className="info-label">{translate(locale, 'levelDetailPage.sidebar.difficulty')}</div><div className="info-value-text">{level.sideBarInfo.difficulty}</div></div>}{level.sideBarInfo.objectives && <div className="info-row"><div className="info-label">{translate(locale, 'levelDetailPage.sidebar.objectives')}</div><div className="info-value-text">{level.sideBarInfo.objectives}</div></div>}</div></div>}
          <AdPlacement />
        </aside>
      </div></div></section>
    </div>
    </>
  )
}

function LevelVideoMeta({ locale, video }: { locale: Locale; video: NonNullable<ReturnType<typeof getYouTubeVideo>> }) {
  const date = new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : locale, { month: 'long', year: 'numeric' }).format(new Date(`${video.updatedAt}T00:00:00Z`))
  const duration = `${Math.floor(video.durationSeconds / 60)}:${String(video.durationSeconds % 60).padStart(2, '0')}`
  return <div className="level-video-meta">
    <div className="level-guide-facts">
      <div><span className="level-meta-label">Author</span><span>Frontline Pathfinder</span></div>
      <div><span className="level-meta-label">Updated</span><span>{date}</span></div>
      <div><span className="level-meta-label">Duration</span><span>{duration}</span></div>
    </div>
    <div className="level-social-links">
      <a className="level-youtube-link" href={video.url} target="_blank" rel="noopener noreferrer" aria-label="Watch this walkthrough on YouTube">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
      </a>
    </div>
  </div>
}
