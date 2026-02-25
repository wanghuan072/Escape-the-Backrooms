<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content">
            <div class="hero-badges">
              <span class="badge badge-new">{{ $t('homePage.hero.badgeNew') }}</span>
              <span class="badge">{{ $t('homePage.hero.badgeSteam') }}</span>
            </div>
            <h1 class="hero-title">{{ $t('homePage.hero.title') }}</h1>
            <p class="hero-description">
              {{ $t('homePage.hero.description') }}
            </p>
            <div class="hero-features">
              <div class="feature-item">{{ $t('homePage.hero.feature01') }}</div>
              <div class="feature-item">{{ $t('homePage.hero.feature02') }}</div>
              <div class="feature-item">{{ $t('homePage.hero.feature03') }}</div>
              <div class="feature-item">{{ $t('homePage.hero.feature04') }}</div>
            </div>
            <div class="hero-stats">
              <div class="stat-box">
                <div class="stat-number">{{ $t('homePage.hero.stat01Number') }}</div>
                <div class="stat-text">{{ $t('homePage.hero.stat01Text') }}</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">{{ $t('homePage.hero.stat02Number') }}</div>
                <div class="stat-text">{{ $t('homePage.hero.stat02Text') }}</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">{{ $t('homePage.hero.stat03Number') }}</div>
                <div class="stat-text">{{ $t('homePage.hero.stat03Text') }}</div>
              </div>
            </div>
            <div class="hero-actions">
              <a :href="getLocalizedPath('/levels')" class="btn btn-primary">{{ $t('homePage.hero.button01') }}</a>
              <a :href="getLocalizedPath('/codes-solutions')" class="btn btn-secondary">{{ $t('homePage.hero.button02') }}</a>
            </div>
          </div>
          <div class="hero-video">
            <div class="video-player">
              <div class="video-thumbnail" v-if="!isVideoPlaying" @click="playVideo">
                <div class="play-button">▶</div>
              </div>
              <div class="video-iframe-container" v-else>
                <iframe
                  src="https://www.youtube.com/embed/6xbnqo48K2c"
                  :title="$t('homePage.hero.videoTitle')"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="video-frame"
                ></iframe>
                <button class="close-video" @click="closeVideo">×</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Levels Section -->
    <section class="featured-section" v-if="homeLevels.length > 0">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">{{ $t('homePage.featuredLevels.label') }}</span>
            <h2 class="section-title">{{ $t('homePage.featuredLevels.title') }}</h2>
            <p class="section-subtitle">{{ $t('homePage.featuredLevels.subtitle') }}</p>
          </div>
          <a :href="getLocalizedPath('/levels')" class="section-link">{{ $t('homePage.featuredLevels.linkText') }}</a>
        </div>
        <div class="featured-grid">
          <a
            v-for="level in homeLevels"
            :key="level.id"
            :href="getLocalizedPath(`/levels/${level.addressBar}`)"
            class="featured-card"
          >
            <div class="card-image">
              <img
                v-if="level.imageUrl"
                :src="level.imageUrl"
                :alt="level.imageAlt || level.title"
                class="card-img"
                loading="lazy"
              />
              <div v-else class="card-img placeholder">{{ level.title }}</div>
              <div class="image-overlay"></div>
              <div class="card-badge-top" v-if="level.category">{{ level.category }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ level.title }}</h3>
              <p class="card-desc">{{ level.description }}</p>
              <div class="card-tags" v-if="level.tags && level.tags.length > 0">
                <span v-for="tag in level.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Maps Section -->
    <section class="featured-section" v-if="homeMaps.length > 0">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">{{ $t('homePage.featuredMaps.label') }}</span>
            <h2 class="section-title">{{ $t('homePage.featuredMaps.title') }}</h2>
            <p class="section-subtitle">{{ $t('homePage.featuredMaps.subtitle') }}</p>
          </div>
          <a :href="getLocalizedPath('/maps-keys')" class="section-link">{{ $t('homePage.featuredMaps.linkText') }}</a>
        </div>
        <div class="featured-grid">
          <a
            v-for="map in homeMaps"
            :key="map.id"
            :href="getLocalizedPath(`/maps-keys/${map.addressBar}`)"
            class="featured-card"
          >
            <div class="card-image">
              <img
                v-if="map.imageUrl"
                :src="map.imageUrl"
                :alt="map.imageAlt || map.title"
                class="card-img"
                loading="lazy"
              />
              <div v-else class="card-img placeholder">{{ map.title }}</div>
              <div class="image-overlay"></div>
              <div class="card-badge-top" v-if="map.category">{{ map.category }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ map.title }}</h3>
              <p class="card-desc">{{ map.description }}</p>
              <div class="card-tags" v-if="map.tags && map.tags.length > 0">
                <span v-for="tag in map.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Entities Section -->
    <section class="featured-section" v-if="homeEntities.length > 0">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">{{ $t('homePage.featuredEntities.label') }}</span>
            <h2 class="section-title">{{ $t('homePage.featuredEntities.title') }}</h2>
            <p class="section-subtitle">{{ $t('homePage.featuredEntities.subtitle') }}</p>
          </div>
          <!-- <a href="/wiki/entities" class="section-link">{{ $t('homePage.featuredEntities.linkText') }}</a> -->
        </div>
        <div class="featured-grid">
          <div
            v-for="entity in homeEntities"
            :key="entity.id"
            :href="`/wiki/entities/${entity.slug}`"
            class="featured-card"
          >
            <div class="card-image">
              <img
                v-if="entity.imageUrl"
                :src="entity.imageUrl"
                :alt="entity.imageAlt || entity.name"
                class="card-img"
                loading="lazy"
              />
              <div v-else class="card-img placeholder">{{ entity.name }}</div>
              <div class="image-overlay"></div>
              <div class="card-badge-top" :class="entity.dangerClass">{{ entity.dangerLevel }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ entity.title }}</h3>
              <p class="card-desc">{{ entity.description }}</p>
              <div class="card-meta">
                <span v-if="entity.species" class="meta-item">{{ entity.species }}</span>
                <span v-if="entity.firstAppearsIn" class="meta-item">{{ entity.firstAppearsIn }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Info Section -->
    <section class="game-info">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">{{ $t('homePage.gameInfo.label') }}</span>
            <h2 class="section-title">{{ $t('homePage.gameInfo.title') }}</h2>
            <p class="section-subtitle">{{ $t('homePage.gameInfo.subtitle') }}</p>
          </div>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <h3>{{ $t('homePage.gameInfo.card01Title') }}</h3>
            <ul class="info-list">
              <li><strong>{{ $t('homePage.gameInfo.card01Item01Label') }}</strong> {{ $t('homePage.gameInfo.card01Item01Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card01Item02Label') }}</strong> {{ $t('homePage.gameInfo.card01Item02Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card01Item03Label') }}</strong> {{ $t('homePage.gameInfo.card01Item03Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card01Item04Label') }}</strong> {{ $t('homePage.gameInfo.card01Item04Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card01Item05Label') }}</strong> {{ $t('homePage.gameInfo.card01Item05Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card01Item06Label') }}</strong> {{ $t('homePage.gameInfo.card01Item06Value') }}</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>{{ $t('homePage.gameInfo.card02Title') }}</h3>
            <ul class="info-list">
              <li><strong>{{ $t('homePage.gameInfo.card02Item01Label') }}</strong> {{ $t('homePage.gameInfo.card02Item01Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card02Item02Label') }}</strong> {{ $t('homePage.gameInfo.card02Item02Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card02Item03Label') }}</strong> {{ $t('homePage.gameInfo.card02Item03Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card02Item04Label') }}</strong> {{ $t('homePage.gameInfo.card02Item04Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card02Item05Label') }}</strong> {{ $t('homePage.gameInfo.card02Item05Value') }}</li>
              <li><strong>{{ $t('homePage.gameInfo.card02Item06Label') }}</strong> {{ $t('homePage.gameInfo.card02Item06Value') }}</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>{{ $t('homePage.gameInfo.card03Title') }}</h3>
            <ul class="info-list">
              <li>{{ $t('homePage.gameInfo.card03Item01') }}</li>
              <li>{{ $t('homePage.gameInfo.card03Item02') }}</li>
              <li>{{ $t('homePage.gameInfo.card03Item03') }}</li>
              <li>{{ $t('homePage.gameInfo.card03Item04') }}</li>
              <li>{{ $t('homePage.gameInfo.card03Item05') }}</li>
              <li>{{ $t('homePage.gameInfo.card03Item06') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-wrap">
          <div class="section-header">
            <div class="header-content">
              <span class="section-label">{{ $t('homePage.about.label') }}</span>
              <h2 class="section-title">{{ $t('homePage.about.title') }}</h2>
              <p class="section-subtitle">{{ $t('homePage.about.subtitle') }}</p>
            </div>
          </div>
          <div class="about-content">
            <div class="about-text">
              <p v-html="$t('homePage.about.text01')"></p>
              <p v-html="$t('homePage.about.text02')"></p>
              <p v-html="$t('homePage.about.text03')"></p>
            </div>
            <div class="about-highlights">
              <div class="highlight-item">
                <div>
                  <strong>{{ $t('homePage.about.highlight01Title') }}</strong>
                  <p>{{ $t('homePage.about.highlight01Text') }}</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>{{ $t('homePage.about.highlight02Title') }}</strong>
                  <p>{{ $t('homePage.about.highlight02Text') }}</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>{{ $t('homePage.about.highlight03Title') }}</strong>
                  <p>{{ $t('homePage.about.highlight03Text') }}</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>{{ $t('homePage.about.highlight04Title') }}</strong>
                  <p>{{ $t('homePage.about.highlight04Text') }}</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>{{ $t('homePage.about.highlight05Title') }}</strong>
                  <p>{{ $t('homePage.about.highlight05Text') }}</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>{{ $t('homePage.about.highlight06Title') }}</strong>
                  <p>{{ $t('homePage.about.highlight06Text') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <div class="section-header">
            <div class="header-content">
              <span class="section-label">{{ $t('homePage.faq.label') }}</span>
              <h2 class="section-title">{{ $t('homePage.faq.title') }}</h2>
              <p class="section-subtitle">{{ $t('homePage.faq.subtitle') }}</p>
            </div>
          </div>
          <div class="faq-list">
            <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
              <h3 class="faq-question">
                {{ item.question }}
              </h3>
              <div class="faq-answer">
                <p v-html="item.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLevelsData } from '../composables/useLevelsData.js'
import { useMapsData } from '../composables/useMapsData.js'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'
import entitiesData from '../data/wiki/entities.js'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { data: levelsData, loadData: loadLevelsData, getHomeLevels } = useLevelsData()
const { data: mapsData, loadData: loadMapsData, getHomeMaps } = useMapsData()

// Video player state
const isVideoPlaying = ref(false)

const playVideo = () => {
  isVideoPlaying.value = true
}

const closeVideo = () => {
  isVideoPlaying.value = false
}

// Load data
onMounted(async () => {
  await nextTick()
  await loadLevelsData()
  await loadMapsData()
})

// Filter data where isHome is true
const homeLevels = computed(() => {
  return getHomeLevels()
})

const homeEntities = computed(() => {
  return entitiesData.filter(entity => entity.isHome === true)
})

const homeMaps = computed(() => {
  return getHomeMaps()
})

// FAQ Items
const faqItems = computed(() => [
  {
    question: t('homePage.faq.item01Question'),
    answer: t('homePage.faq.item01Answer'),
  },
  {
    question: t('homePage.faq.item02Question'),
    answer: t('homePage.faq.item02Answer'),
  },
  {
    question: t('homePage.faq.item03Question'),
    answer: t('homePage.faq.item03Answer'),
  },
  {
    question: t('homePage.faq.item04Question'),
    answer: t('homePage.faq.item04Answer'),
  },
  {
    question: t('homePage.faq.item05Question'),
    answer: t('homePage.faq.item05Answer'),
  },
  {
    question: t('homePage.faq.item06Question'),
    answer: t('homePage.faq.item06Answer'),
  },
  {
    question: t('homePage.faq.item07Question'),
    answer: t('homePage.faq.item07Answer'),
  },
  {
    question: t('homePage.faq.item08Question'),
    answer: t('homePage.faq.item08Answer'),
  },
  {
    question: t('homePage.faq.item09Question'),
    answer: t('homePage.faq.item09Answer'),
  },
  {
    question: t('homePage.faq.item10Question'),
    answer: t('homePage.faq.item10Answer'),
  },
])
</script>

<style scoped>
.home-view {
  position: relative;
  z-index: 1;
}

section {
  padding: 2rem 0;
}

/* Hero Section */
.hero {
  padding: 4rem 0;
  background: rgba(5, 5, 5, 0.6);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  color: #ffd700;
  font-size: 0.85rem;
}

.badge-new {
  background: rgba(0, 255, 0, 0.15);
  border-color: rgba(0, 255, 0, 0.4);
  color: #0f0;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 2.2rem;
  color: #ffd700;
  line-height: 1.1;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.title-main {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: #ffd700;
  line-height: 1.1;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.title-sub {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #ccc;
  font-weight: 300;
}

.hero-description {
  font-size: 1.1rem;
  color: #bbb;
  line-height: 1.7;
  max-width: 600px;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.feature-item {
  color: #ccc;
  font-size: 0.95rem;
  padding-left: 1rem;
  position: relative;
}

.feature-item::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ffd700;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-box {
  padding: 1rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  color: #ffd700;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.stat-text {
  font-size: 0.85rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: #ffd700;
  color: #000;
}

.btn-primary:hover {
  background: #ffc107;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 215, 0, 0.2);
  border-color: #ffd700;
}

.hero-video {
  position: relative;
}

.video-player {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(255, 215, 0, 0.2);
  background: #000;
  box-shadow: 
    0 0 30px rgba(255, 215, 0, 0.2),
    inset 0 0 30px rgba(255, 215, 0, 0.05);
}

.video-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  background: url('/images/bg.webp') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.video-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5, 5, 5, 0.6), rgba(10, 10, 10, 0.75));
  z-index: 1;
  pointer-events: none;
}

.play-button {
  position: relative;
  z-index: 2;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.9);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  border: 2px solid rgba(255, 215, 0, 0.8);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
  background: rgba(255, 215, 0, 1);
}

.video-iframe-container {
  position: relative;
  aspect-ratio: 16 / 9;
}

.video-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.close-video {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: #ffd700;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  border: 1px solid rgba(255, 215, 0, 0.3);
  line-height: 1;
}

.close-video:hover {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  transform: scale(1.1);
}

/* Featured Sections */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.header-content {
  flex: 1;
}

.section-label {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 4px;
  color: #ffd700;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.section-subtitle {
  color: #999;
  font-size: 0.95rem;
}

.section-link {
  color: #ffd700;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.section-link:hover {
  color: #ffc107;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.featured-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.featured-card:hover {
  border-color: #ffd700;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.25);
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.5);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.card-img.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 215, 0, 0.6);
  font-size: 1.2rem;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
}

.card-badge-top {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  z-index: 1;
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
}

.danger-friendly {
  background: rgba(0, 255, 0, 0.2);
  color: #0f0;
}

.danger-high {
  background: rgba(255, 0, 0, 0.2);
  color: #f44;
}

.danger-medium {
  background: rgba(255, 165, 0, 0.2);
  color: #fa5;
}

.danger-extreme {
  background: rgba(255, 0, 150, 0.2);
  color: #f09;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.3rem;
  color: #ffd700;
  margin-bottom: 0.75rem;
}

.card-desc {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  font-size: 0.75rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.card-meta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
}

.meta-item {
  font-size: 0.85rem;
  color: #999;
}

/* Game Info */
.game-info {
  background: rgba(5, 5, 5, 0.6);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 10px;
  padding: 2rem;
}

.info-card h3 {
  font-size: 1.3rem;
  color: #ffd700;
  margin-bottom: 1.5rem;
}

.info-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-list li {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
}

.info-list strong {
  color: #ffd700;
  margin-right: 0.5rem;
}

/* About Section */
.about-section {
  background: rgba(10, 10, 10, 0.6);
}

.about-content {
  background: rgba(15, 15, 15, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2.5rem;
}

.about-text {
  margin-bottom: 2rem;
}

.about-text p {
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.about-text strong {
  color: #ffd700;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.highlight-item {
  padding-left: 1.5rem;
  position: relative;
}

.highlight-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 4px;
  height: 1rem;
  background: #ffd700;
}

.highlight-item strong {
  display: block;
  color: #ffd700;
  margin-bottom: 0.25rem;
}

.highlight-item p {
  color: #999;
  font-size: 0.9rem;
  margin: 0;
}

/* FAQ Section */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
}

.faq-question {
  color: #ffd700;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.faq-answer {
  padding: 0;
}

.faq-answer p {
  color: #aaa;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.faq-answer strong {
  color: #ffd700;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-video {
    order: -1;
  }

  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-highlights {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .home-view section {
    padding: 0.5rem 0;
  }

  .hero {
    padding: 0.5rem 0;
  }

  .hero-layout {
    gap: 1rem;
  }

  .hero-content {
    gap: 0.6rem;
  }

  .hero-title {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .hero-features {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  .feature-item {
    font-size: 0.8rem;
    line-height: 1.2;
    padding-left: 0.5rem;
  }

  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }

  .stat-box {
    padding: 0.5rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-text {
    font-size: 0.8rem;
  }

  .hero-actions {
    gap: 0.6rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .section-header {
    margin-bottom: 1rem;
    gap: 0.6rem;
  }

  .section-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .section-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .section-label {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
    padding: 0.5rem;
  }

  .section-link {
    font-size: 0.8rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card-title {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .card-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .card-content {
    padding: 0.5rem;
  }

  .card-badge-top {
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem;
  }

  .card-meta {
    padding-top: 0.5rem;
    gap: 0.5rem;
  }

  .meta-item {
    font-size: 0.8rem;
  }

  .tag {
    font-size: 0.8rem;
  }

  .game-info {
    padding: 0.5rem 0;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .info-card {
    padding: 0.5rem;
  }

  .info-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  .info-list {
    gap: 0.6rem;
  }

  .info-list li {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .about-section {
    padding: 0.5rem 0;
  }

  .about-content {
    padding: 0.5rem;
  }

  .about-text {
    margin-bottom: 1rem;
  }

  .about-text p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .about-highlights {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .highlight-item {
    padding-left: 0.5rem;
  }

  .highlight-item strong {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  .highlight-item p {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .faq-list {
    gap: 0.6rem;
  }

  .faq-item {
    padding: 0.5rem;
  }

  .faq-question {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .faq-answer p {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}

</style>
