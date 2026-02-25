<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">{{ $t('privacyPolicyPage.hero.title') }}</h1>
          <p class="page-subtitle">{{ $t('privacyPolicyPage.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text v-html-style">
            <p v-html="$t('privacyPolicyPage.content.intro')"></p>

            <h2>{{ $t('privacyPolicyPage.content.informationTitle') }}</h2>
            <p v-html="$t('privacyPolicyPage.content.informationText1')"></p>
            <p v-html="$t('privacyPolicyPage.content.informationText2')"></p>

            <h2>{{ $t('privacyPolicyPage.content.howWeUseTitle') }}</h2>
            <p v-html="$t('privacyPolicyPage.content.howWeUseText')"></p>

            <h2>{{ $t('privacyPolicyPage.content.cookiesTitle') }}</h2>
            <p v-html="$t('privacyPolicyPage.content.cookiesText')"></p>

            <h2>{{ $t('privacyPolicyPage.content.thirdPartyTitle') }}</h2>
            <p v-html="$t('privacyPolicyPage.content.thirdPartyText')"></p>

            <h2>{{ $t('privacyPolicyPage.content.securityTitle') }}</h2>
            <p v-html="$t('privacyPolicyPage.content.securityText')"></p>

            <h2>{{ $t('privacyPolicyPage.content.rightsTitle') }}</h2>
            <p v-html="$t('privacyPolicyPage.content.rightsText')"></p>

            <h2>{{ $t('privacyPolicyPage.content.changesTitle') }}</h2>
            <p v-html="$t('privacyPolicyPage.content.changesText')"></p>

            <h2>{{ $t('privacyPolicyPage.content.contactTitle') }}</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:wyong@escapethebackrooms.org">wyong@escapethebackrooms.org</a> or through our <a href="/contact-us">Contact Us</a> page.</p>
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




