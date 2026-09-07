import { getEntities } from '@/lib/data/entities'
import type { Locale } from '@/types/locale'

export type EntityModule = 'behaviorMechanics' | 'spawnPoints' | 'counterStrategy' | 'multiplayerDiff' | 'relatedEntities' | 'faq'

export interface EntityLevelAppearance {
  levelSlug: string
  role: string
  avoidance: string
  verifiedFor: string
}

export interface EntityRecord {
  aliases: string[]
  threatScore: 1 | 2 | 3 | 4 | 5
  type: Array<'chaser' | 'ambient' | 'interactive'>
  appearance: string
  behaviorSummary: string
  behaviorMechanics?: string
  spawnPoints?: Array<{ levelSlug: string; timing: string; location: string; routeEffect: string }>
  counterStrategy?: string
  multiplayerDiff?: string
  appearances: EntityLevelAppearance[]
  modules: readonly EntityModule[]
  uniqueModuleTitle: string
  uniqueModuleSummary: string
}

const records: Record<string, EntityRecord> = {
  wanderer: {
    aliases: ['Player character', 'Human survivor'],
    threatScore: 1,
    type: ['ambient'],
    appearance: 'A human survivor in a protective suit. In practical terms, the suit is less important than what it represents: another player may be carrying the route, the item, or the information the whole group needs.',
    behaviorSummary: 'The Wanderer is the player role. Its useful “mechanics” are coordination, inventory ownership, and route memory rather than combat or avoidance.',
    multiplayerDiff: 'Co-op adds capability, but it also distributes knowledge. A discovered item, a cleared room, or a changed route is only useful when it is made visible to the rest of the group.',
    appearances: [
      { levelSlug: 'level-0-the-lobby-Walkthrough', role: 'The player-controlled Wanderer establishes the first shared route and carries any items or landmarks the team has discovered.', avoidance: 'This is not a hostile encounter. In co-op, call the last confirmed landmark before anyone leaves the group so the route does not disappear with one player.', verifiedFor: 'Current guide route' },
      { levelSlug: 'level-1-the-habitable-zone-Walkthrough', role: 'Split searches make the player character part of the level’s information problem: one Wanderer may hold the key, route, or floor call the group needs.', avoidance: 'Choose a regrouping door before splitting and say who is carrying each progression item. That also makes a false reunion with a Skin-Stealer easier to spot.', verifiedFor: 'Current guide route' },
    ],
    modules: ['multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'The information-carrying player',
    uniqueModuleSummary: 'Wanderer is deliberately not written as a hostile creature dossier. Its unique value is explaining why a group loses progress even when nobody dies: the route, item ownership, and last confirmed landmark were never handed from one player to another.',
  },
  bacteria: {
    aliases: ['Howler', 'Level 0 entity'],
    threatScore: 3,
    type: ['chaser'],
    appearance: 'A dark wire-like humanoid with a heavy, uneven silhouette. The visual read matters less than the sound and the corridor geometry around it.',
    behaviorSummary: 'A pursuit threat that turns navigation into a line-of-sight problem. In the documented Level 0 encounter it appears after time has passed; later routes require a usable shelter instead of a long sprint.',
    behaviorMechanics: 'Treat the encounter as a visibility problem. Sound tells you to slow down; the next turn, doorway, room, or shelter is what actually changes the outcome. A long corridor is not a countermeasure.',
    spawnPoints: [
      { levelSlug: 'level-0-the-lobby-Walkthrough', timing: 'After the opening period', location: 'The Level 0 yellow-room route', routeEffect: 'Keep a return turn in mind before searching deep branches; the route becomes less forgiving once the encounter can begin.' },
      { levelSlug: 'escape-the-backrooms-level-0-11-guide', timing: 'During the damaged-route progression', location: 'Water Damage corridors and objective rooms', routeEffect: 'Locate a vent, door, or fallback room before committing to the chainsaw route or a timed lever attempt.' },
    ],
    counterStrategy: 'Do not plan to defeat Bacteria with an item. Break the encounter with layout: use turns in Level 0, then use the actual shelter available in the later route. Resume only after naming the interrupted objective.',
    multiplayerDiff: 'The group should not all outrun the same doorway. One clear direction call and one shared fallback keep routes open; a crowd at a single door often removes everyone’s safe option.',
    appearances: [
      { levelSlug: 'level-0-the-lobby-Walkthrough', role: 'Bacteria enters after the opening period and turns the yellow corridors into a line-of-sight chase. Its knocking can tempt players away from the ladder route.', avoidance: 'Do not follow the knocking. Turn through connected rooms to break sight, keep moving until the howl fades, and avoid committing to a long dead-straight corridor.', verifiedFor: 'Current guide route' },
      { levelSlug: 'escape-the-backrooms-level-0-11-guide', role: 'A faster roaming Bacteria can cut across the chainsaw search and the four-lever shutter attempt.', avoidance: 'Find a vent or closable room before starting an objective. Do not fight it with the chainsaw; abandon the timer, hide fully inside the fallback, then restart the unfinished lever call.', verifiedFor: 'Current guide route' },
      { levelSlug: 'escape-the-backrooms-level-55-1-guide', role: 'The lower photography route uses a triggered Bacteria encounter. Crossing the upper observation walkway can activate it, so an empty spawn hall is not proof that the route is clear.', avoidance: 'Keep the nearest locker and the raised elevator in mind before crossing the trigger area. Take the required photograph from space, then break pursuit with the locker or lift instead of racing it down the corridor.', verifiedFor: 'Current guide route and objective sequence' },
      { levelSlug: 'escape-the-backrooms-level-2-graffiti-guide', role: 'Bacteria patrols pressure the long NPC carries between the outer routes and the four tube holes.', avoidance: 'Pick up the speed drink before leaving the plaza and save it for a loaded return trip. If a patrol blocks the clean line home, keep the carry moving through open space rather than turning repeatedly with an NPC in hand.', verifiedFor: 'Current guide route and carry sequence' },
    ],
    modules: ['behaviorMechanics', 'spawnPoints', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'A map problem disguised as a chase',
    uniqueModuleSummary: 'Bacteria is not a “run faster” test. Its page should help a player read the next room before the chase begins: which turn breaks sight, which door remains usable, and which task should be abandoned rather than forced.',
  },
  'skin-stealer': {
    aliases: ['Skinstealer', 'Disguised pursuer'],
    threatScore: 5,
    type: ['chaser'],
    appearance: 'A grey humanoid threat, sometimes signalled by bright eye-light or an untrusted human-shaped silhouette. Visual identification alone is intentionally unreliable in a co-op run.',
    behaviorSummary: 'A pursuit threat whose danger comes from false trust. The stable answer is a verification habit plus a door or level-specific hiding resource—not a debate in a hallway.',
    behaviorMechanics: 'The important mechanic is not perfect visual identification. A possible teammate becomes trustworthy only after they meet the group’s simple check-in rule. Until then, keep distance and route toward a door.',
    counterStrategy: 'A closed door is the baseline escape tool. In the Hotel, beds and closets add recovery choices; in the Cave System, a reversible route toward known space is safer than a blind run into another tunnel.',
    multiplayerDiff: 'Agree on a short reunion protocol before splitting: location first, then the agreed item or ID. The purpose is speed, not role-play—players need a decision before an unknown silhouette reaches them.',
    appearances: [
      { levelSlug: 'level-1-the-habitable-zone-Walkthrough', role: 'Skin-Stealer makes reunions on the upper floors unreliable because a human-shaped figure can approach as if it belongs to the group.', avoidance: 'Use the same short ID check after every split. If a figure runs straight at you or ignores the check, back through the nearest door and close it before regrouping.', verifiedFor: 'Current guide route' },
      { levelSlug: 'level-5-terror-hotel-Walkthrough', role: 'It patrols while the group searches guest rooms for papers, turning every opened room into a possible escape resource or a trap.', avoidance: 'Before searching the next room, note its door, bed, or closet. Close the door behind a chase or hide inside the room; do not lead it through the entire paper route.', verifiedFor: 'Current guide route' },
      { levelSlug: 'level-8-cave-system-walkthrough', role: 'The cave variant closes distance more aggressively, while corners and narrow tunnels make an unknown light or silhouette difficult to verify.', avoidance: 'Keep a reversible path toward the start or the valve route. Do not chase a distant flashlight into an unexplored tunnel; retreat through known space and use the route’s closing mechanism when available.', verifiedFor: 'Current guide route' },
      { levelSlug: 'escape-the-backrooms-level-55-1-guide', role: 'A slow Skin-Stealer appears as one of the photography targets in the lower route after the Smiler objective.', avoidance: 'Create distance long enough to take the photograph, then step into a nearby locker. Its slower movement here gives you time, but standing in the hall to frame a perfect shot still wastes that advantage.', verifiedFor: 'Current guide route and objective sequence' },
    ],
    modules: ['behaviorMechanics', 'counterStrategy', 'multiplayerDiff', 'relatedEntities', 'faq'],
    uniqueModuleTitle: 'Verification before recognition',
    uniqueModuleSummary: 'The Skin-Stealer page is about replacing visual guesswork with a team protocol. In a good run, players do not wait for a perfect look at a silhouette; they use an agreed check, a named retreat, and a closed door.',
  },
}

type AppearanceCopy = Pick<EntityLevelAppearance, 'role' | 'avoidance'>

const localizedAppearanceCopy: Record<Exclude<Locale, 'en'>, Record<string, Record<string, AppearanceCopy>>> = {
  de: {
    wanderer: {
      'level-0-the-lobby-Walkthrough': { role: 'Der spielbare Wanderer legt die erste gemeinsame Route fest und trägt Gegenstände oder Wegpunkte, die das Team bereits gefunden hat.', avoidance: 'Dies ist keine feindliche Begegnung. Nennt im Mehrspielermodus den letzten sicheren Wegpunkt, bevor sich jemand entfernt, damit die Route nicht mit einer Person verloren geht.' },
      'level-1-the-habitable-zone-Walkthrough': { role: 'Bei der getrennten Suche wird die Spielfigur selbst zum Teil des Informationsproblems: Ein Wanderer kann den Schlüssel, den Weg oder den nötigen Etagenhinweis tragen.', avoidance: 'Legt vor der Trennung eine Tür als Treffpunkt fest und sagt an, wer welchen Fortschrittsgegenstand trägt. Dadurch fällt auch ein falsches Wiedersehen mit einem Skin-Stealer schneller auf.' },
    },
    bacteria: {
      'level-0-the-lobby-Walkthrough': { role: 'Bacteria erscheint nach der Anfangsphase und macht aus den gelben Korridoren eine Verfolgung auf Sicht. Das Klopfen kann euch von der Leiterroute weglocken.', avoidance: 'Folgt dem Klopfen nicht. Brecht die Sichtlinie über verbundene Räume, bleibt in Bewegung, bis das Heulen verstummt, und meidet lange, schnurgerade Korridore.' },
      'escape-the-backrooms-level-0-11-guide': { role: 'Eine schnellere, umherstreifende Bacteria kann sowohl die Kettensägensuche als auch den Versuch an den vier Hebeln unterbrechen.', avoidance: 'Sucht vor dem Start einer Aufgabe einen Lüftungsschacht oder einen abschließbaren Raum. Greift sie nicht mit der Kettensäge an: Brecht den Timer ab, versteckt euch vollständig und startet die fehlende Hebelansage neu.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'Auf der unteren Foto-Route wird Bacteria durch einen Bereichstrigger aktiviert. Der leere Gang ist keine Entwarnung, denn das Überqueren des oberen Laufstegs kann sie erst erscheinen lassen.', avoidance: 'Merkt euch vor dem Trigger den nächsten Spind und den hochgefahrenen Aufzug. Fotografiert mit Abstand und beendet die Verfolgung im Spind oder auf der Hebebühne, statt im Korridor um die Wette zu laufen.' },
      'escape-the-backrooms-level-2-graffiti-guide': { role: 'Bacteria-Patrouillen setzen die langen Transporte der NPCs zwischen den Außenwegen und den vier Röhrenöffnungen unter Druck.', avoidance: 'Nehmt das Tempo-Getränk am Platz mit und spart es für den Rückweg mit einem getragenen NPC. Blockiert eine Patrouille den direkten Weg, bleibt in offenem Raum in Bewegung, statt mit der Last ständig zu wenden.' },
    },
    'skin-stealer': {
      'level-1-the-habitable-zone-Walkthrough': { role: 'Der Skin-Stealer macht Wiedersehen in den oberen Etagen unsicher, weil sich eine menschliche Silhouette so nähern kann, als gehörte sie zur Gruppe.', avoidance: 'Verwendet nach jeder Trennung denselben kurzen Ausweis-Check. Rennt eine Gestalt direkt auf euch zu oder ignoriert sie den Check, geht durch die nächste Tür zurück und schließt sie vor dem Sammeln.' },
      'level-5-terror-hotel-Walkthrough': { role: 'Er patrouilliert, während die Gruppe Gästezimmer nach Papieren durchsucht. Dadurch wird jeder geöffnete Raum entweder zum Fluchtmittel oder zur Falle.', avoidance: 'Merkt euch vor dem nächsten Zimmer Tür, Bett und Schrank. Schließt bei einer Verfolgung die Tür oder versteckt euch im Zimmer, statt den Skin-Stealer durch die ganze Papiersuche zu ziehen.' },
      'level-8-cave-system-walkthrough': { role: 'Die Höhlenvariante schließt schneller auf; Kurven und enge Tunnel machen ein unbekanntes Licht oder eine Silhouette schwer überprüfbar.', avoidance: 'Haltet einen umkehrbaren Weg zum Start oder zur Ventilroute offen. Folgt keiner fernen Taschenlampe in einen unbekannten Tunnel, sondern zieht euch durch bereits erkundeten Raum zurück.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'Nach dem Smiler erscheint ein langsamer Skin-Stealer als eines der Fotoziele auf der unteren Route.', avoidance: 'Schafft genug Abstand für das Foto und geht danach in einen nahen Spind. Seine geringere Geschwindigkeit hilft hier, aber ein perfekter Bildausschnitt mitten im Gang verschenkt diesen Vorteil.' },
    },
  },
  fr: {
    wanderer: {
      'level-0-the-lobby-Walkthrough': { role: 'Le Wanderer contrôlé par le joueur établit le premier itinéraire commun et transporte les objets ou les repères déjà découverts par l’équipe.', avoidance: 'Ce n’est pas une rencontre hostile. En coopération, annoncez le dernier repère confirmé avant de vous séparer, sinon l’itinéraire peut disparaître avec un seul joueur.' },
      'level-1-the-habitable-zone-Walkthrough': { role: 'Les recherches séparées font du personnage une partie du problème : un Wanderer peut détenir la clé, l’itinéraire ou l’information d’étage nécessaire au groupe.', avoidance: 'Choisissez une porte de regroupement avant de vous séparer et annoncez qui porte chaque objet de progression. Cette habitude aide aussi à repérer un faux retour avec un Skin-Stealer.' },
    },
    bacteria: {
      'level-0-the-lobby-Walkthrough': { role: 'Bacteria arrive après le début du niveau et transforme les couloirs jaunes en poursuite fondée sur la ligne de vue. Ses coups peuvent vous éloigner de l’itinéraire de l’échelle.', avoidance: 'Ne suivez pas les coups. Cassez la ligne de vue en traversant les pièces reliées, continuez jusqu’à ce que le hurlement cesse et évitez les longs couloirs parfaitement droits.' },
      'escape-the-backrooms-level-0-11-guide': { role: 'Une Bacteria plus rapide peut couper la recherche à la tronçonneuse et interrompre la séquence chronométrée des quatre leviers.', avoidance: 'Repérez une bouche d’aération ou une pièce qui ferme avant de lancer l’objectif. N’utilisez pas la tronçonneuse contre elle : abandonnez le chrono, cachez-vous entièrement, puis reprenez l’appel des leviers manquants.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'La route photo du niveau inférieur déclenche Bacteria par zone. Un couloir vide ne garantit rien : le passage sur la coursive supérieure peut seulement alors la faire apparaître.', avoidance: 'Repérez le casier le plus proche et l’ascenseur relevé avant de franchir la zone. Prenez la photo à distance, puis cassez la poursuite avec le casier ou la plateforme au lieu de courir en ligne droite.' },
      'escape-the-backrooms-level-2-graffiti-guide': { role: 'Les patrouilles de Bacteria mettent la pression sur les longs trajets où vous rapportez les PNJ vers les quatre ouvertures de tubes.', avoidance: 'Prenez la boisson de vitesse avant de quitter la place et gardez-la pour un retour avec un PNJ. Si une patrouille coupe la ligne directe, restez en mouvement dans l’espace ouvert plutôt que de multiplier les demi-tours avec votre charge.' },
    },
    'skin-stealer': {
      'level-1-the-habitable-zone-Walkthrough': { role: 'Le Skin-Stealer rend les retrouvailles aux étages supérieurs incertaines : une silhouette humaine peut s’approcher comme si elle appartenait au groupe.', avoidance: 'Gardez le même contrôle d’identité après chaque séparation. Si une silhouette fonce sur vous ou ignore le contrôle, reculez par la porte la plus proche et fermez-la avant de vous regrouper.' },
      'level-5-terror-hotel-Walkthrough': { role: 'Il patrouille pendant que le groupe fouille les chambres à la recherche des feuilles, si bien que chaque pièce ouverte devient soit un refuge, soit un piège.', avoidance: 'Avant la prochaine chambre, repérez sa porte, son lit ou son placard. Fermez la porte pendant la poursuite ou cachez-vous dans la chambre au lieu de l’entraîner sur tout l’itinéraire.' },
      'level-8-cave-system-walkthrough': { role: 'La variante des grottes rattrape plus vite le joueur, tandis que les virages et tunnels étroits rendent une lumière ou une silhouette difficile à identifier.', avoidance: 'Gardez un chemin réversible vers le départ ou la route de la vanne. Ne suivez pas une lampe lointaine dans un tunnel inconnu ; repliez-vous par une zone déjà reconnue.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'Un Skin-Stealer lent apparaît comme cible photo sur la route inférieure, juste après l’objectif du Smiler.', avoidance: 'Créez assez d’espace pour prendre la photo, puis entrez dans un casier proche. Sa lenteur vous donne du temps, mais chercher le cadrage parfait au milieu du couloir annule cet avantage.' },
    },
  },
  es: {
    wanderer: {
      'level-0-the-lobby-Walkthrough': { role: 'El Wanderer controlado por el jugador establece la primera ruta compartida y lleva los objetos o referencias que el equipo ya ha encontrado.', avoidance: 'No es un encuentro hostil. En cooperativo, decid cuál fue la última referencia confirmada antes de separaros para que la ruta no se pierda con un solo jugador.' },
      'level-1-the-habitable-zone-Walkthrough': { role: 'Al registrar zonas por separado, el personaje pasa a formar parte del problema de información: un Wanderer puede tener la llave, la ruta o el dato de planta que necesita el grupo.', avoidance: 'Acordad una puerta de reunión antes de separaros y decid quién lleva cada objeto de progreso. Así también resulta más fácil detectar un falso reencuentro con un Skin-Stealer.' },
    },
    bacteria: {
      'level-0-the-lobby-Walkthrough': { role: 'Bacteria aparece tras la fase inicial y convierte los pasillos amarillos en una persecución basada en la línea de visión. Sus golpes pueden atraeros lejos de la ruta de la escalera.', avoidance: 'No sigáis los golpes. Romped la visión atravesando habitaciones conectadas, seguid avanzando hasta que el aullido se apague y evitad los pasillos largos y completamente rectos.' },
      'escape-the-backrooms-level-0-11-guide': { role: 'Una Bacteria más rápida puede cruzarse durante la búsqueda con la motosierra e interrumpir el intento cronometrado de las cuatro palancas.', avoidance: 'Localizad un conducto o una habitación que pueda cerrarse antes de iniciar el objetivo. No uséis la motosierra contra ella: abandonad el temporizador, escondeos por completo y reiniciad la coordinación de las palancas pendientes.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'La ruta fotográfica inferior activa a Bacteria al cruzar una zona concreta. Un pasillo vacío no significa que sea seguro: pasar por la pasarela superior puede hacer que aparezca.', avoidance: 'Recordad el armario más cercano y el ascensor elevado antes de activar la zona. Sacad la foto con distancia y cortad la persecución en el armario o la plataforma, en vez de competir con ella por el pasillo.' },
      'escape-the-backrooms-level-2-graffiti-guide': { role: 'Las patrullas de Bacteria presionan los largos traslados de PNJ entre las rutas exteriores y los cuatro huecos de los tubos.', avoidance: 'Recoged la bebida de velocidad antes de salir de la plaza y guardadla para el regreso con un PNJ. Si una patrulla corta la línea directa, manteneos en movimiento por el espacio abierto en vez de girar una y otra vez con la carga.' },
    },
    'skin-stealer': {
      'level-1-the-habitable-zone-Walkthrough': { role: 'Skin-Stealer vuelve poco fiables los reencuentros en las plantas superiores, ya que una silueta humana puede acercarse como si fuera parte del grupo.', avoidance: 'Usad la misma comprobación breve de identidad después de cada separación. Si una figura corre directamente hacia vosotros o ignora la señal, retroceded por la puerta más cercana y cerradla antes de reuniros.' },
      'level-5-terror-hotel-Walkthrough': { role: 'Patrulla mientras el grupo registra las habitaciones en busca de papeles; cada habitación abierta puede convertirse en una vía de escape o en una trampa.', avoidance: 'Antes de entrar en la siguiente habitación, localizad la puerta, la cama o el armario. Cerrad la puerta durante la persecución o escondeos dentro; no lo llevéis por toda la ruta de papeles.' },
      'level-8-cave-system-walkthrough': { role: 'La variante de las cuevas recorta distancia con más agresividad, y los giros y túneles estrechos dificultan comprobar una luz o silueta desconocida.', avoidance: 'Mantened una ruta reversible hacia el inicio o la válvula. No sigáis una linterna lejana por un túnel sin explorar; retroceded por terreno conocido y usad el cierre de la ruta cuando esté disponible.' },
      'escape-the-backrooms-level-55-1-guide': { role: 'Un Skin-Stealer lento aparece como uno de los objetivos fotográficos de la ruta inferior después del Smiler.', avoidance: 'Cread distancia suficiente para sacar la foto y entrad después en un armario cercano. Aquí se mueve más despacio, pero buscar un encuadre perfecto en medio del pasillo desperdicia esa ventaja.' },
    },
  },
}

export function getEntityRecord(addressBar: string): EntityRecord | undefined { return records[addressBar] }

export function getEntityAppearances(locale: Locale, addressBar: string): EntityLevelAppearance[] {
  const appearances = records[addressBar]?.appearances ?? []
  if (locale === 'en') return appearances
  return appearances.map((appearance) => ({
    ...appearance,
    ...(localizedAppearanceCopy[locale][addressBar]?.[appearance.levelSlug] ?? {}),
  }))
}

export function getEntitiesForLevel(locale: Locale, levelSlug: string) {
  return getEntities(locale).flatMap((entity) => {
    const record = records[entity.addressBar]
    const appearance = getEntityAppearances(locale, entity.addressBar).find((entry) => entry.levelSlug === levelSlug)
    return appearance ? [{ entity, appearance, record }] : []
  })
}

export function getRelatedEntityRecords(locale: Locale, addressBar: string) {
  const current = records[addressBar]
  if (!current) return []
  return getEntities(locale).filter((entity) => entity.addressBar !== addressBar && records[entity.addressBar]).map((entity) => ({ entity, record: records[entity.addressBar] }))
}
