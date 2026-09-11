import '@/style/ads/ad-placement.module.css'

export function AdPlacement({ className = 'container', horizontal = false, label, hideOnMobile = false }: { className?: string; horizontal?: boolean; label?: string; hideOnMobile?: boolean }) {
  return (
    <aside className={`ad-placement ${hideOnMobile ? 'ad-placement--hide-on-mobile ' : ''}${className}`} aria-label={label}>
      {label && <span className="ad-placement-label">{label}</span>}
      <div className={`ad-placeholder${horizontal ? ' ad-placeholder--horizontal' : ''}`} aria-hidden="true" />
    </aside>
  )
}
