<template>
  <div class="search-view">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">{{ $t('searchPage.hero.title') }}</h1>
          <div class="search-box">
            <input
              type="text"
              class="search-input"
              :placeholder="$t('searchPage.hero.placeholder')"
              v-model="searchQuery"
              @keyup.enter="performSearch"
              ref="searchInputRef"
            />
            <button class="search-button" @click="performSearch">{{ $t('searchPage.hero.button') }}</button>
          </div>
          <p v-if="searchQuery && results.length > 0" class="results-count">
            {{ resultsSummary }}
          </p>
          <p v-else-if="searchQuery && results.length === 0" class="results-count no-results">
            {{ noResultsSummary }}
          </p>
        </div>
      </div>
    </section>
<!-- 联盟广告位：banner_native（原生横幅） -->

      <aside class="container" style="width: 100%; margin: 0 auto; padding: 1rem; text-align: center">


        <AdSlot variant="native" />


      </aside>

      

    <!-- Search Results -->
    <section class="search-results" v-if="searchQuery">
      <div class="container">
        <!-- Results by Category -->
        <div v-if="results.length > 0" class="results-container">
          <!-- Levels -->
          <div v-if="levelResults.length > 0" class="results-section">
            <h2 class="section-title">
              <span class="section-icon">📋</span>
              {{ $t('searchPage.sections.levels') }} ({{ levelResults.length }})
            </h2>
            <div class="results-grid">
              <a
                v-for="item in levelResults"
                :key="`level-${item.id}`"
                :href="getLocalizedPath(`/levels/${item.addressBar}`)"
                class="result-card"
              >
                <div class="card-image" v-if="item.imageUrl">
                  <img :src="item.imageUrl" :alt="item.imageAlt || item.title" loading="lazy" />
                </div>
                <div class="card-content">
                  <h3 class="card-title" v-html="highlightText(item.title, searchQuery)"></h3>
                  <p class="card-description" v-html="highlightText(item.description, searchQuery)"></p>
                  <div class="card-meta">
                    <span class="card-category" v-html="highlightText(item.category, searchQuery)"></span>
                    <div class="card-tags">
                      <span
                        v-for="tag in item.tags?.slice(0, 3)"
                        :key="tag"
                        class="tag"
                        v-html="highlightText(tag, searchQuery)"
                      ></span>
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
              {{ $t('searchPage.sections.maps') }} ({{ mapResults.length }})
            </h2>
            <div class="results-grid">
              <a
                v-for="item in mapResults"
                :key="`map-${item.id}`"
                :href="getLocalizedPath(`/maps-keys/${item.addressBar}`)"
                class="result-card"
              >
                <div class="card-image" v-if="item.imageUrl">
                  <img :src="item.imageUrl" :alt="item.imageAlt || item.title" loading="lazy" />
                </div>
                <div class="card-content">
                  <h3 class="card-title" v-html="highlightText(item.title, searchQuery)"></h3>
                  <p class="card-description" v-html="highlightText(item.description, searchQuery)"></p>
                  <div class="card-meta">
                    <span class="card-category" v-html="highlightText(item.category, searchQuery)"></span>
                    <div class="card-tags">
                      <span
                        v-for="tag in item.tags?.slice(0, 3)"
                        :key="tag"
                        class="tag"
                        v-html="highlightText(tag, searchQuery)"
                      ></span>
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
              {{ $t('searchPage.sections.entities') }} ({{ entityResults.length }})
            </h2>
            <div class="results-grid">
              <div
                v-for="item in entityResults"
                :key="`entity-${item.id}`"
                class="result-card"
              >
                <div class="card-image" v-if="item.imageUrl">
                  <img :src="item.imageUrl" :alt="item.imageAlt || item.name" loading="lazy" />
                </div>
                <div class="card-content">
                  <h3 class="card-title" v-html="highlightText(item.name || item.title, searchQuery)"></h3>
                  <p class="card-description" v-html="highlightText(item.description, searchQuery)"></p>
                  <div class="card-meta">
                    <span
                      class="card-category"
                      :class="item.dangerClass"
                      v-html="highlightText(item.dangerLevel, searchQuery)"
                    ></span>
                    <div class="card-tags">
                      <span
                        v-for="tag in item.tags?.slice(0, 3)"
                        :key="tag"
                        class="tag"
                        v-html="highlightText(tag, searchQuery)"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Codes -->
          <div v-if="codeResults.length > 0" class="results-section">
            <h2 class="section-title">
              <span class="section-icon">🔢</span>
              {{ $t('searchPage.sections.codes') }} ({{ codeResults.length }})
            </h2>
            <div class="results-grid">
              <a
                v-for="item in codeResults"
                :key="`code-${item.id}`"
                :href="getLocalizedPath('/codes-solutions')"
                class="result-card code-card"
              >
                <div class="card-content">
                  <h3 class="card-title" v-html="highlightText(item.title, searchQuery)"></h3>
                  <p class="card-description" v-html="highlightText(item.description, searchQuery)"></p>
                  <div class="card-meta">
                    <span class="code-value" v-html="highlightText(item.code, searchQuery)"></span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-else class="no-results-container">
          <div class="no-results-content">
            <p class="no-results-text">{{ $t('searchPage.noResults.trySearching') }}</p>
            <ul class="suggestions-list">
              <li>{{ $t('searchPage.noResults.suggestions.levelNames') }}</li>
              <li>{{ $t('searchPage.noResults.suggestions.entityNames') }}</li>
              <li>{{ $t('searchPage.noResults.suggestions.mapNames') }}</li>
              <li>{{ $t('searchPage.noResults.suggestions.codes') }}</li>
              <li>{{ $t('searchPage.noResults.suggestions.keywords') }}</li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>

    <!-- Empty State -->
    <section class="empty-state" v-else>
      <div class="container">
        <div class="empty-content">
          <h2>{{ $t('searchPage.emptyState.title') }}</h2>
          <p>{{ $t('searchPage.emptyState.description') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLevelsData } from '../composables/useLevelsData.js'
import { useMapsData } from '../composables/useMapsData.js'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'
import entitiesData from '../data/wiki/entities.js'

const route = useRoute()
const router = useRouter()
const searchInputRef = ref(null)
const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()
const { data: levelsData, loadData: loadLevelsData } = useLevelsData()
const { data: mapsData, loadData: loadMapsData } = useMapsData()

const searchQuery = ref('')

const summaryCopy = {
  en: {
    found: (count, query) => `Found ${count} result${count > 1 ? 's' : ''} for "${query}"`,
    empty: (query) => `No results found for "${query}"`
  },
  de: {
    found: (count, query) => `${count} Ergebnis${count > 1 ? 'se' : ''} für "${query}" gefunden`,
    empty: (query) => `Keine Ergebnisse für "${query}" gefunden`
  },
  fr: {
    found: (count, query) => `${count} résultat${count > 1 ? 's' : ''} pour "${query}"`,
    empty: (query) => `Aucun résultat pour "${query}"`
  },
  es: {
    found: (count, query) => `${count} resultado${count > 1 ? 's' : ''} para "${query}"`,
    empty: (query) => `No se encontraron resultados para "${query}"`
  }
}

const resultsSummary = computed(() => {
  const locale = getCurrentLocale()
  return (summaryCopy[locale] || summaryCopy.en).found(results.value.length, searchQuery.value)
})

const noResultsSummary = computed(() => {
  const locale = getCurrentLocale()
  return (summaryCopy[locale] || summaryCopy.en).empty(searchQuery.value)
})

// Codes data (extracted from CodesSolutionsView structure)
const codeCopy = {
  en: [
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
  ],
  es: [
    { id: 1, title: 'Nivel 3 - Código del ascensor', code: '042', description: 'Código del ascensor del Nivel 3 (Estación eléctrica). Introdúcelo en el teclado del ascensor para acceder a diferentes plantas.', type: 'ascensor' },
    { id: 2, title: 'Nivel 4 - Código del ascensor', code: '729', description: 'Código necesario para moverte entre plantas en el Nivel 4 (Oficina abandonada).', type: 'ascensor' },
    { id: 3, title: 'Nivel 5 - Código del ascensor', code: '314', description: 'Código del ascensor del Nivel 5 (Hotel del Terror). Se usa para acceder a las plantas superiores del hotel.', type: 'ascensor' },
    { id: 4, title: 'Nivel 8 - Código del ascensor', code: '826', description: 'Código del ascensor del Nivel 8 (Sistema de cuevas). Úsalo para avanzar por la red de cuevas.', type: 'ascensor' },
    { id: 5, title: 'Nivel 1 - Código de puerta', code: '1234', description: 'Código de puerta del Nivel 1. Desbloquea una puerta segura que bloquea el avance.', type: 'puerta' },
    { id: 6, title: 'Nivel 2 - Código de puerta', code: '5678', description: 'Código necesario para abrir puertas en el Nivel 2 (Pipe Dreams).', type: 'puerta' },
    { id: 7, title: 'Nivel 4 - Código de puerta', code: '9012', description: 'Código de puerta del Nivel 4. Abre la salida para avanzar al siguiente nivel.', type: 'puerta' },
    { id: 8, title: 'Nivel 52 - Código de puerta', code: '3456', description: 'Código de puerta del Nivel 52 (School Halls). Necesario para abrir la puerta de la oficina del director.', type: 'puerta' },
    { id: 9, title: 'Nivel 94 - Contraseña de computadora', code: 'PASSWORD', description: 'Contraseña de la computadora del Nivel 94 (Motion). Sirve para acceder al sistema y desbloquear información importante.', type: 'computadora' },
    { id: 10, title: 'Nivel 3999 - Contraseña de computadora', code: 'ESCAPE', description: 'Contraseña final de la computadora del Nivel 3999 (The True Ending). Es clave para completar la secuencia de escape.', type: 'computadora' },
  ]
}

const codesData = computed(() => {
  const locale = getCurrentLocale()
  return codeCopy[locale] || codeCopy.en
})

const entityCopy = {
  es: {
    1: {
      name: 'Vagabundo',
      title: 'Vagabundo',
      description: 'Seres humanos atrapados en los Backrooms, casi siempre vistos con un traje de protección.',
      dangerLevel: 'Amistoso',
      species: 'Humano'
    },
    2: {
      name: 'Bacteria',
      title: 'Bacteria',
      description: 'Criaturas humanoides negras con estructura esquelética de alambres que persiguen a los vagabundos al verlos.',
      dangerLevel: 'Moderado',
      species: 'Bacteria'
    },
    3: {
      name: 'Ladrón de piel',
      title: 'Ladrón de piel',
      description: 'Entidades humanoides grises capaces de robar la piel de un jugador y hacerse pasar por vagabundos.',
      dangerLevel: 'Peligroso',
      species: 'Humanoide'
    }
  }
}

const localizeEntity = (entity) => {
  const localized = entityCopy[getCurrentLocale()]?.[entity.id]
  return localized ? { ...entity, ...localized } : entity
}

// Search function
const searchInText = (text, query) => {
  if (!text) return false
  return text.toLowerCase().includes(query.toLowerCase())
}

const escapeHtml = (text) => {
  return String(text ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const highlightText = (text, query) => {
  const safeText = escapeHtml(text)
  const trimmedQuery = String(query ?? '').trim()
  if (!safeText || !trimmedQuery) return safeText

  const tokens = trimmedQuery.split(/\s+/).filter(Boolean)
  if (!tokens.length) return safeText

  const pattern = tokens
    .map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')
  const regex = new RegExp(`(${pattern})`, 'gi')

  return safeText.replace(regex, '<mark class="search-highlight">$1</mark>')
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
  
  return (levelsData.value || []).filter(item => {
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
  
  return (mapsData.value || []).filter(item => {
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
  
  return entitiesData.map(localizeEntity).filter(item => {
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
  
  return codesData.value.filter(item => {
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
onMounted(async () => {
  await nextTick()
  await loadLevelsData()
  await loadMapsData()
  
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

.card-title :deep(.search-highlight),
.card-description :deep(.search-highlight),
.card-category :deep(.search-highlight),
.tag :deep(.search-highlight),
.code-value :deep(.search-highlight),
:deep(.search-highlight) {
  background: rgba(255, 215, 0, 0.28);
  color: #fff7b0;
  padding: 0 0.15em;
  border-radius: 3px;
  box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.35);
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
