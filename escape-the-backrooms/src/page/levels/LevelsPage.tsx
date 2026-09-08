import { AdPlacement } from '@/components/ads/AdPlacement'
import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import { getLevelCategoryKey, getLevels } from '@/lib/data/levels'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { CategoryNavigation } from '@/page/levels/components/CategoryNavigation'
import { siteConfig } from '@/config/site'
import { JsonLd, itemListJsonLd } from '@/seo/json-ld'
import type { Locale } from '@/types/locale'
import '@/style/page/levels/levels-page.module.css'

export default function LevelsPage({ locale }: { locale: Locale }) {
  const levels = getLevels(locale)
  const groups = (['main', 'hidden'] as const).map((key) => ({
    key,
    title: translate(locale, `levelsPage.categories.${key}`),
    entries: levels.filter((level) => getLevelCategoryKey(level) === key),
  }))
  const listUrl = `${siteConfig.url}${localizedPath('/levels', locale)}`

  return (
    <div className="levels-view">
      <JsonLd id="levels-item-list" data={itemListJsonLd(
        translate(locale, 'levelsPage.hero.title'),
        translate(locale, 'levelsPage.hero.subtitle'),
        listUrl,
        levels.map((level) => ({ name: level.title, url: `${siteConfig.url}${localizedPath(`/levels/${level.addressBar}`, locale)}`, image: level.imageUrl ? `${siteConfig.url}${level.imageUrl}` : undefined })),
      )} />
      <section className="page-hero"><div className="container"><div className="hero-content"><h1 className="page-title">{translate(locale, 'levelsPage.hero.title')}</h1><p className="page-subtitle">{translate(locale, 'levelsPage.hero.subtitle')}</p></div></div></section>
      <AdPlacement />
      <section className="levels-content">
        <div className="content-wrapper">
          <aside className="sidebar">
            <div className="sidebar-content"><div className="category-nav"><h2 className="sidebar-title">{translate(locale, 'levelsPage.sidebar.title')}</h2><CategoryNavigation categories={groups.map((group) => ({ name: group.title, count: group.entries.length, slug: group.key }))} /></div></div>
            <AdPlacement />
          </aside>
          <main className="main-content">
            <div className="container">
              {groups.map((group) => (
                <div className="level-group" key={group.key} id={group.key}>
                  <div className="group-header"><h2 className="group-title">{group.title}</h2><span className="category-count">{group.entries.length} {translate(locale, 'levelsPage.category.countText')}</span></div>
                  <div className="levels-grid">
                    {group.entries.map((level) => (
                      <a href={localizedPath(`/levels/${level.addressBar}`, locale)} className="level-card" key={level.id} id={`level-${level.id}`}>
                        <div className="level-media">{level.isLatest && <span className="latest-level-marker">{translate(locale, 'levelsPage.latestBadge')}</span>}{level.imageUrl ? <IntrinsicImage src={level.imageUrl} alt={level.imageAlt || level.title} className="level-thumb" loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" /> : <div className="level-thumb level-thumb-placeholder">{level.title}</div>}</div>
                        <div className="level-body"><h3 className="level-name">{level.title}</h3><p className="level-desc">{level.description}</p><div className="level-meta">{level.tags?.map((tag) => <span className="meta-tag" key={tag}>{tag}</span>)}</div></div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
      <AdPlacement />
    </div>
  )
}
