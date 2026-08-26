import type { SeoRecord } from '@/types/seo'

export interface MapPoint {
  id?: number | string
  title: string
  content: string
  position?: string
}

export interface MapEntry {
  id: number | string
  title: string
  addressBar: string
  description: string
  imageUrl?: string
  imageAlt?: string
  mapImageUrl?: string
  category?: string
  tags?: string[]
  isHome?: boolean
  seo: SeoRecord
  mapPoints?: MapPoint[]
  detailsHtml: string
}
