import type { SeoRecord } from '@/types/seo'

export interface FeaturedLink {
  title: string
  addressBar: string
  description?: string
  imageUrl?: string
}

export interface LevelEntry {
  id: number | string
  title: string
  pageTitle?: string
  quote?: string
  quoteBy?: string
  survivalDifficulty?: string
  sanityDanger?: string
  addressBar: string
  description: string
  imageUrl?: string
  imageAlt?: string
  category?: string
  tags?: string[]
  isHome?: boolean
  sideBarInfo?: Record<string, string>
  featured?: FeaturedLink[]
  seo: SeoRecord
  detailsHtml: string
}
