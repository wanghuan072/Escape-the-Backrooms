import { mapLevelRelations } from '@/content/map-level-relations.js'
import { getLevels } from '@/lib/data/levels'
import { getMaps } from '@/lib/data/maps'
import type { LevelEntry } from '@/types/level'
import type { Locale } from '@/types/locale'
import type { MapEntry } from '@/types/map'

export interface MapLevelRelation {
  levelIds: readonly (string | number)[]
  levelLinkParagraph: number
  mapLinkParagraph: number
}

const relations = mapLevelRelations as Record<string | number, MapLevelRelation>

export function getMapLevelRelation(mapId: string | number): MapLevelRelation | undefined {
  return relations[mapId]
}

export function getMapsForLevel(locale: Locale, levelId: string | number): MapEntry[] {
  return getMaps(locale).filter((map) => relations[map.id]?.levelIds.includes(levelId))
}

export function getLevelsForMap(locale: Locale, mapId: string | number): LevelEntry[] {
  const relatedLevelIds = relations[mapId]?.levelIds ?? []
  return getLevels(locale).filter((level) => relatedLevelIds.includes(level.id))
}
