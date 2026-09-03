'use client'

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { GPT_UNITS } from '@/config/ads'
import '@/style/ads/gpt-ad-slot.module.css'

const BannerSequenceContext = createContext<() => 1 | 2 | 3>(() => 1)
const bannerSlots = new Map<string, GptSlot>()

function getGpt(): GptApi {
  return window.googletag as GptApi
}

function queueGpt(callback: (googletag: GptApi) => void) {
  window.googletag = window.googletag || { cmd: [] }
  window.googletag.cmd.push(() => {
    const googletag = getGpt()
    if (!window.__gptServicesEnabled) {
      googletag.setConfig({ centering: true, disableInitialLoad: true, singleRequest: true })
      googletag.enableServices()
      window.__gptServicesEnabled = true
    }
    callback(googletag)
  })
}

function stripLocale(pathname: string) {
  return pathname.replace(/^\/(de|fr|es)(?=\/|$)/, '') || '/'
}

function pageScope(pathname: string): 'home' | 'post' {
  return stripLocale(pathname) === '/' ? 'home' : 'post'
}

export function AdRuntime({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const sequence = useRef(0)
  useEffect(() => { sequence.current = 0 }, [pathname])
  const nextUnit = useCallback((): 1 | 2 | 3 => {
    sequence.current = sequence.current >= 3 ? 1 : sequence.current + 1
    return sequence.current as 1 | 2 | 3
  }, [])

  return (
    <BannerSequenceContext.Provider value={nextUnit}>
      <OutOfPageAds pathname={pathname} />
      {children}
    </BannerSequenceContext.Provider>
  )
}

export function GptAdSlot({ unit, horizontal = false, hideOnMobile = false }: { unit?: 1 | 2 | 3; horizontal?: boolean; hideOnMobile?: boolean }) {
  const pathname = usePathname()
  const nextUnit = useContext(BannerSequenceContext)
  const elementId = `div-gpt-ad-banner-${useId().replace(/:/g, '')}`
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches)

  useEffect(() => {
    if (!hideOnMobile) return
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)
    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [hideOnMobile])

  useEffect(() => {
    if (hideOnMobile && isMobile) return
    const scope = pageScope(pathname)
    const resolvedUnit = unit ?? nextUnit()
    const banner = GPT_UNITS[scope].banners[resolvedUnit]

    queueGpt((googletag) => {
      if (!document.getElementById(elementId)) return
      let slot = bannerSlots.get(elementId)
      if (!slot) {
        const sizes = horizontal ? [[320, 50], [728, 90]] : banner.sizes
        slot = googletag.defineSlot(banner.path, sizes, elementId)?.addService(googletag.pubads()) ?? undefined
        if (!slot) return
        bannerSlots.set(elementId, slot)
      }
      googletag.display(elementId)
      googletag.pubads().refresh([slot])
    })

    return () => {
      queueGpt((googletag) => {
        const slot = bannerSlots.get(elementId)
        if (!slot) return
        googletag.destroySlots([slot])
        bannerSlots.delete(elementId)
      })
    }
  }, [elementId, hideOnMobile, horizontal, isMobile, nextUnit, pathname, unit])

  return <div className="gpt-ad-slot"><div id={elementId} className="gpt-ad-inner" aria-hidden="true" /></div>
}

function OutOfPageAds({ pathname }: { pathname: string }) {
  useEffect(() => {
    let active = true
    let slots: GptSlot[] = []
    const scope = pageScope(pathname)

    queueGpt((googletag) => {
      if (!active) return
      const formats: Array<[string, unknown]> = [
        [GPT_UNITS[scope].anchor, googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR],
        [GPT_UNITS[scope].anchor, googletag.enums.OutOfPageFormat.LEFT_SIDE_RAIL],
        [GPT_UNITS[scope].anchor, googletag.enums.OutOfPageFormat.RIGHT_SIDE_RAIL],
        [GPT_UNITS[scope].interstitial, googletag.enums.OutOfPageFormat.INTERSTITIAL],
      ]
      slots = formats
        .map(([path, format]) => googletag.defineOutOfPageSlot(path, format))
        .filter((slot): slot is GptSlot => Boolean(slot))
      for (const slot of slots) {
        slot.addService(googletag.pubads())
        googletag.display(slot)
      }
      if (slots.length) googletag.pubads().refresh(slots)
    })

    return () => {
      active = false
      const mountedSlots = slots
      slots = []
      if (mountedSlots.length) queueGpt((googletag) => googletag.destroySlots(mountedSlots))
    }
  }, [pathname])

  return null
}
