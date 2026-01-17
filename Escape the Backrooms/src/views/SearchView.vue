<template>
  <div class="search-view">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">Search Results</h1>
          <div class="search-box">
            <input
              type="text"
              class="search-input"
              placeholder="Search levels, maps, codes, entities..."
              v-model="searchQuery"
              @keyup.enter="performSearch"
              ref="searchInputRef"
            />
            <button class="search-button" @click="performSearch">Search</button>
          </div>
          <p v-if="searchQuery && results.length > 0" class="results-count">
            Found {{ results.length }} result{{ results.length > 1 ? 's' : '' }} for "{{ searchQuery }}"
          </p>
          <p v-else-if="searchQuery && results.length === 0" class="results-count no-results">
            No results found for "{{ searchQuery }}"
          </p>
        </div>
      </div>
    </section>

    <!-- Search Results -->
    <section class="search-results" v-if="searchQuery">
      <div class="container">
        <!-- Results by Category -->
        <div v-if="results.length > 0" class="results-container">
          <!-- Levels -->
          <div v-if="levelResults.length > 0" class="results-section">
            <h2 class="section-title">
              <span class="section-icon">📋</span>
              Levels ({{ levelResults.length }})
            </h2>
            <div class="results-grid">
              <a
                v-for="item in levelResults"
                :key="`level-${item.id}`"
                :href="`/levels/${item.addressBar}`"
                class="result-card"
              >
                <div class="card-image" v-if="item.imageUrl">
                  <img :src="item.imageUrl" :alt="item.imageAlt || item.title" loading="lazy" />
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ item.title }}</h3>
                  <p class="card-description">{{ item.description }}</p>
                  <div class="card-meta">
                    <span class="card-category">{{ item.category }}</span>
                    <div class="card-tags">
                      <span v-for="tag in item.tags?.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Maps -->
          <div v-if="mapResults.length > 0" class="results-section">
            <h2 class="section-title">
              <span class="section-icon">🗺️</span>
              Maps ({{ mapResults.length }})
            </h2>
            <div class="results-grid">
              <a
                v-for="item in mapResults"
                :key="`map-${item.id}`"
                :href="`/maps-keys/${item.addressBar}`"
                class="result-card"
              >
                <div class="card-image" v-if="item.imageUrl">
                  <img :src="item.imageUrl" :alt="item.imageAlt || item.title" loading="lazy" />
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ item.title }}</h3>
                  <p class="card-description">{{ item.description }}</p>
                  <div class="card-meta">
                    <span class="card-category">{{ item.category }}</span>
                    <div class="card-tags">
                      <span v-for="tag in item.tags?.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Entities -->
          <div v-if="entityResults.length > 0" class="results-section">
            <h2 class="section-title">
              <span class="section-icon">👹</span>
              Entities ({{ entityResults.length }})
            </h2>
            <div class="results-grid">
              <a
                v-for="item in entityResults"
                :key="`entity-${item.id}`"
                :href="`/wiki/entities/${item.slug}`"
                class="result-card"
              >
                <div class="card-image" v-if="item.imageUrl">
                  <img :src="item.imageUrl" :alt="item.imageAlt || item.name" loading="lazy" />
                </div>
                <div class="card-content">
                  <h3 class="card-title">{{ item.name }}</h3>
                  <p class="card-description">{{ item.description }}</p>
                  <div class="card-meta">
                    <span class="card-category" :class="item.dangerClass">{{ item.dangerLevel }}</span>
                    <div class="card-tags">
                      <span v-for="tag in item.tags?.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Codes -->
          <div v-if="codeResults.length > 0" class="results-section">
            <h2 class="section-title">
              <span class="section-icon">🔢</span>
              Codes & Solutions ({{ codeResults.length }})
            </h2>
            <div class="results-grid">
              <a
                v-for="item in codeResults"
                :key="`code-${item.id}`"
                href="/codes-solutions"
                class="result-card code-card"
              >
                <div class="card-content">
                  <h3 class="card-title">{{ item.title }}</h3>
                  <p class="card-description">{{ item.description }}</p>
                  <div class="card-meta">
                    <span class="code-value">{{ item.code }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-else class="no-results-container">
          <div class="no-results-content">
            <p class="no-results-text">Try searching for:</p>
            <ul class="suggestions-list">
              <li>Level names (e.g., "Level 0", "Level 1")</li>
              <li>Entity names (e.g., "Wanderer", "Bacteria")</li>
              <li>Map names (e.g., "Level 0 Map")</li>
              <li>Codes (e.g., "042", "729")</li>
              <li>Keywords (e.g., "key", "exit", "door")</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Empty State -->
    <section class="empty-state" v-else>
      <div class="container">
        <div class="empty-content">
          <h2>Start Searching</h2>
          <p>Enter a search term above to find levels, maps, entities, and codes.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import levelsData from '../data/levels.js'
import entitiesData from '../data/wiki/entities.js'
import mapsData from '../data/maps.js'

const route = useRoute()
const router = useRouter()
const searchInputRef = ref(null)

const searchQuery = ref('')

// Codes data (extracted from CodesSolutionsView structure)
const codesData = [
  { id: 1, title: 'Level 3 - Elevator Code', code: '042', description: 'The elevator code for Level 3 (Electrical Station). Enter this code in the elevator keypad to access different floors.', type: 'elevator' },
  { id: 2, title: 'Level 4 - Elevator Code', code: '729', description: 'Elevator code required to navigate between floors in Level 4 (Abandoned Office).', type: 'elevator' },
  { id: 3, title: 'Level 5 - Elevator Code', code: '314', description: 'The elevator code for Level 5 (Terror Hotel). This code is needed to access the upper floors of the hotel.', type: 'elevator' },
  { id: 4, title: 'Level 8 - Elevator Code', code: '826', description: 'Elevator code for Level 8 (Cave System). Use this to navigate the complex cave network.', type: 'elevator' },
  { id: 5, title: 'Level 1 - Door Code', code: '1234', description: 'Door code for Level 1. This code unlocks a secure door that blocks progress to the next area.', type: 'door' },
  { id: 6, title: 'Level 2 - Door Code', code: '5678', description: 'Door code required to unlock doors in Level 2 (Pipe Dreams).', type: 'door' },
  { id: 7, title: 'Level 4 - Door Code', code: '9012', description: 'Door code for Level 4. Unlocks the exit door to progress to the next level.', type: 'door' },
  { id: 8, title: 'Level 52 - Door Code', code: '3456', description: 'Door code for Level 52 (School Halls). Required to unlock the principal\'s office door.', type: 'door' },
  { id: 9, title: 'Level 94 - Computer Password', code: 'PASSWORD', description: 'Computer password for Level 94 (Motion). This password is needed to access the computer system and unlock important information.', type: 'computer' },
  { id: 10, title: 'Level 3999 - Computer Password', code: 'ESCAPE', description: 'The final computer password for Level 3999 (The True Ending). This password is crucial for completing the escape sequence.', type: 'computer' },
]

// Search function
const searchInText = (text, query) => {
  if (!text) return false
  return text.toLowerCase().includes(query.toLowerCase())
}

const performSearch = () => {
  if (!searchQuery.value.trim()) {
    return
  }
  // Update URL without navigation
  router.replace({ query: { q: searchQuery.value.trim() } })
}

// Filter results
const levelResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const query = searchQuery.value.trim().toLowerCase()
  
  return levelsData.filter(item => {
    return (
      searchInText(item.title, query) ||
      searchInText(item.description, query) ||
      item.tags?.some(tag => searchInText(tag, query)) ||
      searchInText(item.detailsHtml, query) ||
      searchInText(item.category, query)
    )
  })
})

const mapResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const query = searchQuery.value.trim().toLowerCase()
  
  return mapsData.filter(item => {
    return (
      searchInText(item.title, query) ||
      searchInText(item.description, query) ||
      item.tags?.some(tag => searchInText(tag, query)) ||
      searchInText(item.detailsHtml, query) ||
      searchInText(item.category, query) ||
      item.mapPoints?.some(point => 
        searchInText(point.title, query) || searchInText(point.content, query)
      )
    )
  })
})

const entityResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const query = searchQuery.value.trim().toLowerCase()
  
  return entitiesData.filter(item => {
    return (
      searchInText(item.name, query) ||
      searchInText(item.title, query) ||
      searchInText(item.description, query) ||
      item.tags?.some(tag => searchInText(tag, query)) ||
      searchInText(item.detailsHtml, query) ||
      searchInText(item.category, query) ||
      searchInText(item.dangerLevel, query) ||
      searchInText(item.species, query) ||
      searchInText(item.firstAppearsIn, query) ||
      item.otherNames?.some(name => searchInText(name, query)) ||
      item.locations?.some(loc => searchInText(loc, query))
    )
  })
})

const codeResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const query = searchQuery.value.trim().toLowerCase()
  
  return codesData.filter(item => {
    return (
      searchInText(item.title, query) ||
      searchInText(item.code, query) ||
      searchInText(item.description, query) ||
      searchInText(item.type, query)
    )
  })
})

