const baseUrl = process.env.PAGE_AUDIT_BASE_URL?.replace(/\/$/, '')
if (!baseUrl) throw new Error('PAGE_AUDIT_BASE_URL is required')

const sitemap = await (await fetch(`${baseUrl}/sitemap.xml`)).text()
const paths = [...sitemap.matchAll(/<loc>https:\/\/escapethebackrooms\.org([^<]*)<\/loc>/g)].map((match) => match[1] || '/')
const missing = new Map()

for (const path of paths) {
  const html = await (await fetch(`${baseUrl}${path}`)).text()
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0]
    if (/\bwidth=/.test(tag) && /\bheight=/.test(tag)) continue
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1] ?? '(missing src)'
    if (!missing.has(src)) missing.set(src, [])
    if (missing.get(src).length < 3) missing.get(src).push(path)
  }
}

console.log(JSON.stringify(Object.fromEntries(missing), null, 2))
console.error(`${missing.size} unique rendered image sources are missing intrinsic dimensions.`)
