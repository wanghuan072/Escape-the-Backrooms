import { GptAdSlot } from '@/components/ads/GptRuntime'
import { GPT_ADS_ENABLED } from '@/config/ads'
import '@/style/ads/ad-placement.module.css'

export function AdPlacement({ className = 'container', horizontal = false, label, hideOnMobile = false }: { className?: string; horizontal?: boolean; label?: string; hideOnMobile?: boolean }) {
  // GPT is paused globally: do not emit a page-level <aside> or an empty ad placeholder.
  if (!GPT_ADS_ENABLED) return null

  return (
    <aside className={`ad-placement ${hideOnMobile ? 'ad-placement--hide-on-mobile ' : ''}${className}`} aria-label={label}>
      {label && <span className="ad-placement-label">{label}</span>}
      <GptAdSlot horizontal={horizontal} hideOnMobile={hideOnMobile} />
    </aside>
  )
}
