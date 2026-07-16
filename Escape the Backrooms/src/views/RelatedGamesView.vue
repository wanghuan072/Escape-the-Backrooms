<template>
  <div class="related-games-view">
    <section class="page-hero related-hero">
      <div class="container">
        <div class="hero-copy">
          <span class="section-label">{{ pageCopy.listLabel }}</span>
          <h1 class="page-title">{{ pageCopy.listTitle }}</h1>
          <p class="page-subtitle">
            {{ pageCopy.listDescription }}
          </p>
        </div>
      </div>
    </section>

    <aside class="container ad-container">
      <GptAdSlot unit="1" />
    </aside>

    <section class="featured-related">
      <div class="container">
        <a :href="getLocalizedPath(`/backrooms-games/${featuredGame.addressBar}`)" class="feature-card">
          <div class="feature-image">
            <img :src="featuredGame.capsuleImageUrl" :alt="featuredGame.imageAlt" loading="lazy" />
            <span>{{ featuredGame.fit }}</span>
          </div>

          <div class="feature-copy">
            <span class="section-label">{{ featuredGame.category }}</span>
            <h2>{{ featuredGame.title }}</h2>
            <p class="lead">{{ featuredGame.listSummary }}</p>

            <div class="reason-list">
              <div v-for="reason in featuredGame.listReasons" :key="reason">
                {{ reason }}
              </div>
            </div>

            <dl class="fact-grid">
              <div v-for="fact in featuredGame.quickFacts.slice(0, 4)" :key="fact.label">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.value }}</dd>
              </div>
            </dl>

            <span class="read-more">{{ pageCopy.readMore }}</span>
          </div>
        </a>
      </div>
    </section>

    <section class="player-angle">
      <div class="container">
        <div class="section-heading">
          <span class="section-label">{{ pageCopy.whyLabel }}</span>
          <h2>{{ pageCopy.whyTitle }}</h2>
          <p>
            {{ pageCopy.whyText }}
          </p>
        </div>

        <div class="angle-grid">
          <article v-for="row in featuredGame.comparisonRows.slice(0, 3)" :key="row.aspect">
            <h3>{{ row.aspect }}</h3>
            <p>{{ row.takeaway }}</p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { getRelatedGames, getRelatedGamesPageCopy } from '../data/relatedGames.js'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()

const currentLocale = computed(() => getCurrentLocale())
const relatedGames = computed(() => getRelatedGames(currentLocale.value))
const pageCopy = computed(() => getRelatedGamesPageCopy(currentLocale.value))
const featuredGame = computed(() => relatedGames.value[0])

const jsonLdId = 'related-games-item-list-jsonld'

const addItemListStructuredData = () => {
  if (typeof document === 'undefined') return

  document.getElementById(jsonLdId)?.remove()

  const script = document.createElement('script')
  script.id = jsonLdId
  script.type = 'application/ld+json'
  const localePrefix = currentLocale.value === 'en' ? '' : `/${currentLocale.value}`
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pageCopy.value.listTitle,
    description: pageCopy.value.listDescription,
    itemListElement: relatedGames.value.map((game, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: game.title,
      url: `https://escapethebackrooms.org${localePrefix}/backrooms-games/${game.addressBar}`,
      image: game.imageUrl,
    })),
  })
  document.head.appendChild(script)
}

onMounted(() => {
  window.setTimeout(addItemListStructuredData, 0)
})

onUnmounted(() => {
  if (typeof document === 'undefined') return
  document.getElementById(jsonLdId)?.remove()
})
</script>

<style scoped>
.related-games-view {
  min-height: 100vh;
}

.related-hero {
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.92), rgba(28, 22, 7, 0.68)),
    url('/images/bg.webp') center / cover;
}

.hero-copy {
  max-width: 960px;
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

.ad-container {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
}

.featured-related,
.player-angle {
  padding: 3rem 0;
}

.feature-card {
  display: grid;
  grid-template-columns: minmax(360px, 0.9fr) minmax(0, 1.1fr);
  gap: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  background: rgba(16, 16, 16, 0.92);
  color: #fff;
  text-decoration: none;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.feature-card:hover {
  border-color: #ffd700;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
  transform: translateY(-2px);
}

.feature-image {
  position: relative;
  min-height: 360px;
  background: rgba(0, 0, 0, 0.75);
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.feature-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(0, 0, 0, 0.82));
}

.feature-image span {
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  z-index: 1;
  color: #ffd700;
  font-weight: 700;
  line-height: 1.35;
}

.feature-copy {
  padding: clamp(1.25rem, 3vw, 2.5rem);
}

.feature-copy h2 {
  color: #ffd700;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.1;
  margin-bottom: 1rem;
}

.lead {
  color: #ddd;
  font-size: 1.05rem;
  line-height: 1.75;
}

.reason-list {
  display: grid;
  gap: 0.6rem;
  margin: 1.25rem 0;
}

.reason-list div {
  padding-left: 1rem;
  border-left: 3px solid rgba(255, 215, 0, 0.55);
  color: #ccc;
  line-height: 1.55;
}

.fact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.fact-grid div {
  padding: 0.75rem;
  border: 1px solid rgba(255, 215, 0, 0.12);
  border-radius: 6px;
  background: rgba(255, 215, 0, 0.05);
}

.fact-grid dt {
  color: #999;
  font-size: 0.76rem;
  text-transform: uppercase;
}

.fact-grid dd {
  margin-top: 0.35rem;
  color: #fff;
  line-height: 1.4;
}

.read-more {
  display: inline-flex;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  background: #ffd700;
  color: #111;
  font-weight: 700;
}

.section-heading {
  max-width: 900px;
  margin-bottom: 1.5rem;
}

.section-heading h2 {
  color: #ffd700;
  font-size: clamp(1.6rem, 3vw, 2rem);
  margin-bottom: 0.75rem;
}

.section-heading p {
  color: #ccc;
  line-height: 1.75;
}

.angle-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.angle-grid article {
  padding: 1.25rem;
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  background: rgba(18, 18, 18, 0.88);
}

.angle-grid h3 {
  color: #ffd700;
  margin-bottom: 0.7rem;
}

.angle-grid p {
  color: #ccc;
  line-height: 1.65;
}

@media (max-width: 980px) {
  .feature-card,
  .angle-grid {
    grid-template-columns: 1fr;
  }

  .feature-image {
    min-height: 280px;
  }
}

@media (max-width: 768px) {
  .related-hero,
  .featured-related,
  .player-angle {
    padding: 1rem 0;
  }

  .feature-copy,
  .angle-grid article {
    padding: 0.75rem;
  }

  .feature-image {
    min-height: 210px;
  }

  .fact-grid {
    grid-template-columns: 1fr;
  }

  .lead,
  .reason-list div,
  .section-heading p,
  .angle-grid p {
    font-size: 0.85rem;
    line-height: 1.45;
  }
}
</style>
