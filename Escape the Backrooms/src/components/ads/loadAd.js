import { AD_SNIPPETS, NATIVE_AD } from './snippets.js'

let loadChain = Promise.resolve()

function runQueued(task) {
  loadChain = loadChain.then(
    () =>
      new Promise((resolve) => {
        task(resolve)
      }),
  )
}

/** 解析实际投放：PC 全宽 728；移动端全宽 300；侧边栏始终 300 */
export function resolveBannerVariant(variant, isMobile) {
  if (variant === 'sidebar') return 'sidebar'
  if (variant === 'leaderboard' && isMobile) return 'sidebar'
  if (variant === 'leaderboard') return 'leaderboard'
  return null
}

/**
 * highperformanceformat：atOptions + invoke.js，插在锚点前
 */
export function mountBannerAd(anchorEl, variant, isMobile = false) {
  const key = resolveBannerVariant(variant, isMobile)
  const spec = key ? AD_SNIPPETS[key] : null
  if (!anchorEl?.parentNode || !spec) return () => {}

  const parent = anchorEl.parentNode
  const nodes = []

  runQueued((done) => {
    const opts = document.createElement('script')
    opts.type = 'text/javascript'
    opts.text = spec.atOptions
    opts.dataset.adPart = 'options'

    const invoke = document.createElement('script')
    invoke.type = 'text/javascript'
    invoke.src = spec.invokeSrc
    invoke.dataset.adPart = 'invoke'

    const finish = () => window.setTimeout(done, 100)
    invoke.onload = finish
    invoke.onerror = finish
    window.setTimeout(finish, 10000)

    parent.insertBefore(opts, anchorEl)
    parent.insertBefore(invoke, anchorEl)
    nodes.push(opts, invoke)
  })

  return () => {
    nodes.forEach((node) => node.remove())
  }
}

/**
 * 原生横幅（每页首个全宽位）
 * <script async src="...invoke.js">
 * <div id="container-...">
 */
export function mountNativeAd(anchorEl) {
  const wrap = anchorEl?.parentElement
  if (!wrap) return () => {}

  const existing = document.getElementById(NATIVE_AD.containerId)
  if (existing && !wrap.contains(existing)) return () => {}

  const nodes = []

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.defer = true
  script.setAttribute('data-cfasync', 'false')
  script.dataset.adPart = 'native-invoke'
  script.src = NATIVE_AD.invokeSrc

  const container = document.createElement('div')
  container.id = NATIVE_AD.containerId
  container.dataset.adPart = 'native-container'

  wrap.insertBefore(script, anchorEl)
  wrap.insertBefore(container, anchorEl)
  nodes.push(script, container)

  return () => {
    nodes.forEach((node) => node.remove())
  }
}
