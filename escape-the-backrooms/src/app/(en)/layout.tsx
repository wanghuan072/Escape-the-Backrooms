import { RootDocument } from '@/components/layout/RootDocument'
import type { Viewport } from 'next'
import '@/style/globals.css'

export const viewport: Viewport = { themeColor: '#ffd700' }

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>
}
