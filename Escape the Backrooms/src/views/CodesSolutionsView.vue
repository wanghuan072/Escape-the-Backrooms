<template>
  <div class="codes-solutions-view">
    <!-- Page Header -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="page-title">{{ $t('codesPage.hero.title') }}</h1>
          <p class="page-subtitle">{{ $t('codesPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Solutions Content -->
    <section class="solutions-content">
      <div class="container">
        <!-- Level 0 -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.level0.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level0.solution1.title') }}</h3>
              <span class="solution-badge type-collect">{{ $t('codesPage.badge.collect') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level0.solution1.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-01-01.webp" alt="Level 0 Ladder" class="solution-img" loading="lazy" />
              <img src="/images/levels/level-01-02.webp" alt="Level 0 Key" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level0.solution2.title') }}</h3>
              <span class="solution-badge type-puzzle">{{ $t('codesPage.badge.puzzle') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level0.solution2.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-01-03.webp" alt="Level 0 Locker" class="solution-img" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Level 1 -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.level1.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level1.solution1.title') }}</h3>
              <span class="solution-badge type-color">{{ $t('codesPage.badge.color') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level1.solution1.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-02-01.webp" alt="Level 1 Color Lock" class="solution-img" loading="lazy" />
              <img src="/images/levels/level-02-02.webp" alt="Level 1 Colored Cars" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level1.solution2.title') }}</h3>
              <span class="solution-badge type-key">{{ $t('codesPage.badge.key') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level1.solution2.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-02-03.webp" alt="Level 1 Keys" class="solution-img" loading="lazy" />
              <img src="/images/levels/level-02-04.webp" alt="Level 1 Vault Door" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level1.solution3.title') }}</h3>
              <span class="solution-badge type-find">{{ $t('codesPage.badge.find') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level1.solution3.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-02-05.webp" alt="Level 1 Elevator" class="solution-img" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Level 3 -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.level3.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level3.solution1.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.code') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level3.solution1.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-05-01.webp" alt="Level 3 Elevator" class="solution-img" loading="lazy" />
              <img src="/images/levels/level-05-02.webp" alt="Level 3 Code" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level3.solution2.title') }}</h3>
              <span class="solution-badge type-switch">{{ $t('codesPage.badge.switch') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level3.solution2.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-05-03.webp" alt="Level 3 Fuse Box" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level3.solution3.title') }}</h3>
              <span class="solution-badge type-switch">{{ $t('codesPage.badge.switch') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level3.solution3.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-05-04.webp" alt="Level 3 Zone 2" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level3.solution4.title') }}</h3>
              <span class="solution-badge type-wire">{{ $t('codesPage.badge.wire') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level3.solution4.description')"></p>
            <div class="solution-details">
              <h4>{{ $t('codesPage.levels.level3.solution4.details.triwayTitle') }}</h4>
              <p v-html="$t('codesPage.levels.level3.solution4.details.triwayDescription')"></p>
              
              <h4>{{ $t('codesPage.levels.level3.solution4.details.coloredWiresTitle') }}</h4>
              <p v-html="$t('codesPage.levels.level3.solution4.details.coloredWiresDescription')"></p>
            </div>
            <div class="solution-images">
              <img src="/images/levels/level-05-05.webp" alt="Level 3 Wire Puzzle" class="solution-img" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- The Hub -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.hub.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.hub.solution1.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.password') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.hub.solution1.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-03-01.webp" alt="The Hub M.E.G. Base" class="solution-img" loading="lazy" />
              <img src="/images/levels/level-03-02.webp" alt="The Hub Computer" class="solution-img" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Level 4 -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.level4.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level4.solution1.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.code') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level4.solution1.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-06-01.webp" alt="Level 4 Elevator" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level4.solution2.title') }}</h3>
              <span class="solution-badge type-count">{{ $t('codesPage.badge.count') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level4.solution2.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-06-02.webp" alt="Level 4 Vending Machines" class="solution-img" loading="lazy" />
              <img src="/images/levels/level-06-03.webp" alt="Level 4 Objects" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level4.solution3.title') }}</h3>
              <span class="solution-badge type-stealth">{{ $t('codesPage.badge.stealth') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level4.solution3.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-06-04.webp" alt="Level 4 Cameras" class="solution-img" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Level 5 -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.level5.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level5.solution1.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.code') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level5.solution1.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-07-01.webp" alt="Level 5 Elevator" class="solution-img" loading="lazy" />
            </div>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level5.solution2.title') }}</h3>
              <span class="solution-badge type-puzzle">{{ $t('codesPage.badge.puzzle') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level5.solution2.description')"></p>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level5.solution3.title') }}</h3>
              <span class="solution-badge type-collect">{{ $t('codesPage.badge.collect') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level5.solution3.description')"></p>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level5.solution4.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.password') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level5.solution4.description')"></p>
            <ul class="solution-codes">
              <li><strong>17564</strong></li>
              <li><strong>05938</strong></li>
              <li><strong>89472</strong></li>
            </ul>
          </div>
        </div>

        <!-- Level 8 -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.level8.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.level8.solution1.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.code') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.level8.solution1.description')"></p>
            <div class="solution-images">
              <img src="/images/levels/level-08.webp" alt="Level 8 Elevator" class="solution-img" loading="lazy" />
            </div>
          </div>
        </div>

        <!-- Other Levels -->
        <div class="level-section">
          <h2 class="level-title">{{ $t('codesPage.levels.otherLevels.title') }}</h2>
          
          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.otherLevels.solution1.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.password') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.otherLevels.solution1.description')"></p>
          </div>

          <div class="solution-item">
            <div class="solution-header">
              <h3 class="solution-title">{{ $t('codesPage.levels.otherLevels.solution2.title') }}</h3>
              <span class="solution-badge type-code">{{ $t('codesPage.badge.password') }}</span>
            </div>
            <p class="solution-description" v-html="$t('codesPage.levels.otherLevels.solution2.description')"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO is handled by useAutoSEO composable in router
</script>

<style scoped>
.codes-solutions-view {
  min-height: 100vh;
}


.solutions-content {
  padding: 3rem 0;
}

.level-section {
  margin-bottom: 4rem;
}

.level-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  color: #ffd700;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(255, 215, 0, 0.3);
}

.solution-item {
  background: rgba(20, 20, 20, 0.9);
  border: 1px solid rgba(255, 215, 0, 0.15);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.solution-item:hover {
  border-color: rgba(255, 215, 0, 0.4);
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.1);
}

.solution-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.solution-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #ffd700;
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
  flex: 1;
  min-width: 200px;
}

.solution-badge {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.solution-badge.type-code {
  background: rgba(74, 144, 226, 0.2);
  color: #4a90e2;
  border: 1px solid rgba(74, 144, 226, 0.4);
}

.solution-badge.type-key {
  background: rgba(243, 198, 35, 0.2);
  color: #f3c623;
  border: 1px solid rgba(243, 198, 35, 0.4);
}

.solution-badge.type-color {
  background: rgba(255, 87, 34, 0.2);
  color: #ff5722;
  border: 1px solid rgba(255, 87, 34, 0.4);
}

.solution-badge.type-wire {
  background: rgba(126, 211, 33, 0.2);
  color: #7ed321;
  border: 1px solid rgba(126, 211, 33, 0.4);
}

.solution-badge.type-puzzle {
  background: rgba(156, 39, 176, 0.2);
  color: #9c27b0;
  border: 1px solid rgba(156, 39, 176, 0.4);
}

.solution-badge.type-collect {
  background: rgba(255, 152, 0, 0.2);
  color: #ff9800;
  border: 1px solid rgba(255, 152, 0, 0.4);
}

.solution-badge.type-count {
  background: rgba(0, 188, 212, 0.2);
  color: #00bcd4;
  border: 1px solid rgba(0, 188, 212, 0.4);
}

.solution-badge.type-stealth {
  background: rgba(158, 158, 158, 0.2);
  color: #9e9e9e;
  border: 1px solid rgba(158, 158, 158, 0.4);
}

.solution-badge.type-switch {
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  border: 1px solid rgba(76, 175, 80, 0.4);
}

.solution-badge.type-find {
  background: rgba(233, 30, 99, 0.2);
  color: #e91e63;
  border: 1px solid rgba(233, 30, 99, 0.4);
}

.solution-description {
  color: #ddd;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
}

.solution-details {
  margin: 1rem 0;
  padding: 1rem;
  background: rgba(255, 215, 0, 0.05);
  border-left: 3px solid rgba(255, 215, 0, 0.3);
  border-radius: 4px;
}

.solution-details h4 {
  color: #ffd700;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.solution-details p {
  color: #ccc;
  margin: 0.5rem 0;
  line-height: 1.7;
}

.solution-codes {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.solution-codes li {
  color: #ffd700;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 6px;
  letter-spacing: 2px;
}

.solution-images {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.solution-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;
}

.solution-img:hover {
  border-color: rgba(255, 215, 0, 0.5);
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .solution-images {
    flex-wrap: wrap;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .codes-solutions-view section {
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

  .solutions-content {
    padding: 0.5rem 0;
  }

  .level-section {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .level-title {
  font-size: 1.3rem;
    line-height: 1.2;
  margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }

  .solution-item {
    padding: 0.5rem;
  margin-bottom: 1rem;
}

  .solution-header {
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.6rem;
  }

  .solution-title {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .solution-badge {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .solution-description {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .solution-details {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }

  .solution-details h4 {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .solution-details p {
    font-size: 0.8rem;
    line-height: 1.2;
    margin: 0.5rem 0;
  }

  .solution-codes {
    margin: 0.5rem 0;
  }

  .solution-codes li {
    font-size: 1.1rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }

  .solution-images {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .solution-img {
    max-width: 100%;
  }
}

</style>