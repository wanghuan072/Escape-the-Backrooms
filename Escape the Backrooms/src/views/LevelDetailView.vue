<template>
  <div class="level-detail-view" v-if="level">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="header-content">
          <div class="title-section">
            <h1 class="page-title">{{ level.pageTitle }}</h1>

            <div class="quote" v-if="level.quote">
              <div class="quote-text">{{ level.quote }}</div>
              <div class="quote-by" v-if="level.quoteBy">— {{ level.quoteBy }}</div>
            </div>
          </div>

          <div class="header-badges">
            <div class="badge" v-if="level.survivalDifficulty">
              <span class="badge-label">Survival Difficulty</span>
              <span class="badge-value">{{ level.survivalDifficulty }}</span>
            </div>
            <div class="badge" v-if="level.sanityDanger">
              <span class="badge-label">Sanity Danger</span>
              <span class="badge-value">{{ level.sanityDanger }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="detail-content">
      <div class="container">
        <div class="content-layout">
          <!-- Left -->
          <main class="main-content">
            <div class="content-body v-html-style" v-html="level.detailsHtml"></div>
          </main>

          <!-- Right -->
          <aside class="sidebar">
            <!-- Image Card -->
            <div class="image-card">
              <div class="image-header">{{ level.pageTitle }}</div>
              <div class="image-wrapper">
                <img
                  v-if="level.imageUrl"
                  :src="level.imageUrl"
                  :alt="level.imageAlt || level.title"
                  class="level-image"
                  loading="lazy"
                />
                <div v-else class="level-image placeholder">{{ level.title }}</div>
              </div>
            </div>

            <!-- Information -->
            <div class="info-card" v-if="level.info">
              <div class="info-header">
                <h3 class="info-title">Escape the Backrooms: Information</h3>
              </div>
              <div class="info-content">
                <div class="info-row" v-if="level.info.numberAfterLevel">
                  <div class="info-label">Number or Word after "Level"</div>
                  <div class="info-value-text">{{ level.info.numberAfterLevel }}</div>
                </div>
                <div class="info-row" v-if="level.info.subName">
                  <div class="info-label">Sub-Name</div>
                  <div class="info-value-text">{{ level.info.subName }}</div>
                </div>
                <div class="info-row" v-if="level.info.orderInPath">
                  <div class="info-label">Order in path level is apart of</div>
                  <div class="info-value-text">{{ level.info.orderInPath }}</div>
                </div>
              </div>
            </div>

            <!-- The Hub Mode Information -->
            <div class="info-card" v-if="level.hubModeInfo">
              <div class="info-header">
                <h3 class="info-title">The Hub Mode Information</h3>
              </div>
              <div class="info-content">
                <div class="info-row" v-if="level.hubModeInfo.name">
                  <div class="info-label">Name</div>
                  <div class="info-value-text">{{ level.hubModeInfo.name }}</div>
                </div>
                <div class="info-row" v-if="level.hubModeInfo.description">
                  <div class="info-label">Description</div>
                  <div class="info-value-text">{{ level.hubModeInfo.description }}</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>Level Not Found</h1>
      <a href="/levels" class="back-link">Back to Levels List</a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import levelsData from '../data/levels.js'
import { useSEO } from '../seo/composables.js'

const route = useRoute()
const { setSEO, generateStructuredData, addStructuredData } = useSEO()

const level = computed(() => {
  const slug = route.params.slug
  return levelsData.find(l => l.addressBar === slug)
})

const updateSEO = () => {
  if (level.value && level.value.seo) {
    const seoData = {
      title: level.value.seo.title || level.value.title,
      description: level.value.seo.description || level.value.description,
      keywords: level.value.seo.keywords || '',
      image: level.value.imageUrl ? `https://escapethebackrooms.org${level.value.imageUrl}` : 'https://escapethebackrooms.org/images/logo.webp',
      type: 'article'
    }
    setSEO(seoData)
    
    // 添加结构化数据
    const structuredData = generateStructuredData('Article')
    addStructuredData(structuredData)
  }
}

onMounted(() => {
  updateSEO()
})

watch(() => route.params.slug, () => {
  updateSEO()
})
</script>

<style scoped>
.level-detail-view {
  min-height: 100vh;
}

/* Quote styles */
.quote {
  max-width: 900px;
  padding-left: 1rem;
  border-left: 3px solid rgba(255, 215, 0, 0.35);
}

.quote-text {
  color: #ddd;
  font-style: italic;
  line-height: 1.7;
}

.quote-by {
  margin-top: 0.5rem;
  color: #999;
  font-size: 0.95rem;
}

/* Header badges */
.header-badges {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 280px;
}

.header-badges .badge {
  padding: 0.6rem 0.9rem;
  background: rgba(255, 215, 0, 0.08);
  border: 1px solid rgba(255, 215, 0, 0.22);
  border-radius: 10px;
}

.badge-label {
  display: block;
  color: #bbb;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}

.badge-value {
  color: #ffd700;
  font-weight: 600;
  font-size: 0.95rem;
}


.detail-content {
  padding: 3rem 0;
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-body {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2.5rem;
  color: #fff;
  line-height: 1.8;
}


.sidebar {
  /* position: sticky;
  top: 100px;
  height: fit-content; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.image-card,
.info-card {
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
}

.image-header {
  background: rgba(255, 215, 0, 0.1);
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #ffd700;
  font-size: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  font-family: 'Courier New', Courier, monospace;
}

.image-wrapper {
  padding: 1rem;
  background: rgba(10, 10, 10, 0.5);
}

.level-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.level-image.placeholder {
  height: 220px;
  border: 1px dashed rgba(255, 215, 0, 0.25);
  display: grid;
  place-items: center;
  color: rgba(255, 215, 0, 0.85);
  font-family: 'Courier New', Courier, monospace;
}

.info-header {
  background: rgba(255, 215, 0, 0.1);
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.info-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffd700;
  margin: 0;
}

.info-content {
  padding: 1.25rem 1.5rem;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
}

.info-row:last-child {
  margin-bottom: 0;
}

.info-label {
  font-weight: 600;
  color: #ffd700;
  font-size: 0.95rem;
  font-family: 'Courier New', Courier, monospace;
}

.info-value-text {
  color: #fff;
  font-size: 0.95rem;
  line-height: 1.6;
}

.compact-list {
  margin: 0;
  padding-left: 1.25rem;
  color: #ddd;
}

.compact-list li {
  margin: 0.25rem 0;
}


.not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 0;
}

.not-found h1 {
  color: #ffd700;
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 6px;
  color: #ffd700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.back-link:hover {
  background: rgba(255, 215, 0, 0.2);
  border-color: #ffd700;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .sidebar {
    position: relative;
    top: 0;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .level-detail-view section {
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

  .quote {
    padding-left: 0.5rem;
    margin-bottom: 0.6rem;
  }

  .quote-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .quote-by {
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  .header-badges {
    gap: 0.5rem;
    min-width: auto;
  }

  .header-badges .badge {
    padding: 0.5rem;
  }

  .badge-label {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .badge-value {
    font-size: 0.8rem;
  }

  .detail-content {
    padding: 0.5rem 0;
  }

  .content-layout {
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .content-body {
    padding: 0.5rem;
  }

  .sidebar {
    gap: 1rem;
  }

  .image-header {
    padding: 0.5rem;
    font-size: 0.9rem;
  }

  .image-wrapper {
    padding: 0.5rem;
  }

  .info-header {
    padding: 0.5rem;
  }

  .info-title {
    font-size: 1.1rem;
  }

  .info-content {
    padding: 0.5rem;
  }

  .info-row {
    gap: 0.5rem;
    margin-bottom: 0.6rem;
  }

  .info-label {
    font-size: 0.9rem;
  }

  .info-value-text {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .not-found {
    padding: 0.5rem 0;
  }

  .not-found h1 {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }

  .back-link {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}

</style>


