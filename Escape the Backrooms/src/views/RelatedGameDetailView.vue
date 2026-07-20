<template>
  <div v-if="game" class="related-game-detail-view">
    <section class="page-hero detail-hero">
      <div class="container">
        <div class="hero-layout">
          <div class="hero-copy">
            <a :href="getLocalizedPath('/backrooms-games')" class="back-link">{{ pageCopy.backLink }}</a>
            <span class="section-label">{{ game.eyebrow }}</span>
            <h1 class="page-title">{{ pageCopy.detailTitle }}</h1>
            <p class="page-subtitle">{{ game.editorialVerdict }}</p>
          </div>

          <figure class="hero-media">
            <img :src="game.imageUrl" :alt="game.imageAlt" />
            <figcaption>{{ pageCopy.heroCaption }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- GPT广告位：banner -->
    <!--
    <aside class="container ad-container">
      <GptAdSlot unit="1" />
    </aside>
    -->

    <section class="article-section">
      <div class="container article-layout">
        <main class="article-main">
          <section class="media-panel">
            <div class="media-image">
              <img :src="game.capsuleImageUrl" :alt="game.imageAlt" loading="lazy" />
            </div>
            <div class="media-copy">
              <span class="section-label">{{ pageCopy.playerVerdict }}</span>
              <h2>{{ game.fit }}</h2>
              <p>{{ game.summary }}</p>
              <div class="media-actions">
                <a :href="game.officialUrl" target="_blank" rel="noopener noreferrer nofollow">
                  {{ pageCopy.steamPage }}
                </a>
                <a :href="game.wikiUrl" target="_blank" rel="noopener noreferrer nofollow">
                  {{ pageCopy.wikiHub }}
                </a>
                <a :href="game.mediaUrl" target="_blank" rel="noopener noreferrer nofollow">
                  {{ pageCopy.steamMedia }}
                </a>
              </div>
            </div>
          </section>

          <section class="intro-panel">
            <h2>{{ pageCopy.whyCompare }}</h2>
            <p>{{ game.whySimilar }}</p>
            <p>{{ game.watchFor }}</p>
          </section>

          <section class="analysis-section">
            <article v-for="section in game.detailSections" :key="section.heading" class="analysis-block">
              <h2>{{ section.heading }}</h2>
              <p v-for="paragraph in section.body" :key="paragraph">{{ paragraph }}</p>
            </article>
          </section>

          <!-- GPT广告位：banner -->
          <!--
          <aside class="container ad-container inline-ad">
            <GptAdSlot unit="1" />
          </aside>
          -->

          <section class="comparison-section">
            <div class="section-heading">
              <span class="section-label">{{ pageCopy.playerComparison }}</span>
              <h2>{{ pageCopy.comparisonTitle }}</h2>
            </div>

            <div class="comparison-table" role="table" :aria-label="pageCopy.comparisonAria">
              <div class="comparison-row comparison-head" role="row">
                <div role="columnheader">{{ pageCopy.aspect }}</div>
                <div role="columnheader">{{ pageCopy.escapeColumn }}</div>
                <div role="columnheader">{{ pageCopy.relatedColumn }}</div>
                <div role="columnheader">{{ pageCopy.takeawayColumn }}</div>
              </div>
              <div v-for="row in game.comparisonRows" :key="row.aspect" class="comparison-row" role="row">
                <div role="cell" class="aspect-cell">{{ row.aspect }}</div>
                <div role="cell">{{ row.escape }}</div>
                <div role="cell">{{ row.related }}</div>
                <div role="cell" class="takeaway-cell">{{ row.takeaway }}</div>
              </div>
            </div>
          </section>

          <section class="fit-section">
            <div class="fit-column">
              <h2>{{ pageCopy.goodFit }}</h2>
              <ul>
                <li v-for="item in game.playerFit.goodFor" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="fit-column">
              <h2>{{ pageCopy.notIdeal }}</h2>
              <ul>
                <li v-for="item in game.playerFit.notIdealFor" :key="item">{{ item }}</li>
              </ul>
            </div>
          </section>

          <section class="tips-section">
            <span class="section-label">{{ pageCopy.practicalNotes }}</span>
            <h2>{{ pageCopy.practicalTitle }}</h2>
            <div class="tips-grid">
              <article v-for="tip in game.practicalTips" :key="tip.title" class="tip-item">
                <h3>{{ tip.title }}</h3>
                <p>{{ tip.text }}</p>
              </article>
            </div>
          </section>

          <section class="mechanics-section">
            <span class="section-label">{{ pageCopy.gameplaySystems }}</span>
            <h2>{{ pageCopy.mechanicsTitle }}</h2>
            <div class="mechanics-list">
              <article v-for="mechanic in game.mechanics" :key="mechanic.title">
                <h3>{{ mechanic.title }}</h3>
                <p>{{ mechanic.text }}</p>
              </article>
            </div>
          </section>

          <section class="reference-section">
            <span class="section-label">{{ pageCopy.referencesLabel }}</span>
            <h2>{{ pageCopy.referencesTitle }}</h2>
            <div class="reference-grid">
              <a :href="game.wikiUrl" target="_blank" rel="noopener noreferrer nofollow">
                <strong>{{ pageCopy.wikiReference }}</strong>
                <span>{{ pageCopy.wikiReferenceText }}</span>
              </a>
              <a :href="game.levelsWikiUrl" target="_blank" rel="noopener noreferrer nofollow">
                <strong>{{ pageCopy.levelsReference }}</strong>
                <span>{{ pageCopy.levelsReferenceText }}</span>
              </a>
              <a :href="game.entitiesWikiUrl" target="_blank" rel="noopener noreferrer nofollow">
                <strong>{{ pageCopy.entitiesReference }}</strong>
                <span>{{ pageCopy.entitiesReferenceText }}</span>
              </a>
            </div>
          </section>

          <section class="faq-section">
            <span class="section-label">{{ pageCopy.faqLabel }}</span>
            <h2>{{ pageCopy.faqTitle }}</h2>
            <article v-for="item in game.faq" :key="item.question" class="faq-item">
              <h3>{{ item.question }}</h3>
              <p>{{ item.answer }}</p>
            </article>
          </section>
        </main>

        <aside class="article-sidebar">
          <section class="side-panel">
            <h2>{{ pageCopy.gameFacts }}</h2>
            <dl>
              <div v-for="fact in game.quickFacts" :key="fact.label">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.value }}</dd>
              </div>
              <div>
                <dt>{{ pageCopy.developer }}</dt>
                <dd>{{ game.developer }}</dd>
              </div>
              <div>
                <dt>{{ pageCopy.publisher }}</dt>
                <dd>{{ game.publisher }}</dd>
              </div>
              <div>
                <dt>{{ pageCopy.release }}</dt>
                <dd>{{ game.releaseDate }}</dd>
              </div>
            </dl>
          </section>

          <!-- GPT广告位：banner -->
          <!--
          <aside class="container ad-container side-ad">
            <GptAdSlot unit="1" />
          </aside>
          -->

          <section class="side-panel">
            <h2>{{ pageCopy.sourcesChecked }}</h2>
            <div v-for="source in game.sourceNotes" :key="source.url" class="source-note">
              <h3>{{ source.label }}</h3>
              <p>{{ source.text }}</p>
              <a :href="source.url" target="_blank" rel="noopener noreferrer nofollow">
                {{ pageCopy.openSource }}
              </a>
            </div>
          </section>

          <section class="side-panel">
            <h2>{{ pageCopy.media }}</h2>
            <img class="side-image" :src="game.imageUrl" :alt="game.imageAlt" loading="lazy" />
            <p>{{ pageCopy.mediaText }}</p>
            <a :href="game.mediaUrl" target="_blank" rel="noopener noreferrer nofollow">
              {{ pageCopy.openSteamMedia }}
            </a>
          </section>

          <section class="side-panel">
            <h2>{{ pageCopy.officialPage }}</h2>
            <p>{{ pageCopy.officialText }}</p>
            <a
              class="official-link"
              :href="game.officialUrl"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {{ pageCopy.visitSource }} {{ game.sourceLabel }}
            </a>
          </section>
        </aside>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>{{ pageCopy.notFound }}</h1>
      <a :href="getLocalizedPath('/backrooms-games')" class="back-link">{{ pageCopy.backLink }}</a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findRelatedGameByAddress, getRelatedGamesPageCopy } from '../data/relatedGames.js'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'
