<template>
  <div class="map-detail-view" v-if="map">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="header-content">
          <div class="title-section">
            <h1 class="page-title">{{ map.title }}</h1>
            <div class="map-badges">
              <span class="badge" v-if="map.category">{{ map.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="detail-content">
      <div class="container">
        <div class="content-layout">
          <!-- Left: Main Content -->
          <main class="main-content">
            <!-- Map Image -->
            <div class="map-container">
              <div class="map-wrapper">
                <img
                  v-if="map.mapImageUrl"
                  :src="map.mapImageUrl"
                  :alt="map.imageAlt || map.title"
                  class="map-image"
                  loading="lazy"
                />
                <div v-else class="map-image placeholder">{{ map.title }}</div>
              </div>
            </div>

            <!-- Map Points -->
            <div class="map-points-container" v-if="map.mapPoints && map.mapPoints.length > 0">
              <div class="map-points-grid">
                <div
                  v-for="point in map.mapPoints"
                  :key="point.id"
                  class="map-point-card"
                >
                  <div class="map-point-header">
                    <h3 class="map-point-title">{{ point.title }}</h3>
                    <button class="map-point-menu">⋮</button>
                  </div>
                  <p class="map-point-content">{{ point.content }}</p>
                </div>
              </div>
            </div>

            <!-- Content Body with v-html -->
            <div class="content-body v-html-style" v-html="map.detailsHtml"></div>
          </main>

          <!-- Right: Sidebar -->
          <aside class="sidebar">
            <!-- Image Card -->
            <div class="image-card">
              <div class="image-header">{{ map.title }}</div>
              <div class="image-wrapper">
                <img
                  v-if="map.imageUrl"
                  :src="map.imageUrl"
                  :alt="map.imageAlt || map.title"
                  class="level-image"
                  loading="lazy"
                />
                <div v-else class="level-image placeholder">{{ map.title }}</div>
              </div>
            </div>

            <!-- Information Card -->
            <div class="info-card" v-if="map.category">
              <div class="info-header">
                <h3 class="info-title">Information</h3>
              </div>
              <div class="info-content">
                <div class="info-row" v-if="map.category">
                  <div class="info-label">Category</div>
                  <div class="info-value-text">{{ map.category }}</div>
                </div>
                <div class="info-row" v-if="map.tags && map.tags.length > 0">
                  <div class="info-label">Tags</div>
                  <div class="info-value-text">
                    <span v-for="tag in map.tags" :key="tag" class="tag-badge">{{ tag }}</span>
                  </div>
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
      <h1>Map Not Found</h1>
      <a href="/maps-keys" class="back-link">Back to Maps & Keys</a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import mapsData from '../data/maps.js'
import { useSEO } from '../seo/composables.js'

const route = useRoute()
const { setSEO, generateStructuredData, addStructuredData } = useSEO()

const map = computed(() => {
  const slug = route.params.slug
  return mapsData.find(m => m.addressBar === slug)
})

const updateSEO = () => {
  if (map.value && map.value.seo) {
    const seoData = {
      title: map.value.seo.title || map.value.title,
      description: map.value.seo.description || map.value.description,
      keywords: map.value.seo.keywords || '',
      image: map.value.imageUrl ? `https://escapethebackrooms.org${map.value.imageUrl}` : 'https://escapethebackrooms.org/images/logo.webp',
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
.map-detail-view {
  min-height: 100vh;
}

/* Map badges */
.map-badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.map-badges .badge {
  padding: 0.4rem 0.8rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 6px;
  color: #ffd700;
  font-size: 0.85rem;
  font-weight: 600;
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

.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.map-container {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
}

.map-wrapper {
  position: relative;
  width: 100%;
  padding: 1rem;
  background: rgba(10, 10, 10, 0.5);
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.map-image.placeholder {
  height: 400px;
  border: 1px dashed rgba(255, 215, 0, 0.25);
  display: grid;
  place-items: center;
  color: rgba(255, 215, 0, 0.85);
  font-family: 'Courier New', Courier, monospace;
}

/* Map Points */
.map-points-container {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2rem;
}

.map-points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.map-point-card {
  background: rgba(101, 67, 33, 0.8);
  border: 1px solid rgba(139, 115, 85, 0.5);
  border-radius: 8px;
  padding: 1.25rem;
  position: relative;
  transition: all 0.3s ease;
}

.map-point-card:hover {
  border-color: rgba(255, 215, 0, 0.4);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.map-point-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.map-point-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  color: #f5deb3;
  margin: 0;
  font-weight: 600;
}

.map-point-menu {
  background: none;
  border: none;
  color: #f5deb3;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  line-height: 1;
}

.map-point-menu:hover {
  opacity: 1;
}

.map-point-content {
  color: #f5deb3;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
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
  position: sticky;
  top: 100px;
  height: fit-content;
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

.tag-badge {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 4px;
  color: #ffd700;
  font-size: 0.85rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
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
  .map-detail-view section {
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

  .map-badges {
    gap: 0.5rem;
    margin-bottom: 0.6rem;
  }

  .map-badges .badge {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .detail-content {
    padding: 0.5rem 0;
  }

  .content-layout {
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .main-content {
    gap: 1rem;
  }

  .map-wrapper {
    padding: 0.5rem;
  }

  .map-points-container {
    padding: 0.5rem;
  }

  .map-points-grid {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .map-point-card {
    padding: 0.5rem;
  }

  .map-point-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .map-point-content {
    font-size: 0.8rem;
    line-height: 1.2;
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

  .tag-badge {
    padding: 0.5rem;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
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
