function addAttribute(tag: string, name: string, value: string): string {
  if (new RegExp(`\\s${name}\\s*=`, 'i').test(tag)) return tag
  const escapedValue = value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return tag.replace(/\s*\/>$|>$/, (ending) => ` ${name}="${escapedValue}"${ending}`)
}

export function optimizeRichHtml(html: string): string {
  return html
    .replace(/<img\b[^>]*>/gi, (tag) => {
      const prepared = addAttribute(addAttribute(tag, 'loading', 'lazy'), 'decoding', 'async')
      const source = tag.match(/\ssrc\s*=\s*["']([^"']+)["']/i)?.[1]
      const dimensions = source ? imageDimensions[source] : undefined
      return dimensions ? addAttribute(addAttribute(prepared, 'width', String(dimensions.width)), 'height', String(dimensions.height)) : prepared
    })
    .replace(/<iframe\b[^>]*>/gi, (tag) => addAttribute(addAttribute(tag, 'loading', 'lazy'), 'referrerpolicy', 'strict-origin-when-cross-origin'))
}

export function splitRichHtmlAtFirstParagraph(html: string): { introHtml: string; remainingHtml: string } {
  const match = html.match(/^\s*<p\b[^>]*>[\s\S]*?<\/p>/i)
  if (!match || match.index === undefined) return { introHtml: '', remainingHtml: html }
  const end = match.index + match[0].length
  return { introHtml: html.slice(0, end), remainingHtml: html.slice(end) }
}

export function splitRichHtmlAtFirstIframe(html: string): { videoHtml: string; remainingHtml: string } {
  const iframe = html.match(/<iframe\b[^>]*>[\s\S]*?<\/iframe\s*>/i)
  if (!iframe || iframe.index === undefined) return { videoHtml: '', remainingHtml: html }

  let blockStart = iframe.index
  let blockEnd = iframe.index + iframe[0].length
  const prefix = html.slice(0, iframe.index)
  const headings = [...prefix.matchAll(/<h2\b[^>]*>[\s\S]*?<\/h2>/gi)]
  const heading = headings.at(-1)

  if (heading?.index !== undefined) {
    const afterHeading = heading.index + heading[0].length
    const betweenHeadingAndIframe = prefix.slice(afterHeading)
    const videoWrapper = betweenHeadingAndIframe.match(/^\s*(<div\b[^>]*>)?\s*$/i)
    if (videoWrapper) {
      blockStart = heading.index
      if (videoWrapper[1]) {
        const wrapperClose = html.slice(blockEnd).match(/^\s*<\/div\s*>/i)
        if (wrapperClose) blockEnd += wrapperClose[0].length
      }
    }
  }

  return {
    videoHtml: html.slice(blockStart, blockEnd),
    remainingHtml: `${html.slice(0, blockStart)}${html.slice(blockEnd)}`,
  }
}

export function identifyFirstVideoIframe(html: string, title: string): string {
  return html.replace(/<iframe\b[^>]*>/i, (tag) => {
    const identified = addAttribute(tag, 'id', 'level-video-player')
    const titled = addAttribute(identified, 'title', title)
    return addAttribute(titled, 'allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share')
  })
}

export function extractVideoHighlights(html: string): { title: string; items: string[]; remainingHtml: string } {
  const match = html.match(/<h3\b[^>]*>([\s\S]*?)<\/h3>\s*<ul>([\s\S]*?)<\/ul>/i)
  if (!match) return { title: '', items: [], remainingHtml: html }
  const items = [...match[2].matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((item) => item[1].trim())
  if (!items.length) return { title: '', items: [], remainingHtml: html }
  return {
    title: match[1].replace(/<[^>]+>/g, '').trim(),
    items,
    remainingHtml: html.replace(match[0], ''),
  }
}

export function extractRichHtmlHeadings(html: string): string[] {
  return [...html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi)]
    .map((heading) => heading[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
    .filter(Boolean)
}
import { imageDimensions } from '@/config/image-dimensions.generated'
