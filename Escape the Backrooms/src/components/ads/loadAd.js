import { AD_SNIPPETS } from './snippets.js'

let loadChain = Promise.resolve()

function runQueued(task) {
  loadChain = loadChain.then(
    () =>
      new Promise((resolve) => {
        task(resolve)
      }),
  )
}

/**
 * 在主文档中、锚点元素前插入与后台一致的两段 script（不用 iframe）
 */
export function mountBannerAd(anchorEl, variant) {
  const spec = AD_SNIPPETS[variant]
  if (!anchorEl?.parentNode || !spec) return () => {}

  const parent = anchorEl.parentNode
  const scripts = []

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
    scripts.push(opts, invoke)
  })

  return () => {
    scripts.forEach((node) => node.remove())
  }
}