const results = computed(() => {
  return [
    ...levelResults.value.map(item => ({ ...item, type: 'level' })),
    ...mapResults.value.map(item => ({ ...item, type: 'map' })),
    ...entityResults.value.map(item => ({ ...item, type: 'entity' })),
    ...codeResults.value.map(item => ({ ...item, type: 'code' })),
  ]
})

// Initialize from URL query
onMounted(() => {
  if (route.query.q) {
    searchQuery.value = route.query.q
  }
  // Focus search input
  if (searchInputRef.value) {
    searchInputRef.value.focus()
  }
})

// Watch for route query changes
watch(() => route.query.q, (newQuery) => {
  if (newQuery) {
    searchQuery.value = newQuery
  }
})
</script>

<style scoped>
.search-view {
  min-height: 100vh;
}

.page-title {
  margin-bottom: 2rem;
}

.search-box {
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.search-input {
  flex: 1;
  padding: 0.875rem 1.25rem;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  color: #fff;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  outline: none;
  border-color: #ffd700;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
}

.search-button {
  padding: 0.875rem 2rem;
  font-size: 1rem;
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.4);
  border-radius: 8px;
  color: #ffd700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.search-button:hover {
  background: rgba(255, 215, 0, 0.3);
  border-color: #ffd700;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.results-count {
  color: #ccc;
  font-size: 1rem;
  margin-top: 1rem;
}

.results-count.no-results {
  color: #999;
}

.search-results {
  padding: 3rem 0;
}

.results-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.results-section {
  margin-bottom: 2rem;
}

.section-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.75rem;
  color: #ffd700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-icon {
  font-size: 1.5rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.result-card {
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.result-card:hover {
  border-color: rgba(255, 215, 0, 0.4);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.1);
  transform: translateY(-2px);
}

.card-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  color: #ffd700;
  margin: 0;
  font-weight: 600;
}

.card-description {
  color: #ddd;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: auto;
}

.card-category {
  font-size: 0.85rem;
  color: #999;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.card-category.danger-friendly {
  color: #0a0;
  background: rgba(0, 170, 0, 0.1);
  border-color: rgba(0, 170, 0, 0.2);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  color: #ccc;
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.code-value {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  color: #ffd700;
  font-weight: bold;
  background: rgba(255, 215, 0, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 215, 0, 0.3);
  letter-spacing: 2px;
  display: inline-block;
}

.code-card .card-content {
  gap: 1rem;
}

.no-results-container {
  text-align: center;
  padding: 4rem 2rem;
}

.no-results-content {
  max-width: 600px;
  margin: 0 auto;
}

.no-results-text {
  color: #999;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.suggestions-list {
  list-style: none;
  padding: 0;
  text-align: left;
  display: inline-block;
}

.suggestions-list li {
  color: #ccc;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.suggestions-list li:last-child {
  border-bottom: none;
}

.empty-state {
  padding: 4rem 0;
}

.empty-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.empty-content h2 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 1rem;
}

.empty-content p {
  color: #999;
  font-size: 1.1rem;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .search-view section {
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

  .search-section {
    padding: 0.5rem 0;
  }

  .section-header {
    margin-bottom: 1rem;
    gap: 0.5rem;
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

  .section-icon {
    font-size: 1.3rem;
  }

  .results-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .result-card {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .card-content {
    gap: 0.5rem;
  }

  .card-title {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .card-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .card-meta {
    gap: 0.5rem;
  }

  .card-category {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .tag {
    font-size: 0.8rem;
    padding: 0.5rem;
  }

  .code-value {
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  .code-card .card-content {
    gap: 0.5rem;
  }

  .no-results-container {
    padding: 0.5rem;
  }

  .no-results-text {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
  }

  .suggestions-list li {
    padding: 0.5rem 0;
    font-size: 0.8rem;
  }

  .empty-state {
    padding: 0.5rem 0;
  }

  .empty-content h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .empty-content p {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}

</style>



