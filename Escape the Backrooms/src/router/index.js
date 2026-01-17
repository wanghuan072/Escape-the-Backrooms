import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LevelsView from '../views/LevelsView.vue'
import LevelDetailView from '../views/LevelDetailView.vue'
import MapsKeysView from '../views/MapsKeysView.vue'
import MapDetailView from '../views/MapDetailView.vue'
import CodesSolutionsView from '../views/CodesSolutionsView.vue'
// import WikiView from '../views/wiki/WikiView.vue'
// import EntitiesView from '../views/wiki/EntitiesView.vue'
// import EntityDetailView from '../views/wiki/EntityDetailView.vue'
// import GuidesView from '../views/GuidesView.vue'
// import GuideDetailView from '../views/GuideDetailView.vue'
import SearchView from '../views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        seo: {
          title: 'Escape the Backrooms: Levels, Maps, Codes & Walkthroughs',
          description: 'Comprehensive Escape the Backrooms Wiki. Access high-res maps, elevator codes, entity database, and step-by-step walkthroughs for all game levels.',
          keywords: 'Escape the Backrooms, Wiki, Maps, Walkthrough, Level Guides, Steam, Elevator Codes, Entities, Puzzle Solutions, Strategy Guide'
        }
      }
    },
    {
      path: '/levels',
      name: 'levels',
      component: LevelsView,
      meta: {
        seo: {
          title: 'Escape the Backrooms: All Levels List & Guide (v1.0)',
          description: 'Escape the Backrooms levels, all levels list, walkthrough directory, chapter guide, level 0 map, level 974, level 3999, steam guide',
          keywords: 'Escape the Backrooms levels, level guide, walkthrough, level 0, level 1, level walkthrough, survival guide'
        }
      }
    },
    {
      path: '/levels/:slug',
      name: 'level-detail',
      component: LevelDetailView,
      // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
    },
    {
      path: '/maps-keys',
      name: 'maps-keys',
      component: MapsKeysView,
      meta: {
        seo: {
          title: 'Escape the Backrooms Maps & Key Locations (High-Res)',
          description: 'Access high-resolution maps for Escape the Backrooms. Find precise locations for keys, ladder pieces, elevator codes, and exits for all levels (v1.0).',
          keywords: 'Escape the Backrooms maps, level maps, key locations, spawn points, level 0 map, level 1 map, ladder locations'
        }
      }
    },
    {
      path: '/maps-keys/:slug',
      name: 'map-detail',
      component: MapDetailView,
      // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
    },
    {
      path: '/codes-solutions',
      name: 'codes-solutions',
      component: CodesSolutionsView,
      meta: {
        seo: {
          title: 'Escape the Backrooms Codes: Elevators, Doors & Puzzles',
          description: 'The complete cheat sheet for Escape the Backrooms codes. Find Level 1 elevator codes, Level 5 boiler room password, computer puzzles, and more.',
          keywords: 'Escape the Backrooms codes, elevator code, door password, level 1 code, level 5 code, puzzle solutions, cheat sheet'
        }
      }
    },
    // {
    //   path: '/wiki',
    //   name: 'wiki',
    //   component: WikiView,
    //   meta: {
    //     seo: {
    //       title: 'Escape the Backrooms Wiki: Full Database of Entities & Items',
    //       description: 'The complete Wiki for Escape the Backrooms. Access the full database of all entities, item locations, survival mechanics, and achievement guides.',
    //       keywords: 'Escape the Backrooms wiki, database, entity list, item guide, mechanics, almond water, flashlight'
    //     }
    //   }
    // },
    // {
    //   path: '/wiki/entities',
    //   name: 'wiki-entities',
    //   component: EntitiesView,
    //   meta: {
    //     seo: {
    //       title: 'Escape the Backrooms Entities List:All Monsters & Weaknesses',
    //       description: 'Browse the complete list of entities in Escape the Backrooms. Learn how to survive Smilers, Bacteria, Partygoers, and more. Danger levels included.',
    //       keywords: 'Escape the Backrooms entities, monster list, smiler, bacteria, skin-stealer, entity behaviors, how to kill entities'
    //     }
    //   }
    // },
    // {
    //   path: '/wiki/entities/:slug',
    //   name: 'wiki-entity-detail',
    //   component: EntityDetailView,
    //   // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
    // },
    // {
    //   path: '/guides',
    //   name: 'guides',
    //   component: GuidesView,
    //   meta: {
    //     seo: {
    //       title: 'Escape the Backrooms Guides: Tips, Multiplayer & Tech Support',
    //       description: 'Master the Backrooms with our expert guides. Learn beginner tips, fix microphone/multiplayer issues, setup VR, and unlock 100% Steam achievements.',
    //       keywords: 'Escape the Backrooms guides, beginner tips, multiplayer setup, mic fix, voice chat not working, achievement guide, VR support, how to play'
    //     }
    //   }
    // },
    // {
    //   path: '/guides/:slug',
    //   name: 'guide-detail',
    //   component: GuideDetailView,
    //   // 详情页的 TDK 从数据中的 seo 字段读取，不在路由中设置
    // },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      meta: {
        seo: {
          title: 'Search | Escape the Backrooms Wiki',
          description: 'Search for levels, maps, entities, codes, and more in Escape the Backrooms Wiki.',
          keywords: 'search, Escape the Backrooms, wiki search'
        }
      }
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/PrivacyPolicyView.vue'),
      meta: {
        seo: {
          title: 'Privacy Policy | Escape the Backrooms Wiki',
          description: 'Privacy Policy for Escape the Backrooms Wiki. Learn how we collect, use, and protect your personal information.',
          keywords: 'privacy policy, data protection, user privacy'
        }
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/TermsOfServiceView.vue'),
      meta: {
        seo: {
          title: 'Terms of Service | Escape the Backrooms Wiki',
          description: 'Terms of Service for Escape the Backrooms Wiki. Read our terms and conditions for using our website.',
          keywords: 'terms of service, terms and conditions, user agreement'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/CopyrightView.vue'),
      meta: {
        seo: {
          title: 'Copyright | Escape the Backrooms Wiki',
          description: 'Copyright information for Escape the Backrooms Wiki. Learn about our copyright policies and intellectual property rights.',
          keywords: 'copyright, intellectual property, DMCA, fair use'
        }
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutUsView.vue'),
      meta: {
        seo: {
          title: 'About Us | Escape the Backrooms Wiki',
          description: 'Learn more about Escape the Backrooms Wiki, your comprehensive resource for Escape the Backrooms.',
          keywords: 'about us, game community, fan site'
        }
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue'),
      meta: {
        seo: {
          title: 'Contact Us | Escape the Backrooms Wiki',
          description: 'Contact Escape the Backrooms Wiki. Get in touch with us for questions, feedback, or inquiries.',
          keywords: 'contact us, get in touch, feedback, inquiries'
        }
      }
    },
  ],
})

export default router
