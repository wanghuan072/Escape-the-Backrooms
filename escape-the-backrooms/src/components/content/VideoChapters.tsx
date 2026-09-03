'use client'

import type { YouTubeChapter } from '@/lib/data/youtube'

function formatTimestamp(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
}

export function VideoChapters({ chapters }: { chapters: readonly YouTubeChapter[] }) {
  function jumpToChapter(startSeconds: number) {
    const frame = document.getElementById('level-video-player') as HTMLIFrameElement | null
    if (!frame) return
    const url = new URL(frame.src)
    url.searchParams.set('start', String(startSeconds))
    url.searchParams.set('autoplay', '1')
    frame.src = url.toString()
    document.getElementById('video-guide')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <section className="video-chapters" aria-label="Video chapters">
    <div className="video-chapters-title">Video chapters</div>
    <div className="video-chapters-list">
      {chapters.map((chapter) => <button key={chapter.startSeconds} type="button" onClick={() => jumpToChapter(chapter.startSeconds)}><time dateTime={`PT${chapter.startSeconds}S`}>{formatTimestamp(chapter.startSeconds)}</time><span>{chapter.label}</span></button>)}
    </div>
  </section>
}
