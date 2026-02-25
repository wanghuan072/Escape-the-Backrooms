<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ $t('aboutUsPage.hero.title') }}</h1>
          <p class="page-subtitle">{{ $t('aboutUsPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text v-html-style">
            <p v-html="$t('aboutUsPage.content.welcome')"></p>

            <h2>{{ $t('aboutUsPage.content.missionTitle') }}</h2>
            <p v-html="$t('aboutUsPage.content.missionText')"></p>

            <h2>{{ $t('aboutUsPage.content.offerTitle') }}</h2>
            <p v-html="$t('aboutUsPage.content.offerText')"></p>

            <h2>{{ $t('aboutUsPage.content.teamTitle') }}</h2>
            <p v-html="$t('aboutUsPage.content.teamText')"></p>

            <h2>{{ $t('aboutUsPage.content.independenceTitle') }}</h2>
            <p v-html="$t('aboutUsPage.content.independenceText')"></p>

            <h2>{{ $t('aboutUsPage.content.communityTitle') }}</h2>
            <p v-html="$t('aboutUsPage.content.communityText')"></p>

            <h2>{{ $t('aboutUsPage.content.contactTitle') }}</h2>
            <p v-html="$t('aboutUsPage.content.contactText')"></p>

            <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 215, 0, 0.2);">
              <strong>{{ $t('aboutUsPage.content.lastUpdated') }}</strong>
            </p>
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
.legal-view {
  min-height: 100vh;
  position: relative;
}

.page-header {
  padding: 80px 0 40px;
  position: relative;
  z-index: 1;
  background: rgba(5, 5, 5, 0.6);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.header-content {
  text-align: center;
  position: relative;
  z-index: 1;
}

.page-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #ffd700;
  margin: 0 0 16px 0;
  font-weight: bold;
}

.page-subtitle {
  font-size: 1.15rem;
  color: #999;
  margin: 0;
}

.legal-content {
  padding: 40px 0 80px;
  position: relative;
  z-index: 1;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.legal-text {
  background: rgba(20, 20, 20, 0.7);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 12px;
  padding: 40px;
  backdrop-filter: blur(10px);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .legal-text {
    padding: 24px;
  }

  .page-header {
    padding: 60px 0 30px;
  }

  .legal-content {
    padding: 30px 0 60px;
  }
}
</style>




