<template>
  <header class="header">
    <div class="header-container">
      <div class="header-wrap">
        <div class="logo">
          <a href="/" class="logo-link">
            <img src="/images/logo.webp" alt="Escape the Backrooms" class="logo-image">
            <span class="logo-text">Escape the Backrooms</span>
          </a>
        </div>
        <div class="header-search">
          <div class="search-wrapper">
            <input
              type="text"
              class="search-input"
              placeholder="Search levels, maps, codes, entities..."
              v-model="searchQuery"
              @keyup.enter="handleSearch"
            />
            <button class="search-button" @click="handleSearch" type="button" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu" :class="{ active: isMobileMenuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        <nav class="nav" :class="{ open: isMobileMenuOpen }">
          <div class="mobile-search">
            <div class="search-wrapper">
              <input
                type="text"
                class="search-input"
                placeholder="Search levels, maps, codes, entities..."
                v-model="searchQuery"
                @keyup.enter="handleSearch"
              />
              <button class="search-button" @click="handleSearch" type="button" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          <a href="/" class="nav-link" @click="closeMobileMenu">Home</a>
          <a href="/levels" class="nav-link" @click="closeMobileMenu">Levels</a>
          <a href="/maps-keys" class="nav-link" @click="closeMobileMenu">Maps & Keys</a>
          <a href="/codes-solutions" class="nav-link" @click="closeMobileMenu">Codes & Solutions</a>
          <!-- <a href="/wiki" class="nav-link" @click="closeMobileMenu">Wiki</a>
          <a href="/guides" class="nav-link" @click="closeMobileMenu">Guides</a> -->
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const isMobileMenuOpen = ref(false)

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({ path: '/search', query: { q: searchQuery.value.trim() } })
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.header-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-search {
  max-width: 400px;
  width: 100%;
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 0.625rem 1rem;
  padding-right: 3rem;
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 6px;
  color: #fff;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  outline: none;
  border-color: #ffd700;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
}

.search-button {
  position: absolute;
  right: 0.5rem;
  background: transparent;
  border: none;
  color: rgba(255, 215, 0, 0.6);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.search-button:hover {
  color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
}

.search-button:active {
  transform: scale(0.95);
}

.search-button svg {
  width: 20px;
  height: 20px;
}

.logo-link {
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-link img {
  width: 60px;
  height: auto;
  object-fit: contain;
}

.logo-text {
  
  color: #ffd700;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo-link:hover {
  color: #ffc107;
}

.nav {
  display: flex;
  gap: 2rem;
}

.mobile-search {
  display: none;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #ffd700;
}

.nav-link.active {
  color: #ffd700;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ffd700;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: #ffd700;
  transition: all 0.3s ease;
  border-radius: 2px;
  display: block;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .header-wrap {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .header-search {
    max-width: 100%;
    order: 3;
    width: 100%;
  }

  .nav {
    order: 2;
    width: 100%;
    justify-content: center;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .header-wrap {
    flex-wrap: nowrap;
    gap: 1rem;
  }

  .logo-link img {
    width: 40px;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .mobile-menu-toggle {
    display: flex;
    order: 2;
  }

  .header-search {
    display: none;
  }

  .nav {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    gap: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    order: 4;
    width: 100%;
    border-top: 1px solid rgba(255, 215, 0, 0.2);
    z-index: 999;
  }

  .nav.open {
    max-height: 600px;
    padding: 1rem 0;
    overflow-y: auto;
  }

  .mobile-search {
    display: block;
    padding: 0 20px 1rem;
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
    margin-bottom: 0.5rem;
  }

  .mobile-search .search-wrapper {
    width: 100%;
  }

  .mobile-search .search-input {
    width: 100%;
  }

  .nav-link {
    padding: 1rem 20px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
  }

  .nav-link:last-child {
    border-bottom: none;
  }
}
</style>

