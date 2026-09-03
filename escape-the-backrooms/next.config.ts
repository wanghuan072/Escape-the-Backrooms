import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  skipTrailingSlashRedirect: true,
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
      ],
    }]
  },
  async redirects() {
    return [
      { source: '/levels/level-8-cave-system-guide', destination: '/levels/level-8-cave-system-walkthrough', permanent: true },
      { source: '/de/levels/level-8-cave-system-guide', destination: '/de/levels/level-8-cave-system-walkthrough', permanent: true },
      { source: '/fr/levels/level-8-cave-system-guide', destination: '/fr/levels/level-8-cave-system-walkthrough', permanent: true },
      { source: '/es/levels/level-8-cave-system-guide', destination: '/es/levels/level-8-cave-system-walkthrough', permanent: true },
    ]
  },
}

export default nextConfig
