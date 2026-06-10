/**
 * 旧广告挂载逻辑已停用，改由 GPT（src/utils/gptAds.js）接管。
 */
/*
import { AD_SNIPPETS, NATIVE_AD } from './snippets.js'
// ... 原 highperformanceformat / native 挂载实现
*/

/** @deprecated 已由 GPT 广告替代 */
export function resolveBannerVariant(variant, isMobile) {
  void variant
  void isMobile
  return null
}

/** @deprecated 已由 GPT 广告替代 */
export function mountBannerAd(anchorEl, variant, isMobile = false) {
  void anchorEl
  void variant
  void isMobile
  return () => {}
}

/** @deprecated 已由 GPT 广告替代 */
export function mountNativeAd(anchorEl) {
  void anchorEl
  return () => {}
}
