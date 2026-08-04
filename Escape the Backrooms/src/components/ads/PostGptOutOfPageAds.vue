<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { GPT_UNITS } from '@/config/gpt'
import { queueGpt } from '@/utils/gptRuntime'

let active = false
let slots = []

onMounted(() => {
  active = true
  queueGpt((googletag) => {
    if (!active) return

    const formats = [
      [GPT_UNITS.post.anchor, googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR],
      [GPT_UNITS.post.anchor, googletag.enums.OutOfPageFormat.LEFT_SIDE_RAIL],
      [GPT_UNITS.post.anchor, googletag.enums.OutOfPageFormat.RIGHT_SIDE_RAIL],
      [GPT_UNITS.post.interstitial, googletag.enums.OutOfPageFormat.INTERSTITIAL],
    ]

    slots = formats
      .map(([path, format]) => googletag.defineOutOfPageSlot(path, format))
      .filter(Boolean)

    for (const slot of slots) {
      slot.addService(googletag.pubads())
      googletag.display(slot)
    }

    if (slots.length) googletag.pubads().refresh(slots)
  })
})

onBeforeUnmount(() => {
  active = false
  const mountedSlots = slots
  slots = []

  if (mountedSlots.length) {
    queueGpt((googletag) => googletag.destroySlots(mountedSlots))
  }
})
</script>

<template>
  <!-- 内页 GPT 页外广告：底部锚定、左侧、右侧、插屏。 -->
  <span v-if="false" aria-hidden="true"></span>
</template>
