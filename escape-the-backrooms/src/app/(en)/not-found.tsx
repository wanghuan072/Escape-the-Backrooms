import NotFoundPage from '@/page/not-found/NotFoundPage'
import { buildMetadata } from '@/seo/metadata'

export const metadata = buildMetadata({ locale: 'en', path: '/', noIndex: true })
export default NotFoundPage
