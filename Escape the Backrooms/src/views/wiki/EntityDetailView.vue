<template>
  <div class="entity-detail-view" v-if="entity">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="header-content">
          <div class="title-section">
            <h1 class="page-title">{{ entity.title }}</h1>
            <div class="danger-level">
              <span class="danger-label">Danger Level:</span>
              <span class="danger-value" :class="entity.dangerClass">{{ entity.dangerLevel }}</span>
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
            <div class="content-body v-html-style" v-html="entity.detailsHtml"></div>
          </main>

          <!-- Right: Sidebar -->
          <aside class="sidebar">
            <!-- Entity Image -->
            <div class="image-card">
              <div class="image-header">{{ entity.entityInfo?.name || entity.title }}</div>
              <div class="image-wrapper">
                <img :src="entity.imageUrl" :alt="entity.imageAlt" class="entity-image" />
              </div>
            </div>

            <!-- Entity Information -->
            <div class="info-card" v-if="entity.entityInfo">
              <div class="info-header">
                <h3 class="info-title">Entity Information</h3>
              </div>
              <div class="info-content">
                <div class="info-row">
                  <div class="info-label">Name</div>
                  <div class="info-value-text">{{ entity.entityInfo.name }}</div>
                </div>

                <div class="info-row" v-if="entity.entityInfo.otherNames && entity.entityInfo.otherNames.length > 0">
                  <div class="info-label">Other Names</div>
                  <div class="info-value-text">
                    <div v-for="(name, index) in entity.entityInfo.otherNames" :key="index" class="other-name-item">
                      {{ name }}
                    </div>
                  </div>
                </div>

                <div class="info-row">
                  <div class="info-label">Species</div>
                  <div class="info-value-text">{{ entity.entityInfo.species }}</div>
                </div>

                <div class="info-row">
                  <div class="info-label">First Appears in</div>
                  <div class="info-value-text">{{ entity.entityInfo.firstAppearsIn }}</div>
                </div>

                <div class="info-row" v-if="entity.entityInfo.portrayedBy">
                  <div class="info-label">Portrayed by</div>
                  <div class="info-value-text">{{ entity.entityInfo.portrayedBy }}</div>
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
      <h1>Entity Not Found</h1>
      <a href="/wiki/entities" class="back-link">Back to Entities List</a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import entitiesData from '../../data/wiki/entities.js'
import { useSEO } from '../../seo/composables.js'

const route = useRoute()
const { setSEO, generateStructuredData, addStructuredData } = useSEO()

const entity = computed(() => {
  const slug = route.params.slug
  return entitiesData.find(e => e.addressBar === slug)
})

const updateSEO = () => {
  if (entity.value && entity.value.seo) {
    const seoData = {
      title: entity.value.seo.title || entity.value.title,
      description: entity.value.seo.description || entity.value.description,
      keywords: entity.value.seo.keywords || '',
      image: entity.value.imageUrl ? `https://escapethebackrooms.org${entity.value.imageUrl}` : 'https://escapethebackrooms.org/images/logo.webp',
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
.entity-detail-view {
  min-height: 100vh;
}

/* Danger level */
.danger-level {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.danger-label {
  color: #ccc;
}

.danger-value {
  font-weight: 600;
}

.danger-value.danger-friendly {
  color: #0f0;
}

.danger-value.danger-moderate {
  color: #fa5;
}

.danger-value.danger-high {
  color: #f44;
}

.danger-value.danger-extreme {
  color: #f09;
}


/* Main Content */
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

/* Left: Main Content */
.main-content {
  min-width: 0;
}

.content-body {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2.5rem;
  color: #fff;
  line-height: 1.8;
}


/* Right: Sidebar */
.sidebar {
  /* position: sticky;
  top: 100px;
  height: fit-content; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Image Card */
.image-card {
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
  position: relative;
}

.entity-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* Info Card */
.info-card {
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-content {
  padding: 1.5rem;
}

.info-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
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

.other-name-item {
  margin-bottom: 0.25rem;
}

.other-name-item:last-child {
  margin-bottom: 0;
}

/* Not Found */
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
  .entity-detail-view section {
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

  .danger-level {
    font-size: 0.8rem;
    gap: 0.5rem;
    margin-bottom: 0.6rem;
  }

  .danger-label {
    font-size: 0.8rem;
  }

  .danger-value {
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

  .other-name-item {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
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

