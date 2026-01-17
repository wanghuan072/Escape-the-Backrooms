<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Privacy Policy</h1>
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
              At Escape the Backrooms Wiki, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information that you provide directly to us, such as when you contact us or subscribe to our newsletter. This may include your name, email address, and any other information you choose to provide.
            </p>
            <p>
              We also automatically collect certain information about your device when you visit our website, including your IP address, browser type, operating system, and browsing behavior.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, send you updates about our content, and analyze how our website is used.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us through our Contact Us page.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:wyong@escapethebackrooms.org">wyong@escapethebackrooms.org</a> or through our <a href="/contact-us">Contact Us</a> page.
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
    title: 'Privacy Policy | Escape the Backrooms Wiki',
    description: 'Privacy Policy for Escape the Backrooms Wiki. Learn how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, user privacy, Escape the Backrooms Wiki'
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




