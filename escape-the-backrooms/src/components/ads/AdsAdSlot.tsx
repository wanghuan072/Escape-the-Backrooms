'use client'

import { useEffect, useRef } from 'react'
import '@/style/ads/ads-ad-slot.module.css'

const initializedAdSlots = new WeakSet<HTMLModElement>()

function isInitialized(slot: HTMLModElement) {
  return initializedAdSlots.has(slot) || Boolean(slot.dataset.adsbygoogleStatus) || Boolean(slot.querySelector('iframe'))
}

export function AdsAdSlot() {
  const slotRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    const slot = slotRef.current

    if (!slot || isInitialized(slot)) {
      return
    }

    initializedAdSlots.add(slot)
    window.adsbygoogle = window.adsbygoogle || []

    try {
      window.adsbygoogle.push({})
    } catch (error) {
      if (error instanceof Error && error.message.includes('already have ads in them')) {
        return
      }

      initializedAdSlots.delete(slot)
      throw error
    }
  }, [])

  return (
    <div className="ads-ad-slot">
      <ins
        ref={slotRef}
        className="adsbygoogle"
        data-ad-client="ca-pub-1042701865163735"
        data-ad-slot="3495022871"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
