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

function defineBannerSlot(path, elementId) {
  const mapping = googletag
    .sizeMapping()
    .addSize([728, 0], [[728, 90], [300, 250]])
    .addSize([0, 0], [300, 250])
    .build()

  return googletag
    .defineSlot(path, [[300, 250], [728, 90]], elementId)
    ?.defineSizeMapping(mapping)
    ?.addService(googletag.pubads())
}

function defineSlotForUnit(unit, elementId) {
  const path = UNIT_PATH[unit] ?? UNIT_PATH[Number(unit)]
  if (!path) return null

  return defineBannerSlot(path, elementId)
}

export function Gt(elementId, unit) {
  const path = UNIT_PATH[unit] ?? UNIT_PATH[Number(unit)]
  if (!path || !elementId) return

  window.googletag = window.googletag || { cmd: [] }
  googletag.cmd.push(() => {
    const slotMap = getSlotMap()
    let slot = slotMap[elementId]

    if (!slot) {
      slot = defineSlotForUnit(unit, elementId)
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
