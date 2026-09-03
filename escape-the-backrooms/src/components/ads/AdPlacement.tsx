import { GptAdSlot } from '@/components/ads/GptRuntime'
import '@/style/ads/ad-placement.module.css'

export function AdPlacement({ className = 'container', horizontal = false, label, hideOnMobile = false }: { className?: string; horizontal?: boolean; label?: string; hideOnMobile?: boolean }) {
  return (
    <aside className={`ad-placement ${hideOnMobile ? 'ad-placement--hide-on-mobile ' : ''}${className}`} aria-label={label}>
      {label && <span className="ad-placement-label">{label}</span>}
      <GptAdSlot horizontal={horizontal} hideOnMobile={hideOnMobile} />
    </aside>
  )
}
