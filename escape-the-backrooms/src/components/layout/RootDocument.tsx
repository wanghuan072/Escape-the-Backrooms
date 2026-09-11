import { SiteFooter } from '@/components/layout/SiteFooter'
import { SiteHeader } from '@/components/navigation/SiteHeader'
import Script from 'next/script'
import { JsonLd, websiteJsonLd } from '@/seo/json-ld'
import { translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import '@/style/layout/root-document.module.css'

const delayedThirdPartyScripts = `
(function () {
  function loadDelayedScripts() {
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
    }, 4000);
  }

  if (document.readyState === 'complete') {
    loadDelayedScripts();
  } else {
    window.addEventListener('load', loadDelayedScripts, { once: true });
  }
})();`

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/x-icon" sizes="32x32" href="https://escapethebackrooms.org/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="https://escapethebackrooms.org/favicon.ico" />
        <Script
          id="delayed-third-party-scripts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: delayedThirdPartyScripts }}
        />
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
      <div id="app">
        <SiteHeader locale={locale} searchPlaceholder={translate(locale, 'searchPage.search.placeholder')} />
        <main>{children}</main>
        <SiteFooter locale={locale} />
      </div>
      {/* Global browser scripts — the Next.js equivalent of scripts at the end of Vue index.html. */}
      {/* To enable the legacy cleanup again, remove this JSX comment wrapper:
      <Script id="legacy-lsv-cleanup" strategy="afterInteractive">
        {"window.localStorage.removeItem('__lsv__');"}
      </Script>
      */}
      <Script src="/collet-data.js" strategy="afterInteractive" />
    </>
  )
}
