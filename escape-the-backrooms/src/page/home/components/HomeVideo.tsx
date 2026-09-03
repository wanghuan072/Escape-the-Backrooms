'use client'

import { useState } from 'react'

export function HomeVideo({ title, closeLabel }: { title: string; closeLabel: string }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="hero-video"><div className="video-player">
      {!playing ? <button className="video-thumbnail" onClick={() => setPlaying(true)} type="button" aria-label={title}><span className="play-button" aria-hidden="true">▶</span></button> : <div className="video-iframe-container"><iframe src="https://www.youtube.com/embed/6xbnqo48K2c" title={title} frameBorder="0" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video-frame" /><button className="close-video" onClick={() => setPlaying(false)} type="button" aria-label={closeLabel}>×</button></div>}
    </div></div>
  )
}
