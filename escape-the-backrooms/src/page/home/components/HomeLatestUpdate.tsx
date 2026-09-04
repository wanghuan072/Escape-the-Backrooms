import { IntrinsicImage } from '@/components/content/IntrinsicImage'
import { translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'

export function HomeLatestUpdate({ locale }: { locale: Locale }) {
  return (
    <aside
      className="hero-latest-update"
      aria-label={translate(locale, 'homePage.hero.latestAria')}
    >
      <article className="hero-update-card">
        <div className="hero-update-image">
          <IntrinsicImage
            src="/images/home/level-421-site-update.webp"
            alt={translate(locale, 'homePage.hero.latestImageAlt')}
            className="hero-update-img"
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="hero-update-caption">
          <span className="hero-update-kicker">{translate(locale, 'homePage.hero.latestLabel')}</span>
          <div className="hero-update-meta">
            <time dateTime="2026-09">{translate(locale, 'homePage.hero.latestDate')}</time>
            <span className="hero-update-source">{translate(locale, 'homePage.hero.latestSource')}</span>
          </div>
        </div>
      </article>
    </aside>
  )
}
