import { Fragment } from 'react'
import { translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import '@/style/page/legal/legal-page.module.css'

export type LegalPageKey = 'privacyPolicyPage' | 'termsOfServicePage' | 'copyrightPage' | 'aboutUsPage' | 'contactUsPage'

interface SectionDefinition { title: string; paragraphs: string[]; list?: string[] }

const definitions: Record<LegalPageKey, { intro: string; sections: SectionDefinition[]; lastUpdated?: boolean }> = {
  privacyPolicyPage: {
    intro: 'intro', sections: [
      { title: 'informationTitle', paragraphs: ['informationText1', 'informationText2'] },
      { title: 'howWeUseTitle', paragraphs: ['howWeUseText'] },
      { title: 'cookiesTitle', paragraphs: ['cookiesText'] },
      { title: 'thirdPartyTitle', paragraphs: ['thirdPartyText'] },
      { title: 'securityTitle', paragraphs: ['securityText'] },
      { title: 'rightsTitle', paragraphs: ['rightsText'] },
      { title: 'changesTitle', paragraphs: ['changesText'] },
      { title: 'contactTitle', paragraphs: ['contactText'] },
    ],
  },
  termsOfServicePage: {
    intro: 'intro', sections: [
      { title: 'useTitle', paragraphs: ['useText'] },
      { title: 'contentTitle', paragraphs: ['contentText1', 'contentText2'] },
      { title: 'conductTitle', paragraphs: ['conductText'] },
      { title: 'disclaimerTitle', paragraphs: ['disclaimerText'] },
      { title: 'liabilityTitle', paragraphs: ['liabilityText'] },
      { title: 'linksTitle', paragraphs: ['linksText'] },
      { title: 'modificationsTitle', paragraphs: ['modificationsText'] },
      { title: 'contactTitle', paragraphs: ['contactText'] },
    ],
  },
  copyrightPage: {
    intro: 'copyright', sections: [
      { title: 'noticeTitle', paragraphs: ['noticeText'] },
      { title: 'fairUseTitle', paragraphs: ['fairUseText'] },
      { title: 'trademarkTitle', paragraphs: ['trademarkText1', 'trademarkText2'] },
      { title: 'usageTitle', paragraphs: ['usageText'] },
      { title: 'userGeneratedTitle', paragraphs: ['userGeneratedText'] },
      { title: 'dmcaTitle', paragraphs: ['dmcaText'], list: ['description', 'location', 'contact', 'statement1', 'statement2'].map((key) => `dmcaItems.${key}`) },
      { title: 'contactTitle', paragraphs: ['contactText'] },
    ],
  },
  aboutUsPage: {
    intro: 'welcome', lastUpdated: true, sections: [
      { title: 'missionTitle', paragraphs: ['missionText'] },
      { title: 'offerTitle', paragraphs: ['offerText'] },
      { title: 'teamTitle', paragraphs: ['teamText'] },
      { title: 'independenceTitle', paragraphs: ['independenceText'] },
      { title: 'communityTitle', paragraphs: ['communityText'] },
      { title: 'contactTitle', paragraphs: ['contactText'] },
    ],
  },
  contactUsPage: {
    intro: 'intro', lastUpdated: true, sections: [
      { title: 'howToContactTitle', paragraphs: ['howToContactText'] },
      { title: 'responseTimeTitle', paragraphs: ['responseTimeText'] },
      { title: 'whatToIncludeTitle', paragraphs: ['whatToIncludeText'], list: ['name', 'subject', 'description', 'relevantInfo'].map((key) => `whatToIncludeItems.${key}`) },
      { title: 'feedbackTitle', paragraphs: ['feedbackText'] },
      { title: 'reportingTitle', paragraphs: ['reportingText'] },
      { title: 'correctionsTitle', paragraphs: ['correctionsText'] },
      { title: 'partnershipTitle', paragraphs: ['partnershipText'] },
    ],
  },
}

export default function LegalPage({ locale, pageKey }: { locale: Locale; pageKey: LegalPageKey }) {
  const definition = definitions[pageKey]
  const content = (key: string) => translate(locale, `${pageKey}.content.${key}`)
  return <div className="legal-view">
    <section className="page-header"><div className="container"><div className="header-content"><h1 className="page-title">{translate(locale, `${pageKey}.hero.title`)}</h1><p className="page-subtitle">{translate(locale, `${pageKey}.hero.subtitle`)}</p></div></div></section>
    <section className="legal-content"><div className="container"><div className="content-wrapper"><div className="legal-text v-html-style">
      <p dangerouslySetInnerHTML={{ __html: content(definition.intro) }} />
      {definition.sections.map((section) => <Fragment key={section.title}><h2>{content(section.title)}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} dangerouslySetInnerHTML={{ __html: content(paragraph) }} />)}{section.list && <ul>{section.list.map((item) => <li key={item}>{content(item)}</li>)}</ul>}</Fragment>)}
      {definition.lastUpdated && <p className="legal-last-updated"><strong>{content('lastUpdated')}</strong></p>}
    </div></div></div></section>
  </div>
}
