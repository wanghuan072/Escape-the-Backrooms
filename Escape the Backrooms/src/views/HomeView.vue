<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-layout">
          <div class="hero-content">
            <div class="hero-badges">
              <span class="badge badge-new">v1.0 Full Release</span>
              <span class="badge">Steam Edition</span>
            </div>
            <h1 class="hero-title">Escape the Backrooms: Levels, Maps, Codes & Walkthroughs</h1>
            <p class="hero-description">
              Escape the Backrooms is your ultimate guide to navigating through 30+ levels of terror. Find levels, maps, codes, entity guides, and puzzle solutions for Escape the Backrooms. Everything you need to escape the Backrooms and survive this horror adventure.
            </p>
            <div class="hero-features">
              <div class="feature-item">Complete level walkthroughs</div>
              <div class="feature-item">High-resolution maps & keys</div>
              <div class="feature-item">Entity database</div>
              <div class="feature-item">Elevator codes, door codes, and computer passwords</div>
            </div>
            <div class="hero-stats">
              <div class="stat-box">
                <div class="stat-number">30+</div>
                <div class="stat-text">Playable Levels</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">35+</div>
                <div class="stat-text">Total Scenes</div>
              </div>
              <div class="stat-box">
                <div class="stat-number">30+</div>
                <div class="stat-text">Unique Entities</div>
              </div>
            </div>
            <div class="hero-actions">
              <a href="/levels" class="btn btn-primary">Explore All Levels</a>
              <a href="/codes-solutions" class="btn btn-secondary">Codes & Solutions</a>
            </div>
          </div>
          <div class="hero-video">
            <div class="video-player">
              <div class="video-thumbnail" v-if="!isVideoPlaying" @click="playVideo">
                <div class="play-button">▶</div>
              </div>
              <div class="video-iframe-container" v-else>
                <iframe
                  src="https://www.youtube.com/embed/6xbnqo48K2c"
                  title="Escape the Backrooms Walkthrough"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="video-frame"
                ></iframe>
                <button class="close-video" @click="closeVideo">×</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Levels Section -->
    <section class="featured-section" v-if="homeLevels.length > 0">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">Featured</span>
            <h2 class="section-title">Escape the Backrooms Levels</h2>
            <p class="section-subtitle">Essential Escape the Backrooms level guides to get you started</p>
          </div>
          <a href="/levels" class="section-link">View All Levels →</a>
        </div>
        <div class="featured-grid">
          <a
            v-for="level in homeLevels"
            :key="level.id"
            :href="`/levels/${level.addressBar}`"
            class="featured-card"
          >
            <div class="card-image">
              <img
                v-if="level.imageUrl"
                :src="level.imageUrl"
                :alt="level.imageAlt || level.title"
                class="card-img"
                loading="lazy"
              />
              <div v-else class="card-img placeholder">{{ level.title }}</div>
              <div class="image-overlay"></div>
              <div class="card-badge-top" v-if="level.category">{{ level.category }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ level.title }}</h3>
              <p class="card-desc">{{ level.description }}</p>
              <div class="card-tags" v-if="level.tags && level.tags.length > 0">
                <span v-for="tag in level.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Maps Section -->
    <section class="featured-section" v-if="homeMaps.length > 0">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">Maps</span>
            <h2 class="section-title">Escape the Backrooms Maps</h2>
            <p class="section-subtitle">Essential Escape the Backrooms navigation maps for key levels</p>
          </div>
          <a href="/maps-keys" class="section-link">View All Maps →</a>
        </div>
        <div class="featured-grid">
          <a
            v-for="map in homeMaps"
            :key="map.id"
            :href="`/maps-keys/${map.addressBar}`"
            class="featured-card"
          >
            <div class="card-image">
              <img
                v-if="map.imageUrl"
                :src="map.imageUrl"
                :alt="map.imageAlt || map.title"
                class="card-img"
                loading="lazy"
              />
              <div v-else class="card-img placeholder">{{ map.title }}</div>
              <div class="image-overlay"></div>
              <div class="card-badge-top" v-if="map.category">{{ map.category }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ map.title }}</h3>
              <p class="card-desc">{{ map.description }}</p>
              <div class="card-tags" v-if="map.tags && map.tags.length > 0">
                <span v-for="tag in map.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Entities Section -->
    <section class="featured-section" v-if="homeEntities.length > 0">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">Entities</span>
            <h2 class="section-title">Escape the Backrooms Entities</h2>
            <p class="section-subtitle">Important Escape the Backrooms entities you need to know</p>
          </div>
          <!-- <a href="/wiki/entities" class="section-link">View All Entities →</a> -->
        </div>
        <div class="featured-grid">
          <div
            v-for="entity in homeEntities"
            :key="entity.id"
            :href="`/wiki/entities/${entity.slug}`"
            class="featured-card"
          >
            <div class="card-image">
              <img
                v-if="entity.imageUrl"
                :src="entity.imageUrl"
                :alt="entity.imageAlt || entity.name"
                class="card-img"
                loading="lazy"
              />
              <div v-else class="card-img placeholder">{{ entity.name }}</div>
              <div class="image-overlay"></div>
              <div class="card-badge-top" :class="entity.dangerClass">{{ entity.dangerLevel }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ entity.title }}</h3>
              <p class="card-desc">{{ entity.description }}</p>
              <div class="card-meta">
                <span v-if="entity.species" class="meta-item">{{ entity.species }}</span>
                <span v-if="entity.firstAppearsIn" class="meta-item">{{ entity.firstAppearsIn }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Info Section -->
    <section class="game-info">
      <div class="container">
        <div class="section-header">
          <div class="header-content">
            <span class="section-label">Game Info</span>
            <h2 class="section-title">Escape the BackroomsGame Information</h2>
            <p class="section-subtitle">Essential information about the Escape the Backrooms game</p>
          </div>
        </div>
        <div class="info-grid">
          <div class="info-card">
            <h3>Game Information</h3>
            <ul class="info-list">
              <li><strong>Developer:</strong> Fancy Games</li>
              <li><strong>Publisher:</strong> Secret Mode</li>
              <li><strong>Release:</strong> v1.0 (Oct 23, 2024)</li>
              <li><strong>Platform:</strong> Steam</li>
              <li><strong>Players:</strong> 1-4 Co-op</li>
              <li><strong>Genre:</strong> Horror Adventure</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Game Statistics</h3>
            <ul class="info-list">
              <li><strong>Total Levels:</strong> 28+ playable in Escape the Backrooms</li>
              <li><strong>Total Scenes:</strong> 35+ including transitions in Escape the Backrooms</li>
              <li><strong>Entities:</strong> 30+ unique Escape the Backrooms entities</li>
              <li><strong>Playtime:</strong> 8-12 hours to complete Escape the Backrooms</li>
              <li><strong>Difficulty:</strong> Medium to Extreme in Escape the Backrooms</li>
              <li><strong>Endings:</strong> Multiple endings in Escape the Backrooms</li>
            </ul>
          </div>
          <div class="info-card">
            <h3>Gameplay Features</h3>
            <ul class="info-list">
              <li>Linear progression system</li>
              <li>Unique level mechanics</li>
              <li>Entity avoidance gameplay</li>
              <li>Puzzle solving elements</li>
              <li>Cooperative multiplayer</li>
              <li>Immersive horror atmosphere</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="container">
        <div class="about-wrap">
          <div class="section-header">
            <div class="header-content">
              <span class="section-label">About</span>
              <h2 class="section-title">About Us</h2>
              <p class="section-subtitle">Your complete guide to escaping the Backrooms</p>
            </div>
          </div>
          <div class="about-content">
            <div class="about-text">
              <p>
                Welcome to the most comprehensive guide for <strong>Escape the Backrooms</strong>, the
                first-person horror adventure game developed by Fancy Games and published by Secret Mode.
                This fan-made wiki is dedicated to helping players navigate through all 28+ levels of
                terror in Escape the Backrooms and successfully escape the Backrooms.
              </p>
              <p>
                Our Escape the Backrooms guides cover the Steam version (v1.0 Full Release), including detailed walkthroughs
                for every level from Level 0 (The Lobby) to Level 3999 (The True Ending). Each Escape the Backrooms level guide
                includes comprehensive information about objectives, entities, items, entrances, exits, and
                detailed walkthrough steps to help you progress through Escape the Backrooms.
              </p>
              <p>
                In addition to Escape the Backrooms level guides, we provide high-resolution navigation maps with spawn points
                and key locations for Escape the Backrooms, a complete database of all Escape the Backrooms entities with behavior patterns and survival
                strategies, and a comprehensive reference for all elevator codes, door codes, and computer
                passwords needed throughout your Escape the Backrooms journey.
              </p>
            </div>
            <div class="about-highlights">
              <div class="highlight-item">
                <div>
                  <strong>Level Walkthroughs</strong>
                  <p>Complete guides for all 28+ levels with objectives, entities, and exit routes</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>Navigation Maps</strong>
                  <p>High-resolution maps with spawn points, key locations, and navigation routes</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>Key Locations</strong>
                  <p>Detailed guides on where to find keys and how to collect them in each level</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>Entity Database</strong>
                  <p>Complete information about all entities, their behaviors, and avoidance strategies</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>Codes & Solutions</strong>
                  <p>All elevator codes, door codes, and computer passwords with usage instructions</p>
                </div>
              </div>
              <div class="highlight-item">
                <div>
                  <strong>Guides & Tips</strong>
                  <p>Additional Escape the Backrooms guides and tips to help you survive and escape the Backrooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-wrap">
          <div class="section-header">
            <div class="header-content">
              <span class="section-label">FAQ</span>
              <h2 class="section-title">Frequently Asked Questions</h2>
              <p class="section-subtitle">Find answers to common questions</p>
            </div>
          </div>
          <div class="faq-list">
            <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
              <h3 class="faq-question">
                {{ item.question }}
              </h3>
              <div class="faq-answer">
                <p v-html="item.answer"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import levelsData from '../data/levels.js'
import entitiesData from '../data/wiki/entities.js'
import mapsData from '../data/maps.js'

// Video player state
const isVideoPlaying = ref(false)

const playVideo = () => {
  isVideoPlaying.value = true
}

const closeVideo = () => {
  isVideoPlaying.value = false
}

// Filter data where isHome is true
const homeLevels = computed(() => {
  return levelsData.filter(level => level.isHome === true)
})

const homeEntities = computed(() => {
  return entitiesData.filter(entity => entity.isHome === true)
})

const homeMaps = computed(() => {
  return mapsData.filter(map => map.isHome === true)
})

// FAQ Items
const faqItems = [
  {
    question: 'What is Escape the Backrooms?',
    answer: '<strong>Escape the Backrooms</strong> is a first-person horror adventure game developed by Fancy Games and published by Secret Mode. Escape the Backrooms features 28+ levels with unique challenges, entities, and puzzles. The Escape the Backrooms game supports single-player and cooperative play for up to 4 players. Players must navigate through various Escape the Backrooms levels, avoid dangerous entities, solve puzzles, and find keys to progress and ultimately escape Escape the Backrooms.',
  },
  {
    question: 'How many levels are in the game?',
    answer: 'Escape the Backrooms features 28+ main playable levels, plus various transition areas (stairwells, elevators, hubs). If you count all Escape the Backrooms scenes including transitions, the total exceeds 35 scenes. Escape the Backrooms levels range from early game tutorials like Level 0 to challenging late-game levels like Level 3999, which serves as the true ending of Escape the Backrooms.',
  },
  {
    question: 'Where can I find maps for specific levels?',
    answer: 'You can find detailed Escape the Backrooms navigation maps in our <strong>Maps & Keys</strong> section. Each Escape the Backrooms map includes spawn points, key locations, and exit routes. Escape the Backrooms maps are organized by level and include visual markers to help you navigate. Simply navigate to the Maps & Keys page and select the Escape the Backrooms level map you need.',
  },
  {
    question: 'How do I find keys in each level?',
    answer: 'Keys are essential for progressing through many Escape the Backrooms levels. Our <strong>Maps & Keys</strong> section provides detailed information about key locations for each Escape the Backrooms level. For example, Level 0 in Escape the Backrooms requires finding a key after repairing the ladder, Level 1 has 4 keys hidden in wardrobes in Section II, and Level 5 keys are obtained by placing Moth Jelly in the Food Elevator in Escape the Backrooms.',
  },
  {
    question: 'What are elevator codes and door codes?',
    answer: 'Many Escape the Backrooms levels require specific codes to access elevators or unlock doors. Our <strong>Codes & Solutions</strong> page contains a complete list of all Escape the Backrooms elevator codes (like Level 3: 042, Level 5: 314), door codes (like Level 1: 1234), and computer passwords (like Level 94: PASSWORD). Each Escape the Backrooms code entry includes the location, usage instructions, and helpful images.',
  },
  {
    question: 'How do I avoid entities like the Hound or Moth?',
    answer: 'Our <strong>Entity Database</strong> provides complete information about all Escape the Backrooms entities, including their behaviors, locations, and danger levels. Each Escape the Backrooms entity guide explains how to avoid or deal with them. For example, Hounds in Escape the Backrooms are aggressive and fast, so you should avoid them in early Escape the Backrooms levels. Moths in Level 5 of Escape the Backrooms are attracted to light, so avoid using light sources near them.',
  },
  {
    question: 'What is Level 3999 and the task list system?',
    answer: 'Level 3999 is the final level and true ending of Escape the Backrooms. It features a unique task list system where players must complete randomly generated tasks (like breaking glass, finding specific items, or solving puzzles) before being able to escape Escape the Backrooms. This is currently the only "escape" ending in Escape the Backrooms. Our Escape the Backrooms level guides provide detailed walkthroughs for completing these tasks.',
  },
  {
    question: 'How do I navigate between levels?',
    answer: 'Each Escape the Backrooms level has specific entrances and exits. Our Escape the Backrooms level guides detail all possible entrances and exits for each level. Some Escape the Backrooms levels can be accessed from multiple previous levels, while others have only one entry point. The Escape the Backrooms progression is generally linear, but some levels offer alternative routes or shortcuts.',
  },
  {
    question: 'Can I play this game with friends?',
    answer: 'Yes! Escape the Backrooms supports cooperative multiplayer for up to 4 players. You can play Escape the Backrooms with friends to make navigation easier, share resources, and help each other complete Escape the Backrooms objectives. However, Escape the Backrooms can also be completed solo if you prefer a more challenging experience.',
  },
  {
    question: 'What should I do if I get stuck in a level?',
    answer: 'If you get stuck in Escape the Backrooms, check our detailed Escape the Backrooms level walkthroughs which include step-by-step instructions, objectives, and exit routes. You can also refer to our Escape the Backrooms maps to see the level layout, check the codes section if you need an Escape the Backrooms code, or consult the entity database if you\'re having trouble avoiding Escape the Backrooms entities. Each Escape the Backrooms guide is designed to help you progress without spoiling the entire experience.',
  },
]
</script>

<style scoped>
.home-view {
  position: relative;
  z-index: 1;
}

section {
  padding: 2rem 0;
}

/* Hero Section */
.hero {
  padding: 4rem 0;
  background: rgba(5, 5, 5, 0.6);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hero-badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  color: #ffd700;
  font-size: 0.85rem;
}

.badge-new {
  background: rgba(0, 255, 0, 0.15);
  border-color: rgba(0, 255, 0, 0.4);
  color: #0f0;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 2.2rem;
  color: #ffd700;
  line-height: 1.1;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.title-main {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: #ffd700;
  line-height: 1.1;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.title-sub {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: #ccc;
  font-weight: 300;
}

.hero-description {
  font-size: 1.1rem;
  color: #bbb;
  line-height: 1.7;
  max-width: 600px;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.feature-item {
  color: #ccc;
  font-size: 0.95rem;
  padding-left: 1rem;
  position: relative;
}

.feature-item::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #ffd700;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-box {
  padding: 1rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  color: #ffd700;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.stat-text {
  font-size: 0.85rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: #ffd700;
  color: #000;
}

.btn-primary:hover {
  background: #ffc107;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
}

.btn-secondary {
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 215, 0, 0.2);
  border-color: #ffd700;
}

.hero-video {
  position: relative;
}

.video-player {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(255, 215, 0, 0.2);
  background: #000;
  box-shadow: 
    0 0 30px rgba(255, 215, 0, 0.2),
    inset 0 0 30px rgba(255, 215, 0, 0.05);
}

.video-thumbnail {
  aspect-ratio: 16 / 9;
  position: relative;
  background: url('/images/bg.webp') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

.video-thumbnail::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5, 5, 5, 0.6), rgba(10, 10, 10, 0.75));
  z-index: 1;
  pointer-events: none;
}

