import { AdPlacement } from '@/components/ads/AdPlacement'
import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import { getEntities } from '@/lib/data/entities'
import { getEntityRecord } from '@/lib/data/entity-relations'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { siteConfig } from '@/config/site'
import { JsonLd, itemListJsonLd } from '@/seo/json-ld'
import type { Locale } from '@/types/locale'
import '@/style/page/entities/entities-page.module.css'

export default function EntitiesPage({ locale }: { locale: Locale }) {
  const entities = getEntities(locale)
  const groups = [
    { id: 'chaser', title: translate(locale, 'entitiesPage.chaserTitle'), description: translate(locale, 'entitiesPage.chaserDescription') },
    { id: 'interactive', title: translate(locale, 'entitiesPage.interactiveTitle'), description: translate(locale, 'entitiesPage.interactiveDescription') },
    { id: 'ambient', title: translate(locale, 'entitiesPage.ambientTitle'), description: translate(locale, 'entitiesPage.ambientDescription') },
  ].map((group) => ({ ...group, entries: entities.filter((entity) => getEntityRecord(entity.addressBar)?.type[0] === group.id) }))
  return <div className="entities-view">
    <JsonLd id="entities-item-list" data={itemListJsonLd(
      translate(locale, 'entitiesPage.title'),
      translate(locale, 'entitiesPage.subtitle'),
      `${siteConfig.url}${localizedPath('/entities', locale)}`,
      entities.map((entity) => ({ name: entity.title, url: `${siteConfig.url}${localizedPath(`/entities/${entity.addressBar}`, locale)}`, image: entity.imageUrl ? `${siteConfig.url}${entity.imageUrl}` : undefined })),
    )} />
    <section className="page-hero entities-hero"><div className="container"><div className="hero-content"><span className="entity-kicker">{translate(locale, 'entitiesPage.kicker')}</span><h1 className="page-title">{translate(locale, 'entitiesPage.title')}</h1><p className="page-subtitle">{translate(locale, 'entitiesPage.subtitle')}</p></div></div></section>
    <AdPlacement />
    <main className="entities-content"><div className="container"><div className="entity-directory-intro"><span>{translate(locale, 'entitiesPage.fieldGuide')}</span><p>{translate(locale, 'entitiesPage.intro')}</p></div><div className="entity-directory-stats"><strong>{entities.length}</strong><span>{translate(locale, 'entitiesPage.countLabel')}</span><i /><small><b>1–2</b> {translate(locale, 'entitiesPage.lowThreat')}</small><small><b>3</b> {translate(locale, 'entitiesPage.pursuitRisk')}</small><small><b>4–5</b> {translate(locale, 'entitiesPage.lethalPressure')}</small></div>{groups.filter((group) => group.entries.length > 0).map((group) => <section key={group.id} className="entity-group"><div className="entity-group-heading"><div><span>{group.id}</span><h2>{group.title}</h2><p>{group.description}</p></div><b>{group.entries.length}</b></div><div className="entities-grid">{group.entries.map((entity) => <a key={entity.id} href={localizedPath(`/entities/${entity.addressBar}`, locale)} className="entity-card"><div className="entity-card-image">{entity.imageUrl ? <IntrinsicImage src={entity.imageUrl} alt={entity.imageAlt || entity.title} className="entity-card-thumb" loading="lazy" sizes="(max-width: 640px) 100vw, 220px" /> : <div className="entity-card-thumb">{entity.title}</div>}<span className={`entity-threat ${entity.dangerClass ?? ''}`}>{entity.dangerLevel}</span></div><div className="entity-card-body"><h3>{entity.title}</h3><p>{entity.description}</p><div className="entity-card-meta"><span>{translate(locale, 'entitiesPage.firstEncounter')}: {entity.entityInfo?.firstAppearsIn || entity.firstAppearsIn}</span><span>{translate(locale, 'entitiesPage.openDossier')} →</span></div></div></a>)}</div></section>)}</div></main>
    <AdPlacement />
  </div>
}
