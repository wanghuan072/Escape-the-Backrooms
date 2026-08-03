import { GPT_UNITS } from '@/config/gpt'

const UNIT_PATH = {
  1: GPT_UNITS.banner1,
  2: GPT_UNITS.banner2,
  3: GPT_UNITS.banner3,
}

function getSlotMap() {
  if (!window.__gptSlotMap) window.__gptSlotMap = {}
  return window.__gptSlotMap
}

export function Gt(elementId, unit) {
  const path = UNIT_PATH[unit] ?? UNIT_PATH[Number(unit)]
  if (!path || !elementId) return

  window.googletag = window.googletag || { cmd: [] }
  const googletag = window.googletag
  googletag.cmd.push(() => {
    const slotMap = getSlotMap()
    let slot = slotMap[elementId]

    if (!slot) {
      const mapping = googletag
        .sizeMapping()
        .addSize([1024, 768], [
          [970, 250],
          [300, 250],
        ])
        .addSize([0, 0], [300, 250])
        .build()

      slot = googletag
        .defineSlot(path, [
          [300, 250],
          [970, 250],
        ], elementId)
        ?.defineSizeMapping(mapping)
        ?.addService(googletag.pubads())

      if (!slot) return
      slotMap[elementId] = slot
    }

    if (!document.getElementById(elementId)) return

    googletag.display(elementId)
    googletag.pubads().refresh([slot])
  })
}

export function mountGptPageAds(entries) {
  for (const [elementId, unit] of entries) Gt(elementId, unit)
}
