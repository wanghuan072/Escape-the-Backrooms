/**
 * Last substantial editorial update for each public level guide.
 *
 * Keep this separate from YouTube metadata: a video upload date does not
 * describe when the written guide, structured data, or internal links changed.
 */
export const levelPageUpdatedAt = Object.freeze({
  1: '2026-09-07',
  2: '2026-09-07',
  3: '2026-09-07',
  4: '2026-09-07',
  5: '2026-09-07',
  6: '2026-09-07',
  7: '2026-09-07',
  8: '2026-09-07',
  9: '2026-09-07',
  10: '2026-09-07',
  11: '2026-09-07',
  12: '2026-09-07',
  13: '2026-09-07',
  14: '2026-09-07',
  15: '2026-09-07',
  16: '2026-09-07',
  17: '2026-09-07',
  19: '2026-09-07',
  20: '2026-09-07',
  21: '2026-09-07',
  22: '2026-09-07',
  23: '2026-09-07',
  24: '2026-09-07',
  25: '2026-09-07',
  26: '2026-09-07',
  27: '2026-09-07',
  28: '2026-09-07',
  29: '2026-09-07',
  30: '2026-09-07',
  31: '2026-09-07',
  32: '2026-09-07',
  33: '2026-09-07',
  34: '2026-09-07',
  35: '2026-09-07',
  36: '2026-09-07',
  37: '2026-09-07',
})

export function getLevelPageUpdatedAt(id) {
  return levelPageUpdatedAt[String(id)]
}
