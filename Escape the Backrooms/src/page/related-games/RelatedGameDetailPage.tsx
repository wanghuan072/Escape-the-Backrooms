import { AdPlacement } from '@/components/ads/AdPlacement'
import { getGamesCopy } from '@/lib/data/related-games'
import { localizedPath } from '@/lib/i18n/messages'
import { JsonLd, pageJsonLd } from '@/seo/json-ld'
import { siteConfig } from '@/config/site'
import type { Locale } from '@/types/locale'
import type { RelatedGame } from '@/types/related-game'
import '@/style/page/related-games/related-game-detail-page.module.css'

export default function RelatedGameDetailPage({ locale, game }: { locale: Locale; game: RelatedGame }) {
  const copy = getGamesCopy(locale)
  const url = `${siteConfig.url}${localizedPath(`/backrooms-games/${game.addressBar}`, locale)}`
  const articleJsonLd = {
    ...pageJsonLd(game.seo.title, game.seo.description, url, 'Article'),
    headline: copy.detailTitle, about: game.tags, citation: game.sourceNotes.map((source) => source.url), image: game.imageUrl,
  }
  return (
    <div className="related-game-detail-view">
      <JsonLd data={articleJsonLd} />
      <section className="page-hero detail-hero"><div className="container"><div className="hero-layout"><div className="hero-copy"><a href={localizedPath('/backrooms-games', locale)} className="back-link">{copy.backLink}</a><span className="section-label">{game.eyebrow}</span><h1 className="page-title">{copy.detailTitle}</h1><p className="page-subtitle">{game.editorialVerdict}</p></div><figure className="hero-media"><img src={game.imageUrl} alt={game.imageAlt} /><figcaption>{copy.heroCaption}</figcaption></figure></div></div></section>
      <AdPlacement className="container ad-container" />
      <section className="article-section"><div className="container article-layout">
        <main className="article-main">
          <section className="media-panel"><div className="media-image"><img src={game.capsuleImageUrl} alt={game.imageAlt} loading="lazy" /></div><div className="media-copy"><span className="section-label">{copy.playerVerdict}</span><h2>{game.fit}</h2><p>{game.summary}</p><div className="media-actions"><a href={game.officialUrl} target="_blank" rel="noopener noreferrer nofollow">{copy.steamPage}</a><a href={game.wikiUrl} target="_blank" rel="noopener noreferrer nofollow">{copy.wikiHub}</a><a href={game.mediaUrl} target="_blank" rel="noopener noreferrer nofollow">{copy.steamMedia}</a></div></div></section>
          <section className="intro-panel"><h2>{copy.whyCompare}</h2><p>{game.whySimilar}</p><p>{game.watchFor}</p></section>
          <section className="analysis-section">{game.detailSections.map((section) => <article key={section.heading} className="analysis-block"><h2>{section.heading}</h2>{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>)}</section>
          <AdPlacement className="container ad-container inline-ad" />
          <section className="comparison-section"><div className="section-heading"><span className="section-label">{copy.playerComparison}</span><h2>{copy.comparisonTitle}</h2></div><div className="comparison-table" role="table" aria-label={copy.comparisonAria}><div className="comparison-row comparison-head" role="row"><div role="columnheader">{copy.aspect}</div><div role="columnheader">{copy.escapeColumn}</div><div role="columnheader">{copy.relatedColumn}</div><div role="columnheader">{copy.takeawayColumn}</div></div>{game.comparisonRows.map((row) => <div key={row.aspect} className="comparison-row" role="row"><div role="cell" className="aspect-cell">{row.aspect}</div><div role="cell">{row.escape}</div><div role="cell">{row.related}</div><div role="cell" className="takeaway-cell">{row.takeaway}</div></div>)}</div></section>
          <section className="fit-section"><div className="fit-column"><h2>{copy.goodFit}</h2><ul>{game.playerFit.goodFor.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="fit-column"><h2>{copy.notIdeal}</h2><ul>{game.playerFit.notIdealFor.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
          <section className="tips-section"><span className="section-label">{copy.practicalNotes}</span><h2>{copy.practicalTitle}</h2><div className="tips-grid">{game.practicalTips.map((tip) => <article key={tip.title} className="tip-item"><h3>{tip.title}</h3><p>{tip.text}</p></article>)}</div></section>
          <section className="mechanics-section"><span className="section-label">{copy.gameplaySystems}</span><h2>{copy.mechanicsTitle}</h2><div className="mechanics-list">{game.mechanics.map((mechanic) => <article key={mechanic.title}><h3>{mechanic.title}</h3><p>{mechanic.text}</p></article>)}</div></section>
          <section className="reference-section"><span className="section-label">{copy.referencesLabel}</span><h2>{copy.referencesTitle}</h2><div className="reference-grid"><a href={game.wikiUrl} target="_blank" rel="noopener noreferrer nofollow"><strong>{copy.wikiReference}</strong><span>{copy.wikiReferenceText}</span></a><a href={game.levelsWikiUrl} target="_blank" rel="noopener noreferrer nofollow"><strong>{copy.levelsReference}</strong><span>{copy.levelsReferenceText}</span></a><a href={game.entitiesWikiUrl} target="_blank" rel="noopener noreferrer nofollow"><strong>{copy.entitiesReference}</strong><span>{copy.entitiesReferenceText}</span></a></div></section>
          <section className="faq-section"><span className="section-label">{copy.faqLabel}</span><h2>{copy.faqTitle}</h2>{game.faq.map((item) => <article key={item.question} className="faq-item"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</section>
        </main>
        <aside className="article-sidebar">
          <section className="side-panel"><h2>{copy.gameFacts}</h2><dl>{game.quickFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}<div><dt>{copy.developer}</dt><dd>{game.developer}</dd></div><div><dt>{copy.publisher}</dt><dd>{game.publisher}</dd></div><div><dt>{copy.release}</dt><dd>{game.releaseDate}</dd></div></dl></section>
          <AdPlacement className="container ad-container side-ad" />
          <section className="side-panel"><h2>{copy.sourcesChecked}</h2>{game.sourceNotes.map((source) => <div key={source.url} className="source-note"><h3>{source.label}</h3><p>{source.text}</p><a href={source.url} target="_blank" rel="noopener noreferrer nofollow">{copy.openSource}</a></div>)}</section>
          <section className="side-panel"><h2>{copy.media}</h2><img className="side-image" src={game.imageUrl} alt={game.imageAlt} loading="lazy" /><p>{copy.mediaText}</p><a href={game.mediaUrl} target="_blank" rel="noopener noreferrer nofollow">{copy.openSteamMedia}</a></section>
          <section className="side-panel"><h2>{copy.officialPage}</h2><p>{copy.officialText}</p><a className="official-link" href={game.officialUrl} target="_blank" rel="noopener noreferrer nofollow">{copy.visitSource} {game.sourceLabel}</a></section>
        </aside>
      </div></section>
    </div>
  )
}
