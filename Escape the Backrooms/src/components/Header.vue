<template>
  <header class="header">
    <div class="header-container">
      <div class="header-wrap">
        <div class="logo">
          <a :href="getLocalizedPath('/')" class="logo-link">
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
          <a :href="getLocalizedPath('/')" class="nav-link" @click="closeMobileMenu">Home</a>
          <a :href="getLocalizedPath('/levels')" class="nav-link" @click="closeMobileMenu">Levels</a>
          <a :href="getLocalizedPath('/maps-keys')" class="nav-link" @click="closeMobileMenu">Maps & Keys</a>
          <a :href="getLocalizedPath('/codes-solutions')" class="nav-link" @click="closeMobileMenu">Codes & Solutions</a>
          <!-- <a :href="getLocalizedPath('/wiki')" class="nav-link" @click="closeMobileMenu">Wiki</a> -->
          <!-- <a :href="getLocalizedPath('/guides')" class="nav-link" @click="closeMobileMenu">Guides</a> -->
        </nav>
        <div class="language-switcher" ref="langSwitcherRef">
          <button 
            class="language-button" 
            @click="toggleLangDropdown"
            :aria-label="`Current language: ${currentLanguageName}`"
          >
            <span class="language-text">{{ currentLanguageName }}</span>
            <svg class="language-arrow" :class="{ open: isLangDropdownOpen }" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="language-dropdown" :class="{ open: isLangDropdownOpen }" v-if="isLangDropdownOpen">
            <button
              v-for="lang in languages"
              :key="lang.code"
              class="language-option"
              :class="{ active: currentLocale === lang.code }"
              @click="selectLanguage(lang.code)"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '../composables/useLocalizedPath.js'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()
const { getLocalizedPath, getCurrentLocale } = useLocalizedPath()

const searchQuery = ref('')
const isMobileMenuOpen = ref(false)
const isLangDropdownOpen = ref(false)
const langSwitcherRef = ref(null)

// 语言列表
const languages = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fa', name: 'Français' }
]

// 当前语言
const currentLocale = computed(() => getCurrentLocale())

// 当前语言名称
const currentLanguageName = computed(() => {
  const lang = languages.find(l => l.code === currentLocale.value)
  return lang ? lang.name : 'English'
})

// 切换语言下拉菜单
const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
}

// 选择语言
const selectLanguage = (newLocale) => {
  if (newLocale === currentLocale.value) {
    isLangDropdownOpen.value = false
    return
  }
  
  // 获取当前路径（去除语言前缀）
  let currentPath = route.path
  const pathSegments = currentPath.split('/').filter(Boolean)
  
  // 如果当前路径有语言前缀，移除它
  if (pathSegments.length > 0 && ['en', 'de', 'fa'].includes(pathSegments[0])) {
    pathSegments.shift()
    currentPath = '/' + pathSegments.join('/')
  }
  
  // 如果新语言是英文，直接跳转（无前缀）
  if (newLocale === 'en') {
    router.push(currentPath || '/')
  } else {
    // 其他语言添加前缀
    router.push(`/${newLocale}${currentPath || '/'}`)
  }
  
  isLangDropdownOpen.value = false
  closeMobileMenu()
}

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  if (langSwitcherRef.value && !langSwitcherRef.value.contains(event.target)) {
    isLangDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    const searchPath = getLocalizedPath('/search')
    router.push({ path: searchPath, query: { q: searchQuery.value.trim() } })
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

/* Language Switcher */
.language-switcher {
  position: relative;
  margin-left: 1rem;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.language-button:hover {
  border-color: #ffd700;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
}

.language-text {
  color: #fff;
}

.language-arrow {
  transition: transform 0.3s ease;
  color: rgba(255, 215, 0, 0.6);
}

.language-arrow.open {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 6px;
  min-width: 150px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1002;
}

.language-dropdown.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.language-option:first-child {
  border-radius: 6px 6px 0 0;
}

.language-option:last-child {
  border-radius: 0 0 6px 6px;
}

.language-option:hover {
  background: rgba(255, 215, 0, 0.1);
  color: #ffd700;
}

.language-option.active {
  background: rgba(255, 215, 0, 0.15);
  color: #ffd700;
  font-weight: 600;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .language-switcher {
    margin-left: 0.5rem;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .language-switcher {
    order: 3;
    margin-left: 0;
    margin-right: auto;
  }

  .language-dropdown {
    right: auto;
    left: 0;
  }
}
</style>

