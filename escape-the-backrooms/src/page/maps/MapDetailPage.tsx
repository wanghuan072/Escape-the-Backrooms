import { AdPlacement } from '@/components/ads/AdPlacement'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { siteConfig } from '@/config/site'
import { JsonLd, pageJsonLd } from '@/seo/json-ld'
import { addContextualLinks } from '@/lib/html/contextual-links'
import { optimizeRichHtml } from '@/lib/html/media'
import { getLevelsForMap, getMapLevelRelation } from '@/lib/data/map-level-relations'
import { getMapSections } from '@/lib/data/maps'
import { RelatedContentLinks } from '@/components/content/RelatedContentLinks'
import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import type { Locale } from '@/types/locale'
import type { MapEntry } from '@/types/map'
import '@/style/page/maps/map-detail-page.module.css'

function calloutPosition(x: number, y: number) {
  return { left: `${x}%`, top: `${y}%` }
}

export default function MapDetailPage({ locale, map }: { locale: Locale; map: MapEntry }) {
  const relatedLevels = getLevelsForMap(locale, map.id)
  const relation = getMapLevelRelation(map.id)
  const mapSections = getMapSections(locale, map)
  const mapHtml = addContextualLinks(map.detailsHtml, relation ? relatedLevels.map((level) => ({
    paragraph: relation.mapLinkParagraph,
    lead: translate(locale, 'mapDetailPage.inlineWalkthroughLink'),
    href: localizedPath(`/levels/${level.addressBar}`, locale),
    label: level.title,
  })) : [])
  return (
    <>
    <JsonLd data={pageJsonLd(map.seo.title || map.title, map.seo.description || map.description, `${siteConfig.url}${localizedPath(`/maps-keys/${map.addressBar}`, locale)}`, 'Article')} />
    <div className="map-detail-view">
      <section className="page-hero"><div className="container"><div className="header-content"><div className="title-section"><h1 className="page-title">{map.title}</h1><div className="map-badges">{map.category && <span className="badge">{map.category}</span>}</div></div></div></div></section>
      <AdPlacement />
      <section className="detail-content"><div className="container"><div className="content-layout">
        <main className="main-content">
          {map.introHtml && <div className="content-body v-html-style" dangerouslySetInnerHTML={{ __html: optimizeRichHtml(map.introHtml) }} />}
          {mapSections?.length ? mapSections.map((section) => <section className="map-section" key={section.imageUrl}><h2>{section.title}</h2><div className="map-container"><div className="map-wrapper"><IntrinsicImage src={section.imageUrl} alt={section.imageAlt} className="map-image" loading="lazy" sizes="(max-width: 768px) 100vw, 70vw" />{section.callouts?.map((callout) => <span key={callout.id} className="map-callout" style={calloutPosition(callout.x, callout.y)}>{callout.id}</span>)}</div></div><div className="map-points-container"><div className="map-points-grid">{section.mapPoints.map((point, index) => <div key={point.id ?? `${point.title}-${index}`} className="map-point-card"><div className="map-point-header"><h3 className="map-point-title">{point.title}</h3></div><p className="map-point-content">{point.content}</p></div>)}</div></div><div className="map-section-body v-html-style" dangerouslySetInnerHTML={{ __html: optimizeRichHtml(section.detailsHtml) }} /></section>) : <><div className="map-container"><div className="map-wrapper">{map.mapImageUrl ? <IntrinsicImage src={map.mapImageUrl} alt={map.imageAlt || map.title} className="map-image" loading="lazy" sizes="(max-width: 768px) 100vw, 70vw" /> : <div className="map-image placeholder">{map.title}</div>}</div></div>{map.galleryImages && map.galleryImages.length > 0 && <div className="map-gallery">{map.galleryImages.map((image) => <figure key={image.src} className="map-gallery-item"><figcaption>{image.title}</figcaption><IntrinsicImage src={image.src} alt={image.alt} className="map-image" loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" /></figure>)}</div>}</>}
          <AdPlacement />
          {!mapSections?.length && map.mapPoints && map.mapPoints.length > 0 && <div className="map-points-container"><div className="map-points-grid">{map.mapPoints.map((point, index) => <div key={point.id ?? `${point.title}-${index}`} className="map-point-card"><div className="map-point-header"><h3 className="map-point-title">{point.title}</h3></div><p className="map-point-content">{point.content}</p></div>)}</div></div>}
          <AdPlacement />
          <div className="content-body v-html-style" dangerouslySetInnerHTML={{ __html: optimizeRichHtml(mapHtml) }} />
          <AdPlacement />
          <RelatedContentLinks
            title={translate(locale, 'mapDetailPage.relatedWalkthrough.title')}
            actionLabel={translate(locale, 'mapDetailPage.relatedWalkthrough.action')}
            links={relatedLevels.map((level) => ({
              href: localizedPath(`/levels/${level.addressBar}`, locale),
              title: level.title,
              description: level.description,
              imageUrl: level.imageUrl,
              imageAlt: level.imageAlt,
            }))}
          />
        </main>
        <aside className="sidebar">
          <div className="image-card"><div className="image-header">{map.title}</div><div className="image-wrapper">{map.imageUrl ? <IntrinsicImage src={map.imageUrl} alt={map.imageAlt || map.title} className="level-image" loading="lazy" sizes="(max-width: 768px) 100vw, 25vw" /> : <div className="level-image placeholder">{map.title}</div>}</div></div>
          <AdPlacement hideOnMobile />
          {map.category && <div className="info-card"><div className="info-header"><h3 className="info-title">{translate(locale, 'mapDetailPage.sidebar.information')}</h3></div><div className="info-content"><div className="info-row"><div className="info-label">{translate(locale, 'mapDetailPage.sidebar.category')}</div><div className="info-value-text">{map.category}</div></div>{map.tags && map.tags.length > 0 && <div className="info-row"><div className="info-label">{translate(locale, 'mapDetailPage.sidebar.tags')}</div><div className="info-value-text">{map.tags.map((tag) => <span key={tag} className="tag-badge">{tag}</span>)}</div></div>}</div></div>}
          <AdPlacement hideOnMobile />
        </aside>
      </div></div></section>
    </div>
    </>
  )
}
