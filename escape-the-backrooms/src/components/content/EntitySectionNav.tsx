'use client'

import { useEffect, useState } from 'react'

export type EntitySectionAnchor = {
  id: string
  label: string
}

export function EntitySectionNav({ title, hint, anchors }: { title: string; hint: string; anchors: EntitySectionAnchor[] }) {
  const [activeId, setActiveId] = useState(anchors[0]?.id ?? '')

  useEffect(() => {
    const sections = anchors
      .map((anchor) => document.getElementById(anchor.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const applyHash = () => {
      const id = window.location.hash.slice(1)
      if (sections.some((section) => section.id === id)) setActiveId(id)
    }

    applyHash()
    window.addEventListener('hashchange', applyHash)

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)

      if (visible[0]) setActiveId(visible[0].target.id)
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.25, 1] })

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', applyHash)
    }
  }, [anchors])

  return (
    <aside className="entity-section-rail">
      <nav className="entity-section-nav" aria-label={title}>
        <span>{hint}</span>
        <h2>{title}</h2>
        <ol>
          {anchors.map((anchor, index) => (
            <li key={anchor.id} className={activeId === anchor.id ? 'is-active' : undefined}>
              <a href={`#${anchor.id}`} aria-current={activeId === anchor.id ? 'location' : undefined}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                <span>{anchor.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  )
}
