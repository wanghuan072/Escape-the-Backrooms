import type { SeoRecord } from '@/types/seo'

export interface EntityEntry {
  id: number | string
  title: string
  name?: string
  addressBar: string
  slug?: string
  description: string
  imageUrl?: string
  imageAlt?: string
  dangerLevel?: string
  dangerClass?: string
  species?: string
  firstAppearsIn?: string
  tags?: string[]
  isHome?: boolean
  seo?: SeoRecord
  entityInfo?: Record<string, string | string[]>
  detailsHtml?: string
}
