<template>
  <div class="entities-view">
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Escape the Backrooms Entity Database</h1>
          <p class="page-subtitle">Complete guide to all hostiles. Analyze behaviors, threat levels, and survival strategies for every entity in the game.</p>
        </div>
      </div>
    </section>

    <section class="entities-content">
      <div class="container">
        <div class="entities-grid">
          <a 
            :href="`/wiki/entities/${entity.addressBar}`" 
            class="entity-card" 
            v-for="entity in entitiesData" 
            :key="entity.id"
          >
            <div class="entity-media">
              <img
                v-if="entity.imageUrl"
                :src="entity.imageUrl"
                :alt="entity.imageAlt || entity.title"
                class="entity-thumb"
                loading="lazy"
              />
              <div v-else class="entity-thumb entity-thumb-placeholder">
                {{ entity.title }}
              </div>
              <div class="entity-danger" :class="entity.dangerClass">
                {{ entity.dangerLevel }}
              </div>
            </div>
            <div class="entity-body">
              <h3 class="entity-name">{{ entity.title }}</h3>
              <p class="entity-desc">{{ entity.description }}</p>
              <div class="entity-meta">
                <span v-if="entity.entityInfo?.species" class="meta-item">{{ entity.entityInfo.species }}</span>
                <span v-if="entity.entityInfo?.species && entity.entityInfo?.firstAppearsIn" class="meta-dot">•</span>
                <span v-if="entity.entityInfo?.firstAppearsIn" class="meta-item">{{ entity.entityInfo.firstAppearsIn }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import entitiesData from '../../data/wiki/entities.js'
</script>

<style scoped>
.entities-view {
  min-height: 100vh;
}


.entities-content {
  padding: 3rem 0;
}

.entities-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.entity-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.entity-card:hover {
  border-color: #ffd700;
  background: rgba(30, 30, 30, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.25);
}

.entity-media {
  position: relative;
  height: 170px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(0, 0, 0, 0.45) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.entity-thumb {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.entity-thumb-placeholder {
  font-family: 'Courier New', Courier, monospace;
  color: rgba(255, 215, 0, 0.85);
  font-weight: 600;
  padding: 1rem;
  text-align: center;
}

.entity-danger {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 600;
  backdrop-filter: blur(8px);
}

.danger-friendly {
  background: rgba(0, 255, 0, 0.2);
  color: #0f0;
}

.danger-moderate {
  background: rgba(255, 165, 0, 0.2);
  color: #fa5;
}

.danger-high {
  background: rgba(255, 0, 0, 0.2);
  color: #f44;
}

.danger-extreme {
  background: rgba(255, 0, 150, 0.2);
  color: #f09;
}

.danger-low {
  background: rgba(0, 255, 0, 0.2);
  color: #0f0;
}

.entity-body {
  padding: 1.25rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.entity-name {
  font-size: 1.15rem;
  color: #ffd700;
  margin: 0;
}

.entity-desc {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.entity-meta {
  margin-top: auto;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(255, 215, 0, 0.12);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #aaa;
  font-size: 0.9rem;
}

.meta-item {
  color: #ffd700;
}

.meta-dot {
  color: #777;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .entities-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .entities-view section {
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

  .entities-content {
    padding: 0.5rem 0;
  }

  .entities-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .entity-body {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .entity-name {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .entity-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .entity-meta {
    padding-top: 0.5rem;
    gap: 0.5rem;
    font-size: 0.8rem;
  }

  .entity-danger {
    padding: 0.5rem;
    font-size: 0.8rem;
    top: 0.5rem;
    right: 0.5rem;
  }

  .entity-thumb-placeholder {
    padding: 0.5rem;
  }
}

</style>

