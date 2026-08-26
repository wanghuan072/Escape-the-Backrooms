import { footerLabels } from '@/config/navigation'
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
