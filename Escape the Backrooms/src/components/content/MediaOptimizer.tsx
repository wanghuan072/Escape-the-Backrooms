'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function MediaOptimizer() {
  const pathname = usePathname()

  useEffect(() => {
    const optimize = () => {
      document.querySelectorAll<HTMLImageElement>('.v-html-style img').forEach((image) => {
        if (!image.hasAttribute('loading')) image.loading = 'lazy'
        if (!image.hasAttribute('decoding')) image.decoding = 'async'
      })
      document.querySelectorAll<HTMLIFrameElement>('.v-html-style iframe').forEach((frame) => {
        if (!frame.hasAttribute('loading')) frame.loading = 'lazy'
      })
    }
    optimize()
    const observer = new MutationObserver(optimize)
    const main = document.querySelector('main')
    if (main) observer.observe(main, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [pathname])

  return null
}
