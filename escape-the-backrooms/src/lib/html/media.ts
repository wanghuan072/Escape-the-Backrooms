function addAttribute(tag: string, name: string, value: string): string {
  if (new RegExp(`\\s${name}\\s*=`, 'i').test(tag)) return tag
  return tag.replace(/\s*\/>$|>$/, (ending) => ` ${name}="${value}"${ending}`)
}

export function optimizeRichHtml(html: string): string {
  return html
    .replace(/<img\b[^>]*>/gi, (tag) => addAttribute(addAttribute(tag, 'loading', 'lazy'), 'decoding', 'async'))
    .replace(/<iframe\b[^>]*>/gi, (tag) => addAttribute(tag, 'loading', 'lazy'))
}
