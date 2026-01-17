<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Copyright</h1>
          <p class="page-subtitle">Last updated: January 14, 2025</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text v-html-style">
            <p>
              © 2025 Escape the Backrooms Wiki. All rights reserved.
            </p>

            <h2>Copyright Notice</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Escape the Backrooms Wiki and is protected by international copyright laws.
            </p>

            <h2>Fair Use</h2>
            <p>
              This website is an independent fan site created for informational and educational purposes only. We use content related to "Escape the Backrooms" under the principles of fair use for commentary, criticism, and educational purposes.
            </p>

            <h2>Trademark Notice</h2>
            <p>
              "Escape the Backrooms" and all related trademarks, service marks, and trade names are the property of their respective owners (Fancy Games and Secret Mode). This website is not affiliated with, endorsed by, or sponsored by the game developers or publishers.
            </p>
            <p>
              All trademarks and copyrights belong to their respective owners. We do not claim ownership of any game-related intellectual property.
            </p>

            <h2>Content Usage</h2>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission. This includes but is not limited to copying text, images, or other materials for commercial purposes.
            </p>

            <h2>User-Generated Content</h2>
            <p>
              If you submit content to our website, you retain ownership of that content but grant us a license to use, modify, and display it on our website. You represent that you have the right to grant such a license.
            </p>

            <h2>DMCA Policy</h2>
            <p>
              If you believe that any content on our website infringes your copyright, please contact us through our <a href="/contact-us">Contact Us</a> page with the following information:
            </p>
            <ul>
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The location of the allegedly infringing material on our website</li>
              <li>Your contact information</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement that the information in your notice is accurate</li>
            </ul>

            <h2>Contact Information</h2>
            <p>
              For copyright-related inquiries, please contact us at <a href="mailto:wyong@escapethebackrooms.org">wyong@escapethebackrooms.org</a> or through our <a href="/contact-us">Contact Us</a> page.
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
    title: 'Copyright | Escape the Backrooms Wiki',
    description: 'Copyright information for Escape the Backrooms Wiki. Learn about our copyright policies and intellectual property rights.',
    keywords: 'copyright, intellectual property, DMCA, fair use, Escape the Backrooms Wiki'
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




