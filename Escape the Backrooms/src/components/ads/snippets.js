/**
 * 与广告后台提供的代码完全一致（勿改 key / URL）
 * native 暂用 728 代替：effectivecpmnetwork 对未审核域名常返回 403
 */
export const AD_SNIPPETS = {
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
    minWidth: 300,
    minHeight: 250,
  },
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
    minWidth: 728,
    minHeight: 90,
  },
  /** 原 effectivecpm 原生位：后台 403 时先用 728 顶位 */
  native: {
    atOptions: `atOptions = {
    'key' : 'ab7db8cc8b466411697f6cd47e0fd01a',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };`,
    invokeSrc:
      'https://www.highperformanceformat.com/ab7db8cc8b466411697f6cd47e0fd01a/invoke.js',
    minWidth: 300,
    minHeight: 90,
  },
}
