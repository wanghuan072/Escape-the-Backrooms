<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">About Us</h1>
          <p class="page-subtitle">Learn more about Escape the Backrooms Wiki</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text v-html-style">
            <p>
              Welcome to Escape the Backrooms Wiki, your comprehensive resource for everything related to Escape the Backrooms.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our mission is to provide players with the most complete and up-to-date information about Escape the Backrooms. We strive to create a community hub where players can find guides, strategies, maps, entity information, and resources to enhance their gaming experience.
            </p>

            <h2>What We Offer</h2>
            <p>
              Escape the Backrooms Wiki offers a wide range of content including detailed level guides, comprehensive navigation maps, entity database, codes and solutions, and wiki information. Our content is regularly updated to ensure accuracy and relevance.
            </p>

            <h2>Our Team</h2>
            <p>
              We are a team of passionate gamers and content creators dedicated to providing high-quality resources for the Escape the Backrooms community. Our team works tirelessly to gather, verify, and present information in an accessible and useful format.
            </p>

            <h2>Independence</h2>
            <p>
              This is an independent fan site created for informational purposes only. We are not affiliated with, endorsed by, or sponsored by the developers (Fancy Games) or publishers (Secret Mode) of Escape the Backrooms. All trademarks and copyrights belong to their respective owners.
            </p>

            <h2>Community</h2>
            <p>
              We value our community and are committed to providing a helpful and informative resource for all players. Your feedback and suggestions help us improve our content and services.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions, suggestions, or feedback, please feel free to contact us through our <a href="/contact-us">Contact Us</a> page. We'd love to hear from you!
            </p>

            <p style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 215, 0, 0.2);">
              <strong>Last updated: January 14, 2025</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSEO } from '../seo/composables.js'

const { setSEO } = useSEO()

onMounted(() => {
  setSEO({
    title: 'About Us | Escape the Backrooms Wiki',
    description: 'Learn more about Escape the Backrooms Wiki, your comprehensive resource for Escape the Backrooms.',
    keywords: 'about us, Escape the Backrooms Wiki, game community, fan site'
  })
})
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