.play-button {
  position: relative;
  z-index: 2;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.9);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  border: 2px solid rgba(255, 215, 0, 0.8);
}

.play-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
  background: rgba(255, 215, 0, 1);
}

.video-iframe-container {
  position: relative;
  aspect-ratio: 16 / 9;
}

.video-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.close-video {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: rgba(0, 0, 0, 0.7);
  color: #ffd700;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  border: 1px solid rgba(255, 215, 0, 0.3);
  line-height: 1;
}

.close-video:hover {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  transform: scale(1.1);
}

/* Featured Sections */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.header-content {
  flex: 1;
}

.section-label {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 4px;
  color: #ffd700;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.section-subtitle {
  color: #999;
  font-size: 0.95rem;
}

.section-link {
  color: #ffd700;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.section-link:hover {
  color: #ffc107;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.featured-card {
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

.featured-card:hover {
  border-color: #ffd700;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.25);
}

.card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(10, 10, 10, 0.5);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.card-img.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 215, 0, 0.6);
  font-size: 1.2rem;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 100%);
}

.card-badge-top {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.4rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  z-index: 1;
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
}

.danger-friendly {
  background: rgba(0, 255, 0, 0.2);
  color: #0f0;
}

.danger-high {
  background: rgba(255, 0, 0, 0.2);
  color: #f44;
}

