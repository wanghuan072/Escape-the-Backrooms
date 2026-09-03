function addAttribute(tag: string, name: string, value: string): string {
  if (new RegExp(`\\s${name}\\s*=`, 'i').test(tag)) return tag
  return tag.replace(/\s*\/>$|>$/, (ending) => ` ${name}="${value}"${ending}`)
}

export function optimizeRichHtml(html: string): string {
  return html
    .replace(/<img\b[^>]*>/gi, (tag) => addAttribute(addAttribute(tag, 'loading', 'lazy'), 'decoding', 'async'))
    .replace(/<iframe\b[^>]*>/gi, (tag) => addAttribute(tag, 'loading', 'lazy'))
}

export function splitRichHtmlAtFirstParagraph(html: string): { introHtml: string; remainingHtml: string } {
  const match = html.match(/<p\b[^>]*>[\s\S]*?<\/p>/i)
  if (!match || match.index === undefined) return { introHtml: '', remainingHtml: html }
  const end = match.index + match[0].length
  return { introHtml: html.slice(0, end), remainingHtml: html.slice(end) }
}

export function splitRichHtmlAtFirstIframe(html: string): { videoHtml: string; remainingHtml: string } {
  const match = html.match(/<iframe\b[^>]*>/i)
  if (!match || match.index === undefined) return { videoHtml: '', remainingHtml: html }
  const end = match.index + match[0].length
  return { videoHtml: html.slice(0, end), remainingHtml: html.slice(end) }
}

export function identifyFirstVideoIframe(html: string): string {
  return html.replace(/<iframe\b[^>]*>/i, (tag) => addAttribute(tag, 'id', 'level-video-player'))
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