import { useSEO } from '../seo/composables.js'
import { seoConfig } from '../seo/config.js'

const route = useRoute()
const { setSEO, generateStructuredData, addStructuredData } = useSEO()
const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()

const currentLocale = computed(() => getCurrentLocale())
const pageCopy = computed(() => getRelatedGamesPageCopy(currentLocale.value))
const game = computed(() => findRelatedGameByAddress(route.params.slug, currentLocale.value))

const addDetailHreflangTags = () => {
  if (typeof document === 'undefined' || !game.value) return

  const supportedLocales = ['en', 'de', 'fr', 'es']
  const basePath = `/backrooms-games/${game.value.addressBar}`

  document
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((link) => link.remove())

  supportedLocales.forEach((locale) => {
    const localizedPath = locale === 'en' ? basePath : `/${locale}${basePath}`
    const link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', locale)
    link.setAttribute('href', `${seoConfig.fullDomain}${localizedPath}`)
    document.head.appendChild(link)
  })

  const defaultLink = document.createElement('link')
  defaultLink.setAttribute('rel', 'alternate')
  defaultLink.setAttribute('hreflang', 'x-default')
  defaultLink.setAttribute('href', `${seoConfig.fullDomain}${basePath}`)
  document.head.appendChild(defaultLink)
}

