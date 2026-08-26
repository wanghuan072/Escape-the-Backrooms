import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/navigation/SiteHeader'
import { AdRuntime } from '@/components/ads/GptRuntime'
import { MediaOptimizer } from '@/components/content/MediaOptimizer'
import { JsonLd, websiteJsonLd } from '@/seo/json-ld'
import { translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import '@/style/layout/root-document.module.css'

const delayedThirdPartyScripts = `
window.addEventListener('load', function () {
  setTimeout(function () {
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.defer = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-BFYQB388T1';
    document.head.appendChild(gtagScript);
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BFYQB388T1');
    const adsScript = document.createElement('script');
    adsScript.async = true;
    adsScript.defer = true;
    adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1042701865163735';
    adsScript.crossOrigin = 'anonymous';
    document.head.appendChild(adsScript);
  }, 4000);
});`

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" sizes="32x32" href="https://escapethebackrooms.org/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="https://escapethebackrooms.org/favicon.ico" />
        <link rel="dns-prefetch" href="https://securepubads.g.doubleclick.net" />
        <link rel="preconnect" href="https://securepubads.g.doubleclick.net" crossOrigin="anonymous" />
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" crossOrigin="anonymous" />
        <script dangerouslySetInnerHTML={{ __html: delayedThirdPartyScripts }} />
        <JsonLd id="website-jsonld" data={websiteJsonLd} />
      </head>
      <body>
        <SiteBody locale={locale}>{children}</SiteBody>
      </body>
    </html>
  )
}

export function SiteBody({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "window.localStorage.removeItem('__lsv__');" }} />
      <AdRuntime>
        <div id="app">
          <SiteHeader locale={locale} searchPlaceholder={translate(locale, 'searchPage.search.placeholder')} />
          <main>{children}</main>
          <SiteFooter locale={locale} />
        </div>
        <MediaOptimizer />
      </AdRuntime>
      <script src="/collet-data.js" />
    </>
  )
}
