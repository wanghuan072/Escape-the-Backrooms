import entities from '@/content/wiki/entities.js'
import type { EntityEntry } from '@/types/entity'
import type { Locale } from '@/types/locale'

const localizedSummaries: Record<Exclude<Locale, 'en'>, Record<number, Partial<EntityEntry>>> = {
  de: {
    1: { title: 'Wanderer', name: 'Wanderer', description: 'Menschen, die in den Backrooms gefangen sind und meist einen Schutzanzug tragen.', imageAlt: 'Wanderer in Escape the Backrooms', dangerLevel: 'Freundlich', species: 'Mensch', firstAppearsIn: 'Level 0', tags: ['Mensch', 'Spielerfigur', 'Schutzanzug'] },
    2: { title: 'Bacteria', name: 'Bacteria', description: 'Schwarze, drahtartige Humanoide, die Wanderer bei Sichtkontakt verfolgen.', imageAlt: 'Bacteria in Escape the Backrooms', dangerLevel: 'Mäßig', species: 'Bacteria', firstAppearsIn: 'Level 0', tags: ['Entity', 'Verfolgung', 'Bacteria'] },
    3: { title: 'Skin-Stealer', name: 'Skin-Stealer', description: 'Graue Humanoide, die die Haut eines Spielers stehlen und sich als Wanderer tarnen können.', imageAlt: 'Skin-Stealer in Escape the Backrooms', dangerLevel: 'Tödlich', species: 'Humanoid', firstAppearsIn: 'Level 1', tags: ['Entity', 'Tarnung', 'Skin-Stealer'] },
  },
  fr: {
    1: { title: 'Wanderer', name: 'Wanderer', description: 'Des humains piégés dans les Backrooms, généralement vêtus d’une combinaison de protection.', imageAlt: 'Wanderer dans Escape the Backrooms', dangerLevel: 'Amical', species: 'Humain', firstAppearsIn: 'Niveau 0', tags: ['Humain', 'Personnage joueur', 'Combinaison'] },
    2: { title: 'Bacteria', name: 'Bacteria', description: 'Des humanoïdes noirs au squelette filiforme qui poursuivent les Wanderers dès qu’ils les voient.', imageAlt: 'Bacteria dans Escape the Backrooms', dangerLevel: 'Modéré', species: 'Bacteria', firstAppearsIn: 'Niveau 0', tags: ['Entité', 'Poursuite', 'Bacteria'] },
    3: { title: 'Skin-Stealer', name: 'Skin-Stealer', description: 'Des humanoïdes gris capables de voler la peau d’un joueur et de se faire passer pour un Wanderer.', imageAlt: 'Skin-Stealer dans Escape the Backrooms', dangerLevel: 'Mortel', species: 'Humanoïde', firstAppearsIn: 'Niveau 1', tags: ['Entité', 'Déguisement', 'Skin-Stealer'] },
  },
  es: {
    1: { title: 'Errante', name: 'Errante', description: 'Seres humanos atrapados en los Backrooms, casi siempre vestidos con un traje de protección.', imageAlt: 'Errante en Escape the Backrooms', dangerLevel: 'Amistoso', species: 'Humano', firstAppearsIn: 'Nivel 0', tags: ['Humano', 'Personaje jugador', 'Traje protector'] },
    2: { title: 'Bacteria', name: 'Bacteria', description: 'Criaturas humanoides negras con un esqueleto de alambres que persiguen a los Errantes en cuanto los ven.', imageAlt: 'Bacteria en Escape the Backrooms', dangerLevel: 'Moderado', species: 'Bacteria', firstAppearsIn: 'Nivel 0', tags: ['Entidad', 'Persecución', 'Bacteria'] },
    3: { title: 'Ladrón de piel', name: 'Ladrón de piel', description: 'Entidades humanoides grises capaces de robar la piel de un jugador y hacerse pasar por un Errante.', imageAlt: 'Ladrón de piel en Escape the Backrooms', dangerLevel: 'Mortal', species: 'Humanoide', firstAppearsIn: 'Nivel 1', tags: ['Entidad', 'Disfraz', 'Ladrón de piel'] },
  },
}

export function getEntities(locale: Locale = 'en'): EntityEntry[] {
  const source = entities as EntityEntry[]
  if (locale === 'en') return source
  return source.map((entity) => ({ ...entity, ...localizedSummaries[locale][Number(entity.id)] }))
}
