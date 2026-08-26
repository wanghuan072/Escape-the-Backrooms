import type { SeoRecord } from '@/types/seo'

export interface RelatedGame {
  id: string
  addressBar: string
  title: string
  platform: string
  releaseDate: string
  developer: string
  publisher: string
  officialUrl: string
  coOpSourceUrl: string
  imageUrl: string
  imageAlt: string
  capsuleImageUrl: string
  mediaUrl: string
  wikiUrl: string
  levelsWikiUrl: string
  entitiesWikiUrl: string
  eyebrow: string
  category: string
  fit: string
  players: string
  sourceLabel: string
  coOpSourceLabel: string
  summary: string
  listSummary: string
  editorialVerdict: string
  whySimilar: string
  watchFor: string
  tags: string[]
  seo: SeoRecord
  quickFacts: Array<{ label: string; value: string }>
  listReasons: string[]
  comparisonRows: Array<{ aspect: string; escape: string; related: string; takeaway: string }>
  playerFit: { goodFor: string[]; notIdealFor: string[] }
  mechanics: Array<{ title: string; text: string }>
  detailSections: Array<{ heading: string; body: string[] }>
  practicalTips: Array<{ title: string; text: string }>
  sourceNotes: Array<{ label: string; text: string; url: string }>
  faq: Array<{ question: string; answer: string }>
}
