import { GptAdSlot } from '@/components/ads/GptRuntime'
import '@/style/ads/ad-placement.module.css'

export function AdPlacement({ className = 'container', horizontal = false }: { className?: string; horizontal?: boolean }) {
  return (
    <aside className={`ad-placement ${className}`}>
      <GptAdSlot horizontal={horizontal} />
    </aside>
  )
}
