import { footerLabels } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { localizedPath } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import '@/style/layout/site-footer.module.css'

export function SiteFooter({ locale }: { locale: Locale }) {
  const labels = footerLabels[locale]
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.webp" alt="Escape the Backrooms" className="logo-image" />
              <span className="logo-text">ESCAPE THE BACKROOMS</span>
            </div>
            <p className="footer-text">{labels.description}</p>
            <a className="footer-youtube-link" href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Visit Bombit on YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
            </a>
          </div>
          <div className="link-column">
            <h2>{labels.navigate}</h2>
            <ul>
              <li><a href={localizedPath('/', locale)}>{labels.home}</a></li>
              <li><a href={localizedPath('/levels', locale)}>{labels.levels}</a></li>
              <li><a href={localizedPath('/maps-keys', locale)}>{labels.maps}</a></li>
              <li><a href={localizedPath('/codes-solutions', locale)}>{labels.codes}</a></li>
              <li><a href={localizedPath('/backrooms-games', locale)}>{labels.relatedGames}</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h2>{labels.legal}</h2>
            <ul>
              <li><a href={localizedPath('/privacy-policy', locale)} rel="nofollow">{labels.privacy}</a></li>
              <li><a href={localizedPath('/terms-of-service', locale)} rel="nofollow">{labels.terms}</a></li>
              <li><a href={localizedPath('/copyright', locale)} rel="nofollow">{labels.copyright}</a></li>
              <li><a href={localizedPath('/about-us', locale)} rel="nofollow">{labels.about}</a></li>
              <li><a href={localizedPath('/contact-us', locale)} rel="nofollow">{labels.contact}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom"><p>{labels.rights}</p><p>{labels.disclaimer}</p></div>
      </div>
    </footer>
  )
}
