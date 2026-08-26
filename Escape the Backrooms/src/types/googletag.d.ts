interface GptSlot {
  addService(service: unknown): GptSlot
}

interface GptApi {
  cmd: Array<() => void>
  enums: {
    OutOfPageFormat: {
      BOTTOM_ANCHOR: unknown
      LEFT_SIDE_RAIL: unknown
      RIGHT_SIDE_RAIL: unknown
      INTERSTITIAL: unknown
    }
  }
  setConfig(config: Record<string, unknown>): void
  enableServices(): void
  pubads(): { refresh(slots: GptSlot[]): void }
  defineSlot(path: string, sizes: readonly unknown[], elementId: string): GptSlot | null
  defineOutOfPageSlot(path: string, format: unknown): GptSlot | null
  display(target: string | GptSlot): void
  destroySlots(slots: GptSlot[]): void
}

interface Window {
  googletag?: Partial<GptApi> & { cmd: Array<() => void> }
  adsbygoogle?: unknown[]
  dataLayer?: unknown[]
  __gptServicesEnabled?: boolean
}
