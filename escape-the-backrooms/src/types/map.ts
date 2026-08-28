import type { SeoRecord } from '@/types/seo'

export interface MapPoint {
  id?: number | string
  title: string
  content: string
  position?: string
}

export interface MapGalleryImage {
  src: string
  alt: string
  title: string
}

export interface MapSection {
  title: string
  imageUrl: string
  imageAlt: string
  mapPoints: MapPoint[]
  detailsHtml: string
  callouts?: Array<{ id: number; x: number; y: number }>
  width: number
  height: number
}

export interface MapEntry {
  id: number | string
  title: string
  addressBar: string
  description: string
  imageUrl?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  mapImageUrl?: string
  galleryImages?: MapGalleryImage[]
  mapSections?: MapSection[]
  category?: string
  tags?: string[]
  isHome?: boolean
  seo: SeoRecord
  mapPoints?: MapPoint[]
  detailsHtml: string
  introHtml?: string
}