.danger-medium {
  background: rgba(255, 165, 0, 0.2);
  color: #fa5;
}

.danger-extreme {
  background: rgba(255, 0, 150, 0.2);
  color: #f09;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.3rem;
  color: #ffd700;
  margin-bottom: 0.75rem;
}

.card-desc {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.card-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
  font-size: 0.75rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.card-meta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
}

.meta-item {
  font-size: 0.85rem;
  color: #999;
}

/* Game Info */
.game-info {
  background: rgba(5, 5, 5, 0.6);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 10px;
  padding: 2rem;
}

.info-card h3 {
  font-size: 1.3rem;
  color: #ffd700;
  margin-bottom: 1.5rem;
}

.info-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info-list li {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
}

.info-list strong {
  color: #ffd700;
  margin-right: 0.5rem;
}

/* About Section */
.about-section {
  background: rgba(10, 10, 10, 0.6);
}

.about-content {
  background: rgba(15, 15, 15, 0.8);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2.5rem;
}

.about-text {
  margin-bottom: 2rem;
}

.about-text p {
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.about-text strong {
  color: #ffd700;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}

.highlight-item {
  padding-left: 1.5rem;
  position: relative;
}

.highlight-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 4px;
  height: 1rem;
  background: #ffd700;
}

.highlight-item strong {
  display: block;
  color: #ffd700;
  margin-bottom: 0.25rem;
}

.highlight-item p {
  color: #999;
  font-size: 0.9rem;
  margin: 0;
}

/* FAQ Section */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
}

