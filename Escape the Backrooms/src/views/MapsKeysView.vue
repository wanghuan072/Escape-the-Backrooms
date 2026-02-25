<template>
  <div class="maps-keys-view">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">{{ $t('mapsPage.hero.title') }}</h1>
          <p class="page-subtitle">{{ $t('mapsPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Maps Section -->
    <section class="maps-section">
      <div class="container">
          <div class="section-header">
          <h2 class="section-title">{{ $t('mapsPage.mapsSection.title') }}</h2>
          <p class="section-subtitle">{{ $t('mapsPage.mapsSection.subtitle') }}</p>
          </div>
          <div class="maps-grid">
            <a 
            v-for="map in mapsData"
              :key="map.id" 
            :href="getLocalizedPath(`/maps-keys/${map.addressBar}`)"
              class="map-card"
            >
              <div class="map-image">
              <img
                v-if="map.imageUrl"
                :src="map.imageUrl"
                :alt="map.imageAlt || map.title"
                class="map-thumb"
                loading="lazy"
              />
              <div v-else class="map-thumb placeholder">{{ map.title }}</div>
              </div>
              <div class="map-content">
                <h3 class="map-title">{{ map.title }}</h3>
                <p class="map-desc">{{ map.description }}</p>
                <div class="map-meta">
                <span class="map-category">{{ map.category }}</span>
                <span class="map-tags" v-if="map.tags && map.tags.length > 0">
                  <span v-for="tag in map.tags.slice(0, 2)" :key="tag" class="map-tag">{{ tag }}</span>
                  </span>
                </div>
              </div>
            </a>
        </div>
      </div>
    </section>

    <!-- Keys Section -->
    <section class="keys-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ $t('mapsPage.keysSection.title') }}</h2>
          <p class="section-subtitle">{{ $t('mapsPage.keysSection.subtitle') }}</p>
        </div>

        <!-- Description Card -->
        <div class="keys-intro">
          <div class="intro-icon">🔑</div>
          <div class="intro-content">
            <h3 class="intro-title">{{ $t('mapsPage.keysSection.introTitle') }}</h3>
            <p class="intro-text">{{ $t('mapsPage.keysSection.introText') }}</p>
          </div>
        </div>

        <!-- Keys Grid -->
        <div class="keys-grid">
          <!-- Level 0 Key -->
          <div class="key-card">
            <div class="key-card-header">
              <div class="key-level">
                <span class="key-icon">🔑</span>
                <div>
                  <h3 class="key-title">{{ $t('mapsPage.keysSection.level0.title') }}</h3>
                  <span class="key-count">{{ $t('mapsPage.keysSection.level0.count') }}</span>
                </div>
              </div>
            </div>
            <div class="key-card-body">
              <div class="key-info">
                <div class="info-item">
                  <span class="info-label">{{ $t('mapsPage.keysSection.labels.location') }}</span>
                  <span class="info-value">{{ $t('mapsPage.keysSection.level0.location') }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ $t('mapsPage.keysSection.labels.prerequisite') }}</span>
                  <span class="info-value">{{ $t('mapsPage.keysSection.level0.prerequisite') }}</span>
                </div>
              </div>
              <div class="key-steps">
                <h4 class="steps-title">{{ $t('mapsPage.keysSection.labels.collectionSteps') }}</h4>
                <ol class="steps-list">
                  <li>{{ $t('mapsPage.keysSection.level0.steps.step1') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level0.steps.step2') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level0.steps.step3') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level0.steps.step4') }}</li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Level 1 Keys -->
          <div class="key-card">
            <div class="key-card-header">
              <div class="key-level">
                <span class="key-icon">🔑</span>
                <div>
                  <h3 class="key-title">{{ $t('mapsPage.keysSection.level1.title') }}</h3>
                  <span class="key-count">{{ $t('mapsPage.keysSection.level1.count') }}</span>
                </div>
              </div>
            </div>
            <div class="key-card-body">
              <div class="key-info">
                <div class="info-item">
                  <span class="info-label">{{ $t('mapsPage.keysSection.labels.location') }}</span>
                  <span class="info-value">{{ $t('mapsPage.keysSection.level1.location') }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ $t('mapsPage.keysSection.labels.totalRequired') }}</span>
                  <span class="info-value">{{ $t('mapsPage.keysSection.level1.totalRequired') }}</span>
                </div>
              </div>
              <div class="key-steps">
                <h4 class="steps-title">{{ $t('mapsPage.keysSection.labels.collectionSteps') }}</h4>
                <ol class="steps-list">
                  <li>{{ $t('mapsPage.keysSection.level1.steps.step1') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level1.steps.step2') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level1.steps.step3') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level1.steps.step4') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level1.steps.step5') }}</li>
                </ol>
              </div>
          </div>
        </div>

          <!-- Level 5 Keys -->
          <div class="key-card">
            <div class="key-card-header">
              <div class="key-level">
                <span class="key-icon">🔑</span>
                <div>
                  <h3 class="key-title">{{ $t('mapsPage.keysSection.level5.title') }}</h3>
                  <span class="key-count">{{ $t('mapsPage.keysSection.level5.count') }}</span>
                </div>
              </div>
            </div>
            <div class="key-card-body">
              <div class="key-info">
                <div class="info-item">
                  <span class="info-label">{{ $t('mapsPage.keysSection.labels.location') }}</span>
                  <span class="info-value">{{ $t('mapsPage.keysSection.level5.location') }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ $t('mapsPage.keysSection.labels.obtainMethod') }}</span>
                  <span class="info-value">{{ $t('mapsPage.keysSection.level5.obtainMethod') }}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">{{ $t('mapsPage.keysSection.labels.required') }}</span>
                  <span class="info-value">{{ $t('mapsPage.keysSection.level5.required') }}</span>
                </div>
              </div>
              <div class="key-steps">
                <h4 class="steps-title">{{ $t('mapsPage.keysSection.labels.collectionSteps') }}</h4>
                <ol class="steps-list">
                  <li>{{ $t('mapsPage.keysSection.level5.steps.step1') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level5.steps.step2') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level5.steps.step3') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level5.steps.step4') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level5.steps.step5') }}</li>
                  <li>{{ $t('mapsPage.keysSection.level5.steps.step6') }}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMapsData } from '../composables/useMapsData.js'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const { data: mapsData, loadData } = useMapsData()

