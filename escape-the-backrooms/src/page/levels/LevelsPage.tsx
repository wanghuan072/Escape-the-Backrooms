import { AdPlacement } from '@/components/ads/AdPlacement'
import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import { getLevels } from '@/lib/data/levels'
import { localizedPath, translate } from '@/lib/i18n/messages'
import { CategoryNavigation } from '@/page/levels/components/CategoryNavigation'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'
import '@/style/page/levels/levels-page.module.css'

const categorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, '-')

export default function LevelsPage({ locale }: { locale: Locale }) {
  const groups = getLevels(locale).reduce<Record<string, LevelEntry[]>>((result, level) => {
    const category = level.category || 'Other'
    result[category] ||= []
    result[category].push(level)
    return result
  }, {})
  const categories = Object.keys(groups)

  return (
    <div className="levels-view">
      <section className="page-hero"><div className="container"><div className="hero-content"><h1 className="page-title">{translate(locale, 'levelsPage.hero.title')}</h1><p className="page-subtitle">{translate(locale, 'levelsPage.hero.subtitle')}</p></div></div></section>
      <AdPlacement />
      <section className="levels-content">
        <div className="content-wrapper">
          <aside className="sidebar">
            <div className="sidebar-content"><div className="category-nav"><h2 className="sidebar-title">{translate(locale, 'levelsPage.sidebar.title')}</h2><CategoryNavigation categories={categories.map((name) => ({ name, count: groups[name].length }))} /></div></div>
            <AdPlacement />
          </aside>
          <main className="main-content">
            <div className="container">
              {categories.map((category) => (
                <div className="level-group" key={category} id={categorySlug(category)}>
                  <div className="group-header"><h2 className="group-title">{category}</h2><span className="category-count">{groups[category].length} {translate(locale, 'levelsPage.category.countText')}</span></div>
                  <div className="levels-grid">
                    {groups[category].map((level) => (
                      <a href={localizedPath(`/levels/${level.addressBar}`, locale)} className="level-card" key={level.id} id={`level-${level.id}`}>
                        <div className="level-media">{level.imageUrl ? <IntrinsicImage src={level.imageUrl} alt={level.imageAlt || level.title} className="level-thumb" loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" /> : <div className="level-thumb level-thumb-placeholder">{level.title}</div>}</div>
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
