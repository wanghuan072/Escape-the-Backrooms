<template>
  <div class="guide-detail-view" v-if="guide">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="header-content">
          <div class="title-section">
            <h1 class="page-title">{{ guide.title }}</h1>
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
            <div class="content-body v-html-style" v-html="guide.detailsHtml"></div>
          </main>

          <!-- Right -->
          <aside class="sidebar">
            <!-- Image Card -->
            <div class="image-card">
              <div class="image-header">{{ guide.title }}</div>
              <div class="image-wrapper">
                <img
                  v-if="guide.imageUrl"
                  :src="guide.imageUrl"
                  :alt="guide.imageAlt || guide.title"
                  class="guide-image"
                  loading="lazy"
                />
                <div v-else class="guide-image placeholder">{{ guide.title }}</div>
              </div>
            </div>

            <!-- Information -->
            <div class="info-card">
              <div class="info-header">
                <h3 class="info-title">Information</h3>
              </div>
              <div class="info-content">
                <div class="info-row" v-if="guide.category">
                  <div class="info-label">Category</div>
                  <div class="info-value-text">{{ guide.category }}</div>
                </div>
                <div class="info-row" v-if="guide.tags && guide.tags.length > 0">
                  <div class="info-label">Tags</div>
                  <div class="info-value-text">
                    <span class="tag-item" v-for="tag in guide.tags" :key="tag">{{ tag }}</span>
                  </div>
                </div>
                <div class="info-row" v-if="guide.description">
                  <div class="info-label">Description</div>
                  <div class="info-value-text">{{ guide.description }}</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- Back Link -->
    <section class="back-section">
      <div class="container">
        <a href="/guides" class="back-link">← Back to Guides List</a>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>Guide Not Found</h1>
      <a href="/guides" class="back-link">Back to Guides List</a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import guidesData from '../data/guides.js'
import { useSEO } from '../seo/composables.js'

const route = useRoute()
const { setSEO, generateStructuredData, addStructuredData } = useSEO()

const guide = computed(() => {
  const slug = route.params.slug
  return guidesData.find(g => g.addressBar === slug)
})

const updateSEO = () => {
  if (guide.value && guide.value.seo) {
    const seoData = {
      title: guide.value.seo.title || guide.value.title,
      description: guide.value.seo.description || guide.value.description,
      keywords: guide.value.seo.keywords || '',
      image: guide.value.imageUrl ? `https://escapethebackrooms.org${guide.value.imageUrl}` : 'https://escapethebackrooms.org/images/logo.webp',
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
.guide-detail-view {
  min-height: 100vh;
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

.content-body :deep(h2) {
  color: #ffd700;
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', Courier, monospace;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 215, 0, 0.2);
}

.content-body :deep(h3) {
  color: #ffd700;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-family: 'Courier New', Courier, monospace;
}

.content-body :deep(h4) {
  color: #ffd700;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.content-body :deep(p) {
  color: #ddd;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.content-body :deep(ul),
.content-body :deep(ol) {
  color: #ddd;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.content-body :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.8;
}

.content-body :deep(strong) {
  color: #ffd700;
  font-weight: 600;
}

.content-body :deep(a) {
  color: #ffd700;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.content-body :deep(a:hover) {
  color: #ffc107;
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

.guide-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.guide-image.placeholder {
  height: 220px;
  border: 1px dashed rgba(255, 215, 0, 0.25);
  display: grid;
  place-items: center;
  color: rgba(255, 215, 0, 0.85);
  font-family: 'Courier New', Courier, monospace;
  padding: 1rem;
  text-align: center;
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

.tag-item {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  font-size: 0.85rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.back-section {
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
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
  font-family: 'Courier New', Courier, monospace;
}

.back-link:hover {
  background: rgba(255, 215, 0, 0.2);
  border-color: #ffd700;
  transform: translateX(-3px);
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
  .guide-detail-view section {
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

  .content-body :deep(h2) {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-top: 1rem;
    margin-bottom: 0.6rem;
  }

  .content-body :deep(h3) {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-top: 0.6rem;
    margin-bottom: 0.5rem;
  }

  .content-body :deep(h4) {
    font-size: 0.9rem;
    line-height: 1.2;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .content-body :deep(p) {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .content-body :deep(ul),
  .content-body :deep(ol) {
    margin-bottom: 0.6rem;
    padding-left: 0.5rem;
  }

  .content-body :deep(li) {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
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

  .tag-item {
    font-size: 0.8rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .back-section {
    padding: 1rem 0;
  }

  .back-link {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .not-found {
    padding: 0.5rem 0;
  }

  .not-found h1 {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }
}
</style>

