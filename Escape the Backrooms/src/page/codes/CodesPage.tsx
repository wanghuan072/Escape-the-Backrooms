import { AdPlacement } from '@/components/ads/AdPlacement'
import { translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import '@/style/page/codes/codes-page.module.css'

interface SolutionConfig {
  badge: string
  badgeClass: string
  images?: Array<[string, string]>
  details?: boolean
  codes?: string[]
}

interface SectionConfig {
  key: string
  solutions: SolutionConfig[]
}

const sections: SectionConfig[] = [
  { key: 'level0', solutions: [
    { badge: 'collect', badgeClass: 'type-collect', images: [['/images/levels/level-01-01.webp', 'Level 0 Ladder'], ['/images/levels/level-01-02.webp', 'Level 0 Key']] },
    { badge: 'puzzle', badgeClass: 'type-puzzle', images: [['/images/levels/level-01-03.webp', 'Level 0 Locker']] },
  ] },
  { key: 'level1', solutions: [
    { badge: 'color', badgeClass: 'type-color', images: [['/images/levels/level-02-01.webp', 'Level 1 Color Lock'], ['/images/levels/level-02-02.webp', 'Level 1 Colored Cars']] },
    { badge: 'key', badgeClass: 'type-key', images: [['/images/levels/level-02-03.webp', 'Level 1 Keys'], ['/images/levels/level-02-04.webp', 'Level 1 Vault Door']] },
    { badge: 'find', badgeClass: 'type-find', images: [['/images/levels/level-02-05.webp', 'Level 1 Elevator']] },
  ] },
  { key: 'level3', solutions: [
    { badge: 'code', badgeClass: 'type-code', images: [['/images/levels/level-05-01.webp', 'Level 3 Elevator'], ['/images/levels/level-05-02.webp', 'Level 3 Code']] },
    { badge: 'switch', badgeClass: 'type-switch', images: [['/images/levels/level-05-03.webp', 'Level 3 Fuse Box']] },
    { badge: 'switch', badgeClass: 'type-switch', images: [['/images/levels/level-05-04.webp', 'Level 3 Zone 2']] },
    { badge: 'wire', badgeClass: 'type-wire', details: true, images: [['/images/levels/level-05-05.webp', 'Level 3 Wire Puzzle']] },
  ] },
  { key: 'hub', solutions: [{ badge: 'password', badgeClass: 'type-code', images: [['/images/levels/level-03-01.webp', 'The Hub M.E.G. Base'], ['/images/levels/level-03-02.webp', 'The Hub Computer']] }] },
  { key: 'level4', solutions: [
    { badge: 'code', badgeClass: 'type-code', images: [['/images/levels/level-06-01.webp', 'Level 4 Elevator']] },
    { badge: 'count', badgeClass: 'type-count', images: [['/images/levels/level-06-02.webp', 'Level 4 Vending Machines'], ['/images/levels/level-06-03.webp', 'Level 4 Objects']] },
    { badge: 'stealth', badgeClass: 'type-stealth', images: [['/images/levels/level-06-04.webp', 'Level 4 Cameras']] },
  ] },
  { key: 'level5', solutions: [
    { badge: 'code', badgeClass: 'type-code', images: [['/images/levels/level-07-01.webp', 'Level 5 Elevator']] },
    { badge: 'puzzle', badgeClass: 'type-puzzle' },
    { badge: 'collect', badgeClass: 'type-collect' },
    { badge: 'password', badgeClass: 'type-code', codes: ['17564', '05938', '89472'] },
  ] },
  { key: 'level8', solutions: [{ badge: 'code', badgeClass: 'type-code', images: [['/images/levels/level-08.webp', 'Level 8 Elevator']] }] },
  { key: 'otherLevels', solutions: [{ badge: 'password', badgeClass: 'type-code' }, { badge: 'password', badgeClass: 'type-code' }] },
]

export default function CodesPage({ locale }: { locale: Locale }) {
  return (
    <div className="codes-solutions-view">
      <section className="page-hero"><div className="container"><div className="hero-content"><h1 className="page-title">{translate(locale, 'codesPage.hero.title')}</h1><p className="page-subtitle">{translate(locale, 'codesPage.hero.subtitle')}</p></div></div><AdPlacement /></section>
      <section className="solutions-content"><div className="container">
        {sections.map((section) => <div key={section.key} className="level-section">
          <h2 className="level-title">{translate(locale, `codesPage.levels.${section.key}.title`)}</h2>
          {section.solutions.map((solution, index) => { const solutionKey = `codesPage.levels.${section.key}.solution${index + 1}`; return <div className="solution-item" key={solutionKey}>
            <div className="solution-header"><h3 className="solution-title">{translate(locale, `${solutionKey}.title`)}</h3><span className={`solution-badge ${solution.badgeClass}`}>{translate(locale, `codesPage.badge.${solution.badge}`)}</span></div>
            <p className="solution-description" dangerouslySetInnerHTML={{ __html: translate(locale, `${solutionKey}.description`) }} />
            {solution.details && <div className="solution-details"><h4>{translate(locale, `${solutionKey}.details.triwayTitle`)}</h4><p dangerouslySetInnerHTML={{ __html: translate(locale, `${solutionKey}.details.triwayDescription`) }} /><h4>{translate(locale, `${solutionKey}.details.coloredWiresTitle`)}</h4><p dangerouslySetInnerHTML={{ __html: translate(locale, `${solutionKey}.details.coloredWiresDescription`) }} /></div>}
            {solution.images && <div className="solution-images">{solution.images.map(([src, alt]) => <img key={src} src={src} alt={alt} className="solution-img" loading="lazy" />)}</div>}
            {solution.codes && <ul className="solution-codes">{solution.codes.map((code) => <li key={code}><strong>{code}</strong></li>)}</ul>}
          </div> })}
          <AdPlacement />
        </div>)}
      </div></section>
    </div>
  )
}
