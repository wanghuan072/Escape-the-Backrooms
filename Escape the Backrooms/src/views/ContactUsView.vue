<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ $t('contactUsPage.hero.title') }}</h1>
          <p class="page-subtitle">{{ $t('contactUsPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text v-html-style">
            <p v-html="$t('contactUsPage.content.intro')"></p>

            <h2>{{ $t('contactUsPage.content.howToContactTitle') }}</h2>
            <p v-html="$t('contactUsPage.content.howToContactText')"></p>

            <h2>{{ $t('contactUsPage.content.responseTimeTitle') }}</h2>
            <p v-html="$t('contactUsPage.content.responseTimeText')"></p>

            <h2>{{ $t('contactUsPage.content.whatToIncludeTitle') }}</h2>
            <p v-html="$t('contactUsPage.content.whatToIncludeText')"></p>
            <ul>
              <li>{{ $t('contactUsPage.content.whatToIncludeItems.name') }}</li>
              <li>{{ $t('contactUsPage.content.whatToIncludeItems.subject') }}</li>
              <li>{{ $t('contactUsPage.content.whatToIncludeItems.description') }}</li>
              <li>{{ $t('contactUsPage.content.whatToIncludeItems.relevantInfo') }}</li>
            </ul>

            <h2>{{ $t('contactUsPage.content.feedbackTitle') }}</h2>
            <p v-html="$t('contactUsPage.content.feedbackText')"></p>

            <h2>{{ $t('contactUsPage.content.reportingTitle') }}</h2>
            <p v-html="$t('contactUsPage.content.reportingText')"></p>

            <h2>{{ $t('contactUsPage.content.correctionsTitle') }}</h2>
            <p v-html="$t('contactUsPage.content.correctionsText')"></p>

            <h2>{{ $t('contactUsPage.content.partnershipTitle') }}</h2>
            <p v-html="$t('contactUsPage.content.partnershipText')"></p>

            <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 215, 0, 0.2);">
              <strong>{{ $t('contactUsPage.content.lastUpdated') }}</strong>
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