import { GPT_UNITS } from '@/config/gpt'
import { queueGpt } from '@/utils/gptRuntime'

function getSlotMap(scope) {
  if (!window.__gptBannerSlotMaps) {
    window.__gptBannerSlotMaps = { home: {}, post: {} }
  }
  return window.__gptBannerSlotMaps[scope]
}

export function mountGptBanner(elementId, scope, unit) {
  const banner = GPT_UNITS[scope]?.banners?.[Number(unit)]
  if (!banner || !elementId) return

  queueGpt((googletag) => {
    if (!document.getElementById(elementId)) return

    const slotMap = getSlotMap(scope)
    let slot = slotMap[elementId]

    if (!slot) {
      slot = googletag
        .defineSlot(banner.path, banner.sizes, elementId)
        ?.addService(googletag.pubads())

      if (!slot) return
      slotMap[elementId] = slot
    }

    googletag.display(elementId)
    googletag.pubads().refresh([slot])
  })
}

export function destroyGptBanner(elementId, scope) {
  if (!elementId || !scope) return

  queueGpt((googletag) => {
    const slotMap = getSlotMap(scope)
    const slot = slotMap[elementId]
    if (!slot) return

    googletag.destroySlots([slot])
    delete slotMap[elementId]
  })
}
