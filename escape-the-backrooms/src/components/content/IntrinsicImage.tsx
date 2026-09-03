import Image, { type ImageProps } from 'next/image'
import { imageDimensions } from '@/config/image-dimensions.generated'

type IntrinsicImageProps = Omit<ImageProps, 'height' | 'src' | 'width'> & {
  src: string
}

const externalDimensions: Record<string, { width: number; height: number }> = {
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1987080/header.jpg': { width: 460, height: 215 },
  'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1987080/capsule_616x353.jpg': { width: 616, height: 353 },
}

export function IntrinsicImage({ src, alt, ...props }: IntrinsicImageProps) {
  const dimensions = imageDimensions[src]
  if (dimensions) return <Image {...props} src={src} alt={alt} width={dimensions.width} height={dimensions.height} />

  const external = externalDimensions[src]
  if (external) return <img {...props} src={src} alt={alt} width={external.width} height={external.height} />

  return <img {...props} src={src} alt={alt} />
}
