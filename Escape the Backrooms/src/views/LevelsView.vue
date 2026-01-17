<template>
  <div class="levels-view">
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Escape the Backrooms: All Levels List & Walkthroughs</h1>
          <p class="page-subtitle">Navigate the comprehensive directory of Escape the Backrooms levels. Browse all Escape the Backrooms level guides organized by Chapters, including the new v1.0 update, secret Escape the Backrooms levels, and endings. Select any Escape the Backrooms level to view maps, codes, and entity data.</p>
        </div>
      </div>
    </section>

    <section class="levels-content">
      <div class="content-wrapper">
        <!-- Sidebar: Category Navigation & All Levels -->
        <aside class="sidebar">
          <div class="sidebar-content">
            <!-- Category Navigation -->
            <div class="category-nav">
              <h2 class="sidebar-title">Escape the Backrooms Level Categories</h2>
              <nav class="nav-list">
                <a 
                  href="#" 
                  class="nav-item" 
                  v-for="category in categories" 
                  :key="category"
                  @click.prevent="scrollToCategory(category)"
                >
                  <span class="nav-name">{{ category }}</span>
                  <span class="nav-count">{{ groupedLevels[category]?.length || 0 }}</span>
                </a>
              </nav>
            </div>

          </div>
        </aside>

        <!-- Main Content: Categories -->
        <main class="main-content">
          <div class="container">
            <div 
              class="level-group" 
              v-for="category in categories" 
              :key="category"
              :id="getCategorySlug(category)"
            >
              <div class="group-header">
                <h2 class="group-title">{{ category }}</h2>
                <span class="category-count">{{ groupedLevels[category].length }} Escape the Backrooms levels</span>
              </div>
              <div class="levels-grid">
                <a 
                  :href="`/levels/${level.addressBar}`"
                  class="level-card" 
                  v-for="level in (groupedLevels[category] || [])" 
                  :key="level.id"
                  :id="`level-${level.id}`"
                >
                  <div class="level-media">
                    <img
                      v-if="level.imageUrl"
                      :src="level.imageUrl"
                      :alt="level.imageAlt || level.title"
                      class="level-thumb"
                      loading="lazy"
                    />
                    <div v-else class="level-thumb level-thumb-placeholder">
                      {{ level.title }}
                    </div>
                  </div>
                  <div class="level-body">
                    <h3 class="level-name">{{ level.title }}</h3>
                    <p class="level-desc">{{ level.description }}</p>
                    <div class="level-meta">
                      <span class="meta-tag" v-for="tag in level.tags" :key="tag">{{ tag }}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import levelsData from '../data/levels.js'

// 根据 category 字段分组
const groupedLevels = computed(() => {
  const groups = {}
  levelsData.forEach(level => {
    const category = level.category || 'Other'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(level)
  })
  return groups
})

// 获取所有分类名称
const categories = computed(() => {
  return Object.keys(groupedLevels.value)
})

// 生成分类的 slug（用于锚点）
const getCategorySlug = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-')
}

const scrollToCategory = (category) => {
  const slug = getCategorySlug(category)
  const element = document.getElementById(slug)
  if (element) {
    // 获取头部导航的高度
    const header = document.querySelector('.header')
    const headerHeight = header ? header.offsetHeight : 80
    
    // 计算目标位置，加上头部高度和额外间距
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight - 20 // 额外20px间距
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.levels-view {
  min-height: 100vh;
}


.levels-content {
  padding: 3rem 0;
}

.content-wrapper {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Sidebar Styles */
.sidebar {
  position: sticky;
  top: 80px; /* Header height + padding */
  width: 280px;
  flex-shrink: 0;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

/* Custom Scrollbar for Sidebar */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(255, 215, 0, 0.3);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 215, 0, 0.5);
}

.sidebar-content {
  position: relative;
}

.sidebar-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.3rem;
  color: #ffd700;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

/* Category Navigation */
.category-nav {
  width: 100%;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 6px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-item:hover {
  background: rgba(255, 215, 0, 0.15);
  border-color: rgba(255, 215, 0, 0.3);
  transform: translateX(3px);
}

.nav-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffd700;
}

.nav-count {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  color: #999;
  background: rgba(255, 215, 0, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}


/* Main Content Styles */
.main-content {
  flex: 1;
  min-width: 0;
}

.level-group {
  margin-bottom: 4rem;
  scroll-margin-top: 100px; /* 头部导航高度 + 间距，避免被遮挡 */
}

.group-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 215, 0, 0.2);
}

.group-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.group-subtitle {
  color: #999;
  font-size: 1rem;
}

.group-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.category-count {
  font-family: 'Courier New', Courier, monospace;
  color: #ffd700;
  font-size: 0.9rem;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 4px;
}

.levels-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.level-card {
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

.level-card:hover {
  border-color: #ffd700;
  background: rgba(30, 30, 30, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.25);
}

.level-media {
  position: relative;
  height: 170px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.08) 0%, rgba(0, 0, 0, 0.45) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.level-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.level-thumb-placeholder {
  font-family: 'Courier New', Courier, monospace;
  color: rgba(255, 215, 0, 0.85);
  font-weight: 600;
  padding: 1rem;
  text-align: center;
}

.level-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.level-name {
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
}

.level-desc {
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.level-meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.meta-tag {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  font-size: 0.75rem;
  border-radius: 4px;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .content-wrapper {
    flex-direction: column;
  }

  .sidebar {
    position: relative;
    top: 0;
    width: 100%;
    max-height: none;
    order: -1;
  }

  .levels-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .levels-view section {
    padding: 0.5rem 0;
  }

  .levels-content {
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

  .content-wrapper {
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .sidebar {
    padding: 0.5rem;
  }

  .sidebar-title {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
    padding-bottom: 0.5rem;
  }

  .nav-item {
    padding: 0.5rem;
  }

  .nav-name {
    font-size: 0.8rem;
  }

  .nav-count {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .level-group {
    margin-bottom: 1rem;
  }

  .group-header {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }

  .group-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .category-count {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .levels-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .level-body {
    padding: 0.5rem;
  }

  .level-name {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .level-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .level-meta {
    gap: 0.5rem;
  }

  .meta-tag {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .level-thumb-placeholder {
    padding: 0.5rem;
  }
}

</style>

