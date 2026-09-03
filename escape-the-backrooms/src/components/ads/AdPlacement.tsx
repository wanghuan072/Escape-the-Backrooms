import { GptAdSlot } from '@/components/ads/GptRuntime'
import '@/style/ads/ad-placement.module.css'

export function AdPlacement({ className = 'container', horizontal = false, label }: { className?: string; horizontal?: boolean; label?: string }) {
  return (
    <aside className={`ad-placement ${className}`} aria-label={label}>
      {label && <span className="ad-placement-label">{label}</span>}
      <GptAdSlot horizontal={horizontal} />
    </aside>
  )
}
