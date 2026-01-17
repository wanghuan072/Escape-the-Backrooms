<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Terms of Service</h1>
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
              Welcome to Escape the Backrooms Wiki. By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2>Use of Website</h2>
            <p>
              You may use our website for personal, non-commercial purposes. You agree not to use the website in any way that violates any applicable laws or regulations, or that could damage, disable, or impair the website.
            </p>

            <h2>Content and Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Escape the Backrooms Wiki or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
            <p>
              This is an independent fan site created for informational purposes only. All trademarks and copyrights related to "Escape the Backrooms" belong to their respective owners (Fancy Games and Secret Mode).
            </p>

            <h2>User Conduct</h2>
            <p>
              You agree not to engage in any activity that interferes with or disrupts the website or servers and networks connected to the website. You also agree not to attempt to gain unauthorized access to any portion of the website.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              The information on this website is provided on an "as is" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of the information provided.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Escape the Backrooms Wiki shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website.
            </p>

            <h2>Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these third-party sites.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any changes constitutes your acceptance of the new terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:wyong@escapethebackrooms.org">wyong@escapethebackrooms.org</a> or through our <a href="/contact-us">Contact Us</a> page.
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
    title: 'Terms of Service | Escape the Backrooms Wiki',
    description: 'Terms of Service for Escape the Backrooms Wiki. Read our terms and conditions for using our website.',
    keywords: 'terms of service, terms and conditions, user agreement, Escape the Backrooms Wiki'
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