const updateSEO = () => {
  if (!game.value) return

  setSEO({
    title: game.value.seo?.title || `${game.value.title} | Games Like Escape the Backrooms`,
    description: game.value.seo?.description || game.value.summary,
    keywords: game.value.seo?.keywords || game.value.tags.join(', '),
    image: 'https://escapethebackrooms.org/images/logo.webp',
    type: 'article',
  })

  const structuredData = generateStructuredData('Article')
  addStructuredData({
    ...structuredData,
    headline: pageCopy.value.detailTitle,
    about: game.value.tags,
    url:
      currentLocale.value === 'en'
        ? `https://escapethebackrooms.org/backrooms-games/${game.value.addressBar}`
        : `https://escapethebackrooms.org/${currentLocale.value}/backrooms-games/${game.value.addressBar}`,
    citation: game.value.sourceNotes.map((source) => source.url),
    image: game.value.imageUrl,
  })

  addDetailHreflangTags()
}

onMounted(updateSEO)

watch([() => route.params.slug, currentLocale], updateSEO)
</script>

<style scoped>
.related-game-detail-view {
  min-height: 100vh;
}

.detail-hero {
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.94), rgba(28, 22, 7, 0.78)),
    url('/images/bg.webp') center / cover;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 340px;
  gap: 2rem;
  align-items: center;
}

.back-link {
  display: inline-flex;
  margin-bottom: 1rem;
  color: #ffd700;
  text-decoration: none;
}

.back-link:hover {
  color: #ffc107;
}

.section-label {
  display: inline-block;
  padding: 0.4rem 1rem;
  margin-bottom: 0.75rem;
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 4px;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.intro-panel,
.media-panel,
.side-panel,
.fit-column,
.tip-item,
.faq-item {
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  background: rgba(18, 18, 18, 0.88);
}

.hero-media {
  overflow: hidden;
  border: 1px solid rgba(255, 215, 0, 0.18);
  border-radius: 8px;
  background: rgba(14, 14, 14, 0.86);
}

.hero-media img {
  width: 100%;
  display: block;
}

.hero-media figcaption {
  padding: 0.65rem 0.85rem;
  color: #aaa;
  font-size: 0.8rem;
  line-height: 1.4;
}

.ad-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}

.article-section {
  padding: 3rem 0;
}

.article-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 2rem;
  align-items: flex-start;
}

.article-main {
  min-width: 0;
}

.media-panel,
.intro-panel,
.analysis-block,
.comparison-section,
.fit-section,
.tips-section,
.mechanics-section,
.reference-section,
.faq-section {
  margin-bottom: 2.5rem;
}

.intro-panel {
  padding: 2rem;
}

.media-panel {
  display: grid;
  grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
  overflow: hidden;
}

.media-image {
  min-height: 260px;
  background: #050505;
}

.media-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.media-copy {
  padding: 1.5rem;
}

.media-copy h2 {
  color: #ffd700;
  font-size: 1.55rem;
  margin-bottom: 0.75rem;
}

.media-copy p {
  color: #ccc;
  line-height: 1.75;
}

.media-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1rem;
}

.media-actions a {
  padding: 0.55rem 0.75rem;
  border: 1px solid rgba(255, 215, 0, 0.25);
  border-radius: 6px;
  color: #ffd700;
  text-decoration: none;
}

.media-actions a:hover {
  border-color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
}

.intro-panel h2,
.analysis-block h2,
.section-heading h2,
.fit-column h2,
.tips-section h2,
.faq-section h2,
.side-panel h2 {
  color: #ffd700;
}

.intro-panel p,
.analysis-block p,
.fit-column li,
.tip-item p,
.faq-item p,
.side-panel p,
.source-note p {
  color: #ccc;
  line-height: 1.75;
}