.faq-question {
  color: #ffd700;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.faq-answer {
  padding: 0;
}

.faq-answer p {
  color: #aaa;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

.faq-answer strong {
  color: #ffd700;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-video {
    order: -1;
  }

  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-highlights {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .home-view section {
    padding: 0.5rem 0;
  }

  .hero {
    padding: 0.5rem 0;
  }

  .hero-layout {
    gap: 1rem;
  }

  .hero-content {
    gap: 0.6rem;
  }

  .hero-title {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  .hero-description {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .hero-features {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  .feature-item {
    font-size: 0.8rem;
    line-height: 1.2;
    padding-left: 0.5rem;
  }

  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }

  .stat-box {
    padding: 0.5rem;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-text {
    font-size: 0.8rem;
  }

  .hero-actions {
    gap: 0.6rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .section-header {
    margin-bottom: 1rem;
    gap: 0.6rem;
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

  .section-label {
    font-size: 0.8rem;
    margin-bottom: 0.6rem;
    padding: 0.5rem;
  }

  .section-link {
    font-size: 0.8rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .card-title {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .card-desc {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .card-content {
    padding: 0.5rem;
  }

  .card-badge-top {
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.5rem;
  }

  .card-meta {
    padding-top: 0.5rem;
    gap: 0.5rem;
  }

  .meta-item {
    font-size: 0.8rem;
  }

  .tag {
    font-size: 0.8rem;
  }

  .game-info {
    padding: 0.5rem 0;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .info-card {
    padding: 0.5rem;
  }

  .info-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  .info-list {
    gap: 0.6rem;
  }

  .info-list li {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .about-section {
    padding: 0.5rem 0;
  }

  .about-content {
    padding: 0.5rem;
  }

  .about-text {
    margin-bottom: 1rem;
  }

  .about-text p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .about-highlights {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }

  .highlight-item {
    padding-left: 0.5rem;
  }

  .highlight-item strong {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  .highlight-item p {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .faq-list {
    gap: 0.6rem;
  }

  .faq-item {
    padding: 0.5rem;
  }

  .faq-question {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .faq-answer p {
    font-size: 0.8rem;
    line-height: 1.2;
  }
}

</style>
