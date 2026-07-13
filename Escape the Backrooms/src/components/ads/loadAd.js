import { AD_SNIPPETS, NATIVE_AD } from './snippets.js'

function escapeScriptContent(value) {
  return String(value).replace(/<\/script/gi, '<\\/script')
}

function createBannerSrcdoc(snippet) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: ${snippet.height}px;
        overflow: hidden;
        background: transparent;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <script>${escapeScriptContent(snippet.atOptions)}</script>
    <script async src="${snippet.invokeSrc}"></script>
  </body>
</html>`
}

export function resolveBannerVariant(variant, isMobile) {
  if (variant === 'leaderboard' && isMobile) {
    return 'sidebar'
  }
  if (variant === 'sidebar' || variant === 'leaderboard') {
    return variant
  }
  return 'leaderboard'
}

export function mountBannerAd(anchorEl, variant, isMobile = false) {
  if (!anchorEl) return () => {}

  const resolvedVariant = resolveBannerVariant(variant, isMobile)
  const snippet = AD_SNIPPETS[resolvedVariant]
  if (!snippet) return () => {}

  anchorEl.innerHTML = ''

  const frame = document.createElement('iframe')
  frame.title = 'Advertisement'
  frame.width = String(snippet.width)
  frame.height = String(snippet.height)
  frame.scrolling = 'no'
  frame.loading = 'lazy'
  frame.style.width = `${snippet.width}px`
  frame.style.height = `${snippet.height}px`
  frame.style.maxWidth = '100%'
  frame.style.border = '0'
  frame.style.display = 'block'
  frame.srcdoc = createBannerSrcdoc(snippet)

  anchorEl.appendChild(frame)

  return () => {
    anchorEl.innerHTML = ''
  }
}

export function mountNativeAd(anchorEl) {
  if (!anchorEl || !NATIVE_AD.invokeSrc || !NATIVE_AD.containerId) return () => {}

  anchorEl.innerHTML = ''

  const container = document.createElement('div')
  container.id = NATIVE_AD.containerId

  const invokeScript = document.createElement('script')
  invokeScript.async = true
  invokeScript.setAttribute('data-cfasync', 'false')
  invokeScript.src = NATIVE_AD.invokeSrc

  anchorEl.appendChild(container)
  anchorEl.appendChild(invokeScript)

  return () => {
    anchorEl.innerHTML = ''
  }
}