// Load data
onMounted(async () => {
  await nextTick()
  await loadData()
})
</script>

<style scoped>
.maps-keys-view {
  min-height: 100vh;
}


.maps-section {
  padding: 3rem 0;
}

.keys-section {
  padding: 3rem 0;
  background: rgba(5, 5, 5, 0.6);
  border-top: 2px solid rgba(255, 215, 0, 0.2);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #999;
  font-size: 1rem;
}

.maps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.map-card {
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

.map-card:hover {
  border-color: #ffd700;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.25);
}

.map-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.5);
}

.map-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.map-thumb.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Courier New', Courier, monospace;
  color: rgba(255, 215, 0, 0.6);
  font-size: 1.2rem;
}

.map-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.map-title {
  font-size: 1.3rem;
  color: #ffd700;
  margin-bottom: 0.75rem;
  font-family: 'Courier New', Courier, monospace;
}

.map-desc {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.map-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.map-category {
  padding: 0.3rem 0.6rem;
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  font-size: 0.75rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.map-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.map-tag {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  font-size: 0.75rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

/* Keys Intro */
.keys-intro {
  max-width: 800px;
  margin: 0 auto 3rem;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.intro-icon {
  font-size: 3rem;
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.intro-content {
  flex: 1;
}

.intro-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #ffd700;
  margin: 0 0 0.75rem 0;
}

.intro-text {
  color: #ccc;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
}

/* Keys Grid */
.keys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.key-card {
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.key-card:hover {
  border-color: rgba(255, 215, 0, 0.4);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.15);
  transform: translateY(-2px);
}

.key-card-header {
  background: rgba(255, 215, 0, 0.08);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  padding: 1.5rem;
}

.key-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.key-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  flex-shrink: 0;
}

.key-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #ffd700;
  margin: 0 0 0.25rem 0;
  font-weight: 600;
}

.key-count {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.15);
  color: #ffd700;
  font-size: 0.85rem;
  border-radius: 12px;
  font-weight: 600;
}

.key-card-body {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.key-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-label {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  color: #ffd700;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  color: #ddd;
  font-size: 0.95rem;
  line-height: 1.6;
}

.key-steps {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
}

.steps-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  color: #ffd700;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.steps-list {
  margin: 0;
  padding-left: 1.5rem;
  color: #ccc;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.steps-list li {
  color: #ddd;
  font-size: 0.9rem;
  line-height: 1.6;
  padding-left: 0.5rem;
}

.steps-list li::marker {
  color: #ffd700;
  font-weight: bold;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .maps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .keys-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .maps-keys-view section {
    padding: 0.5rem 0;
  }

  .maps-section {
    padding: 0.5rem 0;
  }

  .keys-section {
    padding: 0.5rem 0;
  }

  .page-hero {
    padding: 0.5rem 0;
  }

  .page-title {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .page-subtitle {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .section-header {
    margin-bottom: 1rem;
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

  .maps-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .map-content {
    padding: 0.5rem;
  }

  .map-title {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .map-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .map-meta {
    gap: 0.5rem;
  }

  .map-category {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .map-tag {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .keys-intro {
    padding: 0.5rem;
    gap: 0.5rem;
    margin-bottom: 1rem;
    flex-direction: column;
    text-align: center;
  }

  .intro-icon {
    width: 60px;
    height: 60px;
    font-size: 2rem;
  }

  .intro-title {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  .intro-text {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .keys-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .key-card-header {
    padding: 0.5rem;
  }

  .key-level {
    gap: 0.5rem;
  }

  .key-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  .key-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .key-count {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .key-card-body {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .key-info {
    gap: 0.5rem;
  }

  .info-item {
    gap: 0.5rem;
  }

  .info-label {
    font-size: 0.9rem;
  }

  .info-value {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .key-steps {
    padding-top: 0.5rem;
  }

  .steps-title {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  .steps-list {
    padding-left: 1rem;
    gap: 0.5rem;
  }

  .steps-list li {
    font-size: 0.8rem;
    line-height: 1.2;
    padding-left: 0.5rem;
  }
}

</style>