.analysis-block {
  max-width: 900px;
}

.analysis-block h2 {
  font-size: 1.7rem;
  margin-bottom: 0.85rem;
}

.analysis-block p + p {
  margin-top: 1rem;
}

.inline-ad {
  padding-left: 0;
  padding-right: 0;
}

.section-heading {
  margin-bottom: 1rem;
}

.comparison-table {
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  background: rgba(18, 18, 18, 0.88);
}

.comparison-row {
  display: grid;
  grid-template-columns: 0.75fr repeat(3, 1fr);
  border-bottom: 1px solid rgba(255, 215, 0, 0.12);
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-row > div {
  padding: 1rem;
  color: #ccc;
  line-height: 1.6;
}

.comparison-head > div {
  color: #ffd700;
  font-weight: 700;
  background: rgba(255, 215, 0, 0.08);
}

.aspect-cell,
.takeaway-cell {
  color: #f4df77 !important;
}

.fit-section {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.fit-column {
  padding: 1.5rem;
}

.fit-column ul {
  margin-top: 1rem;
  padding-left: 1.2rem;
}

.fit-column li {
  margin-bottom: 0.55rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.mechanics-list {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.mechanics-list article {
  padding: 1.25rem;
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  background: rgba(18, 18, 18, 0.88);
}

.mechanics-list h3 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.mechanics-list p {
  color: #ccc;
  line-height: 1.65;
}

.reference-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.reference-grid a {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.1rem;
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  background: rgba(18, 18, 18, 0.88);
  color: #ddd;
  text-decoration: none;
}

.reference-grid a:hover {
  border-color: #ffd700;
}

.reference-grid strong {
  color: #ffd700;
}

.reference-grid span {
  color: #ccc;
  line-height: 1.5;
}

.tip-item,
.faq-item {
  padding: 1.25rem;
}

.tip-item h3,
.faq-item h3,
.source-note h3 {
  color: #ffd700;
  margin-bottom: 0.6rem;
}

.faq-item {
  margin-top: 1rem;
}

.article-sidebar {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.side-panel {
  padding: 1.25rem;
}

.side-panel dl {
  display: grid;
  gap: 0.9rem;
  margin-top: 1rem;
}

.side-panel dt {
  color: #999;
  font-size: 0.78rem;
  text-transform: uppercase;
}

.side-panel dd {
  color: #fff;
  line-height: 1.45;
}

.source-note {
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(255, 215, 0, 0.12);
}

.source-note:first-of-type {
  border-top: none;
  margin-top: 0;
}

.source-note a,
.official-link {
  color: #ffd700;
  text-decoration: none;
  font-weight: 700;
}

.official-link {
  display: inline-flex;
  margin-top: 1rem;
}

.side-image {
  width: 100%;
  border-radius: 6px;
  margin: 1rem 0;
  display: block;
}

.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  text-align: center;
}

.not-found h1 {
  color: #ffd700;
  margin-bottom: 1rem;
}

@media (max-width: 1100px) {
  .hero-layout,
  .article-layout {
    grid-template-columns: 1fr;
  }

  .article-sidebar {
    position: relative;
    top: 0;
  }
}

@media (max-width: 850px) {
  .comparison-table {
    display: grid;
    gap: 1rem;
    border: none;
    background: transparent;
  }

  .comparison-row,
  .comparison-head {
    display: grid;
    grid-template-columns: 1fr;
    border: 1px solid rgba(255, 215, 0, 0.15);
    border-radius: 8px;
    background: rgba(18, 18, 18, 0.88);
    overflow: hidden;
  }

  .comparison-head {
    display: none;
  }

  .fit-section,
  .tips-grid,
  .reference-grid,
  .media-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-hero,
  .article-section {
    padding: 1rem 0;
  }

  .intro-panel,
  .media-copy,
  .fit-column,
  .tip-item,
  .mechanics-list article,
  .faq-item,
  .side-panel {
    padding: 0.75rem;
  }

  .analysis-block h2,
  .intro-panel h2,
  .tips-section h2,
  .faq-section h2 {
    font-size: 1.25rem;
  }

  .intro-panel p,
  .media-copy p,
  .analysis-block p,
  .comparison-row > div,
  .fit-column li,
  .tip-item p,
  .mechanics-list p,
  .faq-item p,
  .side-panel p,
  .source-note p,
  .reference-grid span {
    font-size: 0.85rem;
    line-height: 1.45;
  }
}
</style>
