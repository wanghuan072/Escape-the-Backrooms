const ids = process.argv.slice(2)

if (!ids.length) {
  console.error('Pass one or more YouTube video IDs.')
  process.exit(1)
}

function readInitialPlayerResponse(html) {
  const marker = 'var ytInitialPlayerResponse = '
  const start = html.indexOf(marker)
  if (start < 0) throw new Error('ytInitialPlayerResponse was not found')
  const jsonStart = start + marker.length
  const jsonEnd = html.indexOf(';</script>', jsonStart)
  if (jsonEnd < 0) throw new Error('ytInitialPlayerResponse was not terminated')
  return JSON.parse(html.slice(jsonStart, jsonEnd))
}

async function readVideo(id) {
  const response = await fetch(`https://www.youtube.com/watch?v=${id}&hl=en`, {
    headers: { 'user-agent': 'Mozilla/5.0' },
  })
  if (!response.ok) throw new Error(`${id}: HTTP ${response.status}`)
  const player = readInitialPlayerResponse(await response.text())
  const details = player.videoDetails ?? {}
  const microformat = player.microformat?.playerMicroformatRenderer ?? {}
  const description = details.shortDescription ?? ''
  const timestampSection = description.split(/(?:⏱\s*)?TIMESTAMPS?:/i)[1]?.split(/\n(?:🔗|#)/)[0] ?? ''
  const chapters = [...timestampSection.matchAll(/^(?:(\d+):)?(\d+):(\d+)\s+(.+)$/gm)].map((match) => {
    const hours = Number(match[1] ?? 0)
    const minutes = Number(match[2])
    const seconds = Number(match[3])
    return { startSeconds: hours * 3600 + minutes * 60 + seconds, label: match[4].trim() }
  })
  return {
    id,
    title: details.title,
    lengthSeconds: Number(details.lengthSeconds),
    publishDate: microformat.publishDate,
    uploadDate: microformat.uploadDate,
    chapters,
    ...(process.env.YOUTUBE_FULL_DESCRIPTION === '1' ? { description } : {}),
  }
}

const results = []
for (const id of ids) {
  try {
    results.push(await readVideo(id))
  } catch (error) {
    results.push({ id, error: error instanceof Error ? error.message : String(error) })
  }
}

console.log(JSON.stringify(results, null, 2))
