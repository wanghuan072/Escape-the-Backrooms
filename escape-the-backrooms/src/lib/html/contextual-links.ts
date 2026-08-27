export interface ContextualLink {
  paragraph: number
  lead: string
  href: string
  label: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Adds contextual links inside existing prose instead of rendering a separate navigation block. */
export function addContextualLinks(html: string, links: ContextualLink[]): string {
  if (links.length === 0) return html

  const linksByParagraph = new Map<number, ContextualLink[]>()
  for (const link of links) {
    const paragraphLinks = linksByParagraph.get(link.paragraph) ?? []
    paragraphLinks.push(link)
    linksByParagraph.set(link.paragraph, paragraphLinks)
  }

  let paragraphIndex = 0
  return html.replace(/<\/p>/gi, (closingTag) => {
    paragraphIndex += 1
    const paragraphLinks = linksByParagraph.get(paragraphIndex)
    if (!paragraphLinks) return closingTag
    const markup = paragraphLinks
      .map((link) => ` ${escapeHtml(link.lead)} <a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>.`)
      .join('')
    return `${markup}${closingTag}`
  })
}
