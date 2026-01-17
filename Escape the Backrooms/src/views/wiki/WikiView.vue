<template>
  <div class="wiki-view">
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Escape the Backrooms Database & Archives</h1>
          <p class="page-subtitle">The comprehensive knowledge base. Browse classified data on Entities, Items, Game Mechanics, and Achievements.</p>
        </div>
      </div>
    </section>

    <section class="wiki-list-section">
      <div class="container">
        <div class="wiki-sections">
          <a
            v-for="section in wikiSections"
            :key="section.id"
            :href="section.path"
            class="wiki-section-card"
          >
            <div class="section-header">
              <h3 class="section-title">{{ section.title }}</h3>
              <span class="section-count">{{ section.count }} entries</span>
            </div>
            <p class="section-desc">{{ section.description }}</p>
            <div class="section-footer">
              <span class="section-link">View Details →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import entitiesData from '../../data/wiki/entities.js'

const wikiSections = computed(() => {
  return [
    {
      id: 1,
      title: 'Entities',
      description: 'Complete database of all entities, their behaviors, and survival strategies',
      path: '/wiki/entities',
      count: entitiesData.length,
    },
    // Future sections can be added here
    // {
    //   id: 2,
    //   title: 'Items',
    //   description: 'All items, tools, and collectibles found throughout the Backrooms',
    //   path: '/wiki/items',
    //   count: 0,
    // },
  ]
})
</script>

<style scoped>
.wiki-view {
  min-height: 100vh;
}


.wiki-list-section {
  padding: 3rem 0;
}

.wiki-sections {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.wiki-section-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  padding: 2rem;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.wiki-section-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: rgba(255, 215, 0, 0.3);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.wiki-section-card:hover {
  border-color: #ffd700;
  background: rgba(30, 30, 30, 0.9);
  transform: translateX(4px);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.15);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.section-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #ffd700;
  margin: 0;
  font-weight: 600;
}

.section-count {
  padding: 0.35rem 0.85rem;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  font-size: 0.85rem;
  border-radius: 4px;
  font-weight: 600;
  white-space: nowrap;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.section-desc {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
  flex: 1;
}

.section-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
}

.section-link {
  color: #ffd700;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.3s ease;
  display: inline-block;
}

.wiki-section-card:hover .section-link {
  transform: translateX(4px);
}

@media (max-width: 900px) {
  .wiki-sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .wiki-sections {
    grid-template-columns: 1fr;
  }
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .wiki-sections {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .wiki-view section {
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

  .wiki-list-section {
    padding: 0.5rem 0;
  }

  .wiki-sections {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .wiki-section-card {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .section-header {
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .section-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .section-count {
    padding: 0.5rem;
    font-size: 0.8rem;
    align-self: flex-start;
  }

  .section-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .section-footer {
    padding-top: 0.5rem;
  }

  .section-link {
    font-size: 0.8rem;
  }
}
</style>

