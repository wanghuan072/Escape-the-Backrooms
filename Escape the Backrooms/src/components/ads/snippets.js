/**
 * 与广告后台提供的代码完全一致（勿改 key / URL）
 */
export const AD_SNIPPETS = {
  /** 侧边栏 & 移动端全宽：300×250 */
  sidebar: {
    atOptions: `atOptions = {
    'key' : '3751be4b9ce0480df348da850f20d44b',
    'format' : 'iframe',
    'height' : 250,
    'width' : 300,
    'params' : {}
  };`,
    invokeSrc:
      'https://www.highperformanceformat.com/3751be4b9ce0480df348da850f20d44b/invoke.js',
    width: 300,
    height: 250,
  },
  /** PC 全宽：728×90 */
  leaderboard: {
    atOptions: `atOptions = {
    'key' : 'ab7db8cc8b466411697f6cd47e0fd01a',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };`,
    invokeSrc:
      'https://www.highperformanceformat.com/ab7db8cc8b466411697f6cd47e0fd01a/invoke.js',
    width: 728,
    height: 90,
  },
}

export const NATIVE_AD = {
  invokeSrc:
    'https://pl29633107.effectivecpmnetwork.com/891ef749e6c0675d4b64b98d4922ecad/invoke.js',
  containerId: 'container-891ef749e6c0675d4b64b98d4922ecad',
}
