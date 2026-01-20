<template>
  <div class="legal-view">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="header-content">
          <h1 class="page-title">Contact Us</h1>
          <p class="page-subtitle">Get in touch with us</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text v-html-style">
            <p>
              We'd love to hear from you! Whether you have questions, suggestions, feedback, or just want to say hello, please don't hesitate to reach out to us.
            </p>

            <h2>How to Contact Us</h2>
            <p>
              For general inquiries, feedback, or questions, please use the contact form below or reach out through our social media channels.
            </p>

            <h2>Response Time</h2>
            <p>
              We strive to respond to all inquiries within 48 hours. Please note that during peak times, response times may be slightly longer.
            </p>

            <h2>What to Include</h2>
            <p>
              When contacting us, please include:
            </p>
            <ul>
              <li>Your name or username</li>
              <li>A clear subject line</li>
              <li>A detailed description of your inquiry or feedback</li>
              <li>Any relevant information that might help us assist you</li>
            </ul>

            <h2>Feedback and Suggestions</h2>
            <p>
              We welcome your feedback and suggestions! Your input helps us improve our website and content. If you have ideas for new guides, features, or improvements, we'd love to hear them.
            </p>

            <h2>Reporting Issues</h2>
            <p>
              If you encounter any technical issues or errors on our website, please let us know. Include details about the problem, your browser and device information, and any error messages you may have seen.
            </p>

            <h2>Content Corrections</h2>
            <p>
              If you notice any inaccuracies in our content, please contact us with the correct information. We appreciate your help in keeping our content accurate and up-to-date.
            </p>

            <h2>Partnership Inquiries</h2>
            <p>
              For partnership or collaboration inquiries, please contact us with details about your proposal.
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
    title: 'Contact Us | Escape the Backrooms Wiki',
    description: 'Contact Escape the Backrooms Wiki. Get in touch with us for questions, feedback, or inquiries.',
    keywords: 'contact us, get in touch, feedback, inquiries, Escape the Backrooms Wiki'
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