import { Fragment } from 'react'
import { translate } from '@/lib/i18n/messages'
import type { Locale } from '@/types/locale'
import '@/style/page/legal/legal-page.module.css'

export type LegalPageKey = 'privacyPolicyPage' | 'termsOfServicePage' | 'copyrightPage' | 'aboutUsPage' | 'contactUsPage'

interface SectionDefinition { title: string; paragraphs: string[]; list?: string[] }

const definitions: Record<LegalPageKey, { intro: string; sections: SectionDefinition[]; lastUpdated?: boolean }> = {
  privacyPolicyPage: {
    intro: 'v2Intro', sections: [
      { title: 'v2ScopeTitle', paragraphs: ['v2ScopeText', 'v2ScopeDetails'] },
      { title: 'v2DataTitle', paragraphs: ['v2DataText', 'v2DataDetails'], list: ['v2DataItem1', 'v2DataItem2', 'v2DataItem3'] },
      { title: 'v2UseTitle', paragraphs: ['v2UseText', 'v2UseDetails'] },
      { title: 'v2CookiesTitle', paragraphs: ['v2CookiesText', 'v2CookiesDetails'] },
      { title: 'v2AnalyticsTitle', paragraphs: ['v2AnalyticsText'] },
      { title: 'v2PartnersTitle', paragraphs: ['v2PartnersText', 'v2PartnersDetails'] },
      { title: 'v2AdsTitle', paragraphs: ['v2AdsText'] },
      { title: 'v2SharingTitle', paragraphs: ['v2SharingText'] },
      { title: 'v2RetentionTitle', paragraphs: ['v2RetentionText'] },
      { title: 'v2ChoicesTitle', paragraphs: ['v2ChoicesText', 'v2ChoicesDetails'] },
      { title: 'v2SecurityTitle', paragraphs: ['v2SecurityText'] },
      { title: 'v2ChildrenTitle', paragraphs: ['v2ChildrenText', 'v2ChildrenDetails'] },
      { title: 'v2InternationalTitle', paragraphs: ['v2InternationalText'] },
      { title: 'v2ChangesTitle', paragraphs: ['v2ChangesText'] },
      { title: 'v2ContactTitle', paragraphs: ['v2ContactText'] },
    ],
  },
  termsOfServicePage: {
    intro: 'v2Intro', sections: [
      { title: 'v2AcceptanceTitle', paragraphs: ['v2AcceptanceText', 'v2AcceptanceDetails'] },
      { title: 'v2ServiceTitle', paragraphs: ['v2ServiceText', 'v2ServiceDetails'] },
      { title: 'v2UseTitle', paragraphs: ['v2UseText'], list: ['v2UseItem1', 'v2UseItem2', 'v2UseItem3', 'v2UseItem4'] },
      { title: 'v2OwnershipTitle', paragraphs: ['v2OwnershipText', 'v2OwnershipDetails'] },
      { title: 'v2GameIpTitle', paragraphs: ['v2GameIpText'] },
      { title: 'v2UserSubmissionsTitle', paragraphs: ['v2UserSubmissionsText'] },
      { title: 'v2ExternalTitle', paragraphs: ['v2ExternalText', 'v2ExternalDetails'] },
      { title: 'v2AvailabilityTitle', paragraphs: ['v2AvailabilityText'] },
      { title: 'v2DisclaimerTitle', paragraphs: ['v2DisclaimerText', 'v2DisclaimerDetails'] },
      { title: 'v2LiabilityTitle', paragraphs: ['v2LiabilityText', 'v2LiabilityDetails'] },
      { title: 'v2TerminationTitle', paragraphs: ['v2TerminationText'] },
      { title: 'v2ChangesTitle', paragraphs: ['v2ChangesText'] },
      { title: 'v2ContactTitle', paragraphs: ['v2ContactText'] },
    ],
  },
  copyrightPage: {
    intro: 'v2Intro', sections: [
      { title: 'v2SiteTitle', paragraphs: ['v2SiteText', 'v2SiteDetails'] },
      { title: 'v2GameTitle', paragraphs: ['v2GameText', 'v2GameDetails'] },
      { title: 'v2PermittedTitle', paragraphs: ['v2PermittedText', 'v2PermittedDetails'] },
      { title: 'v2RestrictionsTitle', paragraphs: ['v2RestrictionsText'] },
      { title: 'v2TrademarkTitle', paragraphs: ['v2TrademarkText'] },
      { title: 'v2TakedownTitle', paragraphs: ['v2TakedownText'] },
      { title: 'v2NoticeTitle', paragraphs: ['v2NoticeText', 'v2NoticeDetails'], list: ['v2NoticeItem1', 'v2NoticeItem2', 'v2NoticeItem3', 'v2NoticeItem4', 'v2NoticeItem5'] },
      { title: 'v2CounterTitle', paragraphs: ['v2CounterText'] },
      { title: 'v2ContactTitle', paragraphs: ['v2ContactText'] },
    ],
  },
  aboutUsPage: {
    intro: 'v2Intro', lastUpdated: true, sections: [
      { title: 'v2OriginTitle', paragraphs: ['v2OriginText'] },
      { title: 'v2WhyTitle', paragraphs: ['v2WhyText'] },
      { title: 'v2MethodTitle', paragraphs: ['v2MethodText'], list: ['v2MethodItem1', 'v2MethodItem2', 'v2MethodItem3'] },
      { title: 'v2FormatTitle', paragraphs: ['v2FormatText'] },
      { title: 'v2StandardsTitle', paragraphs: ['v2StandardsText'] },
      { title: 'v2IndependenceTitle', paragraphs: ['v2IndependenceText'] },
      { title: 'v2ContactTitle', paragraphs: ['v2ContactText'] },
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
