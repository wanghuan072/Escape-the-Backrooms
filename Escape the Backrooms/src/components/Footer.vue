<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="Escape the Backrooms" class="logo-image">
            <span class="logo-text">ESCAPE THE BACKROOMS</span>
          </div>
          <p class="footer-text">
            {{ footerLabels.description }}
          </p>
        </div>
        <div class="link-column">
          <h2>{{ footerLabels.navigate }}</h2>
          <ul>
            <li><a :href="getLocalizedPath('/')">{{ footerLabels.home }}</a></li>
            <li><a :href="getLocalizedPath('/levels')">{{ footerLabels.levels }}</a></li>
            <li><a :href="getLocalizedPath('/maps-keys')">{{ footerLabels.maps }}</a></li>
            <li><a :href="getLocalizedPath('/codes-solutions')">{{ footerLabels.codes }}</a></li>
            <!-- <li><a href="/wiki">Wiki</a></li>
            <li><a href="/guides">Guides</a></li> -->
          </ul>
        </div>
        <div class="link-column">
          <h2>{{ footerLabels.legal }}</h2>
          <ul>
            <li><a :href="getLocalizedPath('/privacy-policy')" rel="nofollow">{{ footerLabels.privacy }}</a></li>
            <li><a :href="getLocalizedPath('/terms-of-service')" rel="nofollow">{{ footerLabels.terms }}</a></li>
            <li><a :href="getLocalizedPath('/copyright')" rel="nofollow">{{ footerLabels.copyright }}</a></li>
            <li><a :href="getLocalizedPath('/about-us')" rel="nofollow">{{ footerLabels.about }}</a></li>
            <li><a :href="getLocalizedPath('/contact-us')" rel="nofollow">{{ footerLabels.contact }}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ footerLabels.rights }}</p>
        <p>{{ footerLabels.disclaimer }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineOptions({
  name: 'SiteFooter'
})

import { computed } from 'vue'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()

const footerLabels = computed(() => {
  if (getCurrentLocale() === 'es') {
    return {
      navigate: 'Navegación',
      home: 'Inicio',
      levels: 'Niveles',
      maps: 'Mapas y llaves',
      codes: 'Códigos y soluciones',
      legal: 'Legal',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      copyright: 'Derechos de autor',
      about: 'Sobre nosotros',
      contact: 'Contacto',
      description: 'Recursos completos de Escape the Backrooms, con guías, wiki, mapas y estrategias para ayudarte a orientarte y escapar de los Backrooms.',
      rights: '© 2026 escapethebackrooms.org. Todos los derechos reservados.',
      disclaimer: 'Este es un sitio de fans independiente creado solo con fines informativos. Todas las marcas comerciales y derechos de autor pertenecen a sus respectivos propietarios.'
    }
  }

  return {
    navigate: 'Navigate',
    home: 'Home',
    levels: 'Levels',
    maps: 'Maps & Keys',
    codes: 'Codes & Solutions',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: 'Copyright',
    about: 'About Us',
    contact: 'Contact Us',
    description: 'Comprehensive Escape the Backrooms resources including guides, wiki, maps, and strategies to help you navigate and escape the Backrooms.',
    rights: '© 2026 escapethebackrooms.org. All rights reserved.',
    disclaimer: 'This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners.'
  }
})
</script>

<style scoped>
.site-footer {
  padding: 30px 0 20px 0;
  background: linear-gradient(180deg, rgba(10, 10, 10, 0.98), rgba(20, 20, 20, 0.95));
  border-top: 2px solid rgba(255, 215, 0, 0.3);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.8);
  position: relative;
  margin-top: 4rem;
}

.site-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), transparent);
  opacity: 0.6;
}

.footer-grid {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 10px;
}

.logo-image {
  width: 60px;
  height: auto;
  object-fit: contain;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #ffd700;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 0.5),
    0 0 20px rgba(255, 215, 0, 0.3);
}

.footer-text {
  color: #ccc;
  margin-bottom: 16px;
  line-height: 1.6;
}

.footer-brand {
  flex: 1;
  max-width: 500px;
}

.link-column h2 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-weight: 600;
  font-family: 'Courier New', Courier, monospace;
}

.link-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.link-column a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.2s ease;
}

.link-column a:hover {
  color: #ffd700;
}

.footer-bottom {
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  color: #999;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .footer-grid {
    flex-wrap: wrap;
    gap: 2rem;
  }

  .footer-brand {
    max-width: 100%;
  }

  .link-column {
    flex: 1;
    min-width: 200px;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .site-footer {
    padding: 1rem 0;
    margin-top: 2rem;
  }

  .footer-grid {
    flex-direction: column;
    gap: 1.5rem;
  }

  .footer-brand {
    max-width: 100%;
  }

  .footer-logo {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .logo-image {
    width: 40px;
  }

  .logo-text {
    font-size: 1.1rem;
    line-height: 1.2;
  }

  .footer-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .link-column h2 {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.6rem;
  }

  .link-column ul {
    gap: 0.6rem;
  }

  .link-column a {
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .footer-bottom {
    margin-top: 1rem;
    padding-top: 1rem;
    gap: 0.6rem;
  }

  .footer-bottom p {
    font-size: 0.8rem;
    line-height: 1.2;
    padding: 0 0.5rem;
  }
}
</style>
