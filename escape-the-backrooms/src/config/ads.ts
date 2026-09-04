const BASE = '/23355878051/escapethebackrooms.org_0713_all'

// GPT is intentionally paused site-wide. Change only this value to true to restore GPT;
// AdSense is configured separately and is unaffected by this switch.
export const GPT_ADS_ENABLED = false

export const GPT_UNITS = {
  home: {
    anchor: `${BASE}/home_escapethebackrooms.org_0804_anchor_1`,
    interstitial: `${BASE}/home_escapethebackrooms.org_0804_inter_1`,
    banners: {
      1: { path: `${BASE}/home_escapethebackrooms.org_0804_banner_1`, sizes: [[300, 250], [728, 90], 'fluid'] },
      2: { path: `${BASE}/home_escapethebackrooms.org_0804_banner_2`, sizes: [[300, 250], 'fluid', [336, 280], [728, 90]] },
      3: { path: `${BASE}/home_escapethebackrooms.org_0804_banner_3`, sizes: [[300, 250], [728, 90], 'fluid'] },
    },
  },
  post: {
    anchor: `${BASE}/post_escapethebackrooms.org_0804_anchor_1`,
    interstitial: `${BASE}/post_escapethebackrooms.org_0804_inter_1`,
    banners: {
      1: { path: `${BASE}/post_escapethebackrooms.org_0804_banner_1`, sizes: [[300, 250], 'fluid', [728, 90]] },
      2: { path: `${BASE}/post_escapethebackrooms.org_0804_banner_2`, sizes: [[300, 250], [728, 90], [336, 280], 'fluid'] },
      3: { path: `${BASE}/post_escapethebackrooms.org_0804_banner_3`, sizes: [[300, 250], [728, 90], 'fluid'] },
    },
  },
} as const
