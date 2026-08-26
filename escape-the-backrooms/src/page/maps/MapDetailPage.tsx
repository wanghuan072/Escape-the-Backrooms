import { AdPlacement } from '@/components/ads/AdPlacement'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { siteConfig } from '@/config/site'
import { JsonLd, pageJsonLd } from '@/seo/json-ld'
import { optimizeRichHtml } from '@/lib/html/media'
import type { Locale } from '@/types/locale'
import type { MapEntry } from '@/types/map'
import '@/style/page/maps/map-detail-page.module.css'

export default function MapDetailPage({ locale, map }: { locale: Locale; map: MapEntry }) {
  return (
    <>
    <JsonLd data={pageJsonLd(map.seo.title || map.title, map.seo.description || map.description, `${siteConfig.url}${localizedPath(`/maps-keys/${map.addressBar}`, locale)}`, 'Article')} />
    <div className="map-detail-view">
      <section className="page-hero"><div className="container"><div className="header-content"><div className="title-section"><h1 className="page-title">{map.title}</h1><div className="map-badges">{map.category && <span className="badge">{map.category}</span>}</div></div></div></div></section>
      <AdPlacement />
      <section className="detail-content"><div className="container"><div className="content-layout">
        <main className="main-content">
          <div className="map-container"><div className="map-wrapper">{map.mapImageUrl ? <img src={map.mapImageUrl} alt={map.imageAlt || map.title} className="map-image" loading="lazy" /> : <div className="map-image placeholder">{map.title}</div>}</div></div>
          <AdPlacement />
          {map.mapPoints && map.mapPoints.length > 0 && <div className="map-points-container"><div className="map-points-grid">{map.mapPoints.map((point, index) => <div key={point.id ?? `${point.title}-${index}`} className="map-point-card"><div className="map-point-header"><h3 className="map-point-title">{point.title}</h3><button className="map-point-menu" type="button">⋮</button></div><p className="map-point-content">{point.content}</p></div>)}</div></div>}
          <AdPlacement />
          <div className="content-body v-html-style" dangerouslySetInnerHTML={{ __html: optimizeRichHtml(map.detailsHtml) }} />
          <AdPlacement />
        </main>
        <aside className="sidebar">
          <div className="image-card"><div className="image-header">{map.title}</div><div className="image-wrapper">{map.imageUrl ? <img src={map.imageUrl} alt={map.imageAlt || map.title} className="level-image" loading="lazy" /> : <div className="level-image placeholder">{map.title}</div>}</div></div>
          <AdPlacement />
          {map.category && <div className="info-card"><div className="info-header"><h3 className="info-title">{translate(locale, 'mapDetailPage.sidebar.information')}</h3></div><div className="info-content"><div className="info-row"><div className="info-label">{translate(locale, 'mapDetailPage.sidebar.category')}</div><div className="info-value-text">{map.category}</div></div>{map.tags && map.tags.length > 0 && <div className="info-row"><div className="info-label">{translate(locale, 'mapDetailPage.sidebar.tags')}</div><div className="info-value-text">{map.tags.map((tag) => <span key={tag} className="tag-badge">{tag}</span>)}</div></div>}</div></div>}
          <AdPlacement />
        </aside>
      </div></div></section>
    </div>
    </>
  )
}
