/** Last substantial editorial update for each public entity dossier. */
export const entityPageUpdatedAt = Object.freeze({
  wanderer: '2026-09-07',
  bacteria: '2026-09-07',
  'skin-stealer': '2026-09-07',
  smiler: '2026-09-07',
  hound: '2026-09-07',
  'male-deathmoth': '2026-09-07',
  'female-deathmoth': '2026-09-08',
  partygoer: '2026-09-07',
  scratcher: '2026-09-07',
  wretch: '2026-09-07',
  'mr-kitty': '2026-09-07',
})

export function getEntityPageUpdatedAt(addressBar) {
  return entityPageUpdatedAt[addressBar]
}
