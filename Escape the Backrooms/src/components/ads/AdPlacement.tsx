import { GptAdSlot } from '@/components/ads/GptRuntime'
import '@/style/ads/ad-placement.module.css'

export function AdPlacement({ className = 'container' }: { className?: string }) {
  return (
    <aside className={`ad-placement ${className}`}>
      <GptAdSlot />
    </aside>
  )
}
