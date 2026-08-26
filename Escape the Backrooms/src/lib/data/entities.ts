import entities from '@/content/wiki/entities.js'
import type { EntityEntry } from '@/types/entity'

export function getEntities(): EntityEntry[] {
  return entities as EntityEntry[]
}
