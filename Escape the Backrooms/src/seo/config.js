// SEO配置文件
export const seoConfig = {
  // 域名配置
  domain: 'escapethebackrooms.org',
  fullDomain: 'https://escapethebackrooms.org',
  protocol: 'https://',

  // 社交媒体配置
  social: {
    twitter: '@escapethebackrooms',
    facebook: 'escapethebackrooms',
    instagram: 'escapethebackrooms',
    discord: 'escapethebackrooms'
  },

  // 默认SEO设置
  defaults: {
    title: 'Escape the Backrooms Wiki: Maps, Walkthroughs & Level Guides',
    description: 'The ultimate guide for Escape the Backrooms (Steam). Detailed walkthroughs for all levels, high-res maps, entity database, codes & solutions, and puzzle solutions.',
    keywords: 'Escape the Backrooms, Wiki, Maps, Walkthrough, Level Guides, Steam, 1.0 Update, Entities, Codes, Solutions, Fancy Games, Secret Mode',
    author: 'Escape the Backrooms Community',
    image: 'https://escapethebackrooms.org/images/logo.webp',
    type: 'website'
  },

  // 页面优先级设置
  priorities: {
    home: 1.0,
    levels: 0.9,
    levelDetail: 0.8,
    mapsKeys: 0.9,
    mapDetail: 0.8,
    codesSolutions: 0.9,
    wiki: 0.8,
    wikiEntities: 0.8,
    wikiEntityDetail: 0.7,
    guides: 0.8,
    search: 0.7
  },

  // 更新频率设置
  changefreq: {
    home: 'weekly',
    levels: 'weekly',
    levelDetail: 'monthly',
    mapsKeys: 'weekly',
    mapDetail: 'monthly',
    codesSolutions: 'weekly',
    wiki: 'weekly',
    wikiEntities: 'weekly',
    wikiEntityDetail: 'monthly',
    guides: 'weekly',
    search: 'daily'
  }
}

