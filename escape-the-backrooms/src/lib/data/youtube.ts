export interface YouTubeChapter {
  startSeconds: number
  label: string
}

interface YouTubeVideoMetadata {
  updatedAt: string
  durationSeconds: number
  chapters?: readonly YouTubeChapter[]
}

const videoMetadata: Record<string, YouTubeVideoMetadata> = {
  _ebQrXMMcb8: { updatedAt: '2026-01-18', durationSeconds: 169 },
  _q_HErkpw3M: { updatedAt: '2026-01-18', durationSeconds: 124 },
  '0hSXEPpTuH4': { updatedAt: '2026-06-15', durationSeconds: 95 },
  '2Giiy2ixJNw': { updatedAt: '2026-01-19', durationSeconds: 321 },
  '3FChsY_BfUs': { updatedAt: '2026-01-18', durationSeconds: 89 },
  '5IO2o0TgH5k': { updatedAt: '2026-01-18', durationSeconds: 132 },
  '6Ypd5PZsXBs': { updatedAt: '2026-01-18', durationSeconds: 75 },
  '7eDAm964Cv4': { updatedAt: '2026-01-18', durationSeconds: 208 },
  AN6K0M1pz1Y: { updatedAt: '2026-06-15', durationSeconds: 154 },
  ckxN2YKqFuQ: { updatedAt: '2026-01-18', durationSeconds: 232 },
  'd-Xwm5CY4tM': { updatedAt: '2026-06-14', durationSeconds: 197 },
  D223jekpV4Q: { updatedAt: '2026-06-14', durationSeconds: 626 },
  e9sJpWs4iYc: { updatedAt: '2026-01-18', durationSeconds: 403 },
  FDk9KG4pB4E: { updatedAt: '2026-01-18', durationSeconds: 219 },
  hDsXOxSmbLU: { updatedAt: '2026-01-18', durationSeconds: 279 },
  HGS4_EGr1m4: { updatedAt: '2026-01-19', durationSeconds: 70 },
  I3iu31tuNu0: { updatedAt: '2026-06-14', durationSeconds: 34 },
  'iC5-aFb7-ag': {
    updatedAt: '2026-01-18',
    durationSeconds: 191,
    chapters: [
      { startSeconds: 0, label: 'Version update and route overview' },
      { startSeconds: 33, label: 'Use the Right-Hand Rule from spawn' },
      { startSeconds: 45, label: 'Find all four ladder fragments' },
      { startSeconds: 79, label: 'Reach the exit door and avoid Bacteria' },
      { startSeconds: 98, label: 'Cross the Trap Room safely' },
      { startSeconds: 120, label: 'Rescue a fallen teammate with rope' },
      { startSeconds: 143, label: 'Solo recovery route and Bacteria behavior' },
      { startSeconds: 170, label: 'Set Gamma and collect the flashlight' },
    ],
  },
  JlcjsuhqqH8: { updatedAt: '2026-01-18', durationSeconds: 427 },
  kEZQ5NJM8sQ: { updatedAt: '2026-01-19', durationSeconds: 635 },
  LpiHcFB49Sk: { updatedAt: '2026-01-18', durationSeconds: 89 },
  LVHeNjt0XQ0: { updatedAt: '2026-01-19', durationSeconds: 740 },
  LysnApdBzxY: { updatedAt: '2026-06-14', durationSeconds: 309 },
  pkGEH8cdQZ4: { updatedAt: '2026-01-18', durationSeconds: 78 },
  PRsArou9ipY: { updatedAt: '2026-06-14', durationSeconds: 242 },
  sYQfhIlponU: { updatedAt: '2026-06-14', durationSeconds: 285 },
  tDD7YKWHY9Y: { updatedAt: '2026-06-14', durationSeconds: 64 },
  TvYjhNwfDSI: { updatedAt: '2026-01-19', durationSeconds: 317 },
  uGpIdqnQq8w: { updatedAt: '2026-06-15', durationSeconds: 739 },
  UNGLQ3pgFJM: { updatedAt: '2026-01-18', durationSeconds: 198 },
  VCNPh9_dLZI: { updatedAt: '2026-01-19', durationSeconds: 453 },
  W4WGueErhlI: { updatedAt: '2026-01-19', durationSeconds: 117 },
  WdizI7rFMso: { updatedAt: '2026-01-18', durationSeconds: 376 },
  xqjOhlKuGiw: { updatedAt: '2026-01-18', durationSeconds: 99 },
} as const

export interface YouTubeVideo {
  id: string
  url: string
  updatedAt: string
  durationSeconds: number
  chapters?: readonly YouTubeChapter[]
}

export function createGuideChapters(durationSeconds: number, headings: readonly string[]): readonly YouTubeChapter[] {
  const topics = headings.filter((heading) => heading.length > 2).slice(0, 6)
  if (!topics.length) return []

  return topics.map((label, index) => ({
    startSeconds: index === 0 ? 0 : Math.min(durationSeconds - 1, Math.round((durationSeconds * index) / topics.length)),
    label,
  }))
}

export function getYouTubeVideo(html: string): YouTubeVideo | undefined {
  const id = html.match(/youtube\.com\/embed\/([A-Za-z0-9_-]+)/)?.[1]
  if (!id || !(id in videoMetadata)) return undefined
  const metadata = videoMetadata[id]
  return { id, url: `https://www.youtube.com/watch?v=${id}`, ...metadata }
}
