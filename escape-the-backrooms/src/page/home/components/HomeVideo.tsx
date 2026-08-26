'use client'

import { useState } from 'react'

export function HomeVideo({ title }: { title: string }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="hero-video"><div className="video-player">
      {!playing ? <div className="video-thumbnail" onClick={() => setPlaying(true)}><div className="play-button">▶</div></div> : <div className="video-iframe-container"><iframe src="https://www.youtube.com/embed/6xbnqo48K2c" title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video-frame" /><button className="close-video" onClick={() => setPlaying(false)} type="button">×</button></div>}
    </div></div>
  )
}
