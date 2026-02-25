<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ $t('copyrightPage.hero.title') }}</h1>
          <p class="page-subtitle">{{ $t('copyrightPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text v-html-style">
            <p v-html="$t('copyrightPage.content.copyright')"></p>

            <h2>{{ $t('copyrightPage.content.noticeTitle') }}</h2>
            <p v-html="$t('copyrightPage.content.noticeText')"></p>

            <h2>{{ $t('copyrightPage.content.fairUseTitle') }}</h2>
            <p v-html="$t('copyrightPage.content.fairUseText')"></p>

            <h2>{{ $t('copyrightPage.content.trademarkTitle') }}</h2>
            <p v-html="$t('copyrightPage.content.trademarkText1')"></p>
            <p v-html="$t('copyrightPage.content.trademarkText2')"></p>

            <h2>{{ $t('copyrightPage.content.usageTitle') }}</h2>
            <p v-html="$t('copyrightPage.content.usageText')"></p>

            <h2>{{ $t('copyrightPage.content.userGeneratedTitle') }}</h2>
            <p v-html="$t('copyrightPage.content.userGeneratedText')"></p>

            <h2>{{ $t('copyrightPage.content.dmcaTitle') }}</h2>
            <p v-html="$t('copyrightPage.content.dmcaText')"></p>
            <ul>
              <li>{{ $t('copyrightPage.content.dmcaItems.description') }}</li>
              <li>{{ $t('copyrightPage.content.dmcaItems.location') }}</li>
              <li>{{ $t('copyrightPage.content.dmcaItems.contact') }}</li>
              <li>{{ $t('copyrightPage.content.dmcaItems.statement1') }}</li>
              <li>{{ $t('copyrightPage.content.dmcaItems.statement2') }}</li>
            </ul>

            <h2>{{ $t('copyrightPage.content.contactTitle') }}</h2>
            <p>For copyright-related inquiries, please contact us at <a href="mailto:wyong@escapethebackrooms.org">wyong@escapethebackrooms.org</a> or through our <a href="/contact-us">Contact Us</a> page.</p>
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




