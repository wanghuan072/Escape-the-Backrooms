import { AdPlacement } from '@/components/ads/AdPlacement'
import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import { getGames, getGamesCopy } from '@/lib/data/related-games'
import { localizedPath } from '@/lib/i18n/messages'
import { JsonLd } from '@/seo/json-ld'
import { siteConfig } from '@/config/site'
import type { Locale } from '@/types/locale'
import '@/style/page/related-games/related-games-page.module.css'

export default function RelatedGamesPage({ locale }: { locale: Locale }) {
  const games = getGames(locale)
  const featuredGame = games[0]
  const copy = getGamesCopy(locale)
  const listJsonLd = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: copy.listTitle, description: copy.listDescription,
    itemListElement: games.map((game, index) => ({ '@type': 'ListItem', position: index + 1, name: game.title, url: `${siteConfig.url}${localizedPath(`/backrooms-games/${game.addressBar}`, locale)}`, image: game.imageUrl })),
  }

  return (
    <div className="related-games-view">
      <JsonLd id="related-games-item-list-jsonld" data={listJsonLd} />
      <section className="page-hero related-hero"><div className="container"><div className="hero-copy"><span className="section-label">{copy.listLabel}</span><h1 className="page-title">{copy.listTitle}</h1><p className="page-subtitle">{copy.listDescription}</p></div></div></section>
      <AdPlacement className="container ad-container" />
      <section className="featured-related"><div className="container"><a href={localizedPath(`/backrooms-games/${featuredGame.addressBar}`, locale)} className="feature-card"><div className="feature-image"><IntrinsicImage src={featuredGame.capsuleImageUrl} alt={featuredGame.imageAlt} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" /><span>{featuredGame.fit}</span></div><div className="feature-copy"><span className="section-label">{featuredGame.category}</span><h2>{featuredGame.title}</h2><p className="lead">{featuredGame.listSummary}</p><div className="reason-list">{featuredGame.listReasons.map((reason) => <div key={reason}>{reason}</div>)}</div><dl className="fact-grid">{featuredGame.quickFacts.slice(0, 4).map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl><span className="read-more">{copy.readMore}</span></div></a></div></section>
      <section className="player-angle"><div className="container"><div className="section-heading"><span className="section-label">{copy.whyLabel}</span><h2>{copy.whyTitle}</h2><p>{copy.whyText}</p></div><div className="angle-grid">{featuredGame.comparisonRows.slice(0, 3).map((row) => <article key={row.aspect}><h3>{row.aspect}</h3><p>{row.takeaway}</p></article>)}</div></div></section>
    </div>
  )
}
