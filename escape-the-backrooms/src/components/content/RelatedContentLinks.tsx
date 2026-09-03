import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import '@/style/content/related-content-links.module.css'

interface RelatedContentLink {
  href: string
  title: string
  description: string
  imageUrl?: string
  imageAlt?: string
}

interface RelatedContentLinksProps {
  title: string
  actionLabel: string
  links: RelatedContentLink[]
}

export function RelatedContentLinks({ title, actionLabel, links }: RelatedContentLinksProps) {
  if (links.length === 0) return null

  return (
    <section className="related-content-links" aria-labelledby="related-content-title">
      <h2 id="related-content-title" className="related-content-title">{title}</h2>
      <div className="related-content-grid">
        {links.map((link) => (
          <a className="related-content-card" href={link.href} key={link.href}>
            {link.imageUrl && <IntrinsicImage className="related-content-image" src={link.imageUrl} alt={link.imageAlt || link.title} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />}
            <span className="related-content-copy">
              <span className="related-content-card-title">{link.title}</span>
              <span className="related-content-description">{link.description}</span>
              <span className="related-content-action">{actionLabel} →</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
