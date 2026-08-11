import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const locales = ['en', 'de', 'fr', 'es']
const errors = []

const normalizeAddress = (address) => String(address || '')
  .trim()
  .toLowerCase()
  .replace(/-walkthrough$/i, '')

const extractLevelKey = (value) => {
  const match = String(value || '').match(/(?:level|niveau|nivel)[-\s]*([0-9]+(?:[.-][0-9]+)?|[!b]+)/i)
  return match?.[1]?.replace('-', '.')?.toLowerCase() || null
}

function addError(scope, message) {
  errors.push(`${scope}: ${message}`)
}

function findDuplicates(values) {
  return [...new Set(values.filter((value, index) => values.indexOf(value) !== index))]
}

function collectImageReferences(entry) {
  const references = [entry.imageUrl, entry.mapImageUrl].filter(Boolean)
  const html = entry.detailsHtml || ''

  for (const match of html.matchAll(/(?:src|href)=["'](\/images\/[^"']+)["']/g)) {
    references.push(match[1])
  }

  return references
}

function validateEntries(type, locale, entries) {
  const scope = `${type}.${locale}`
  const duplicateIds = findDuplicates(entries.map((entry) => entry.id))
  const duplicateAddresses = findDuplicates(entries.map((entry) => entry.addressBar))

  duplicateIds.forEach((id) => addError(scope, `duplicate id ${id}`))
  duplicateAddresses.forEach((address) => addError(scope, `duplicate addressBar ${address}`))

  entries.forEach((entry, index) => {
    const entryScope = `${scope}[${entry.id ?? index}]`
    if (entry.id === undefined || entry.id === null) addError(entryScope, 'missing id')
    if (!entry.addressBar) addError(entryScope, 'missing addressBar')
    if (!entry.seo?.title) addError(entryScope, 'missing seo.title')
    if (!entry.seo?.description) addError(entryScope, 'missing seo.description')

    collectImageReferences(entry).forEach((reference) => {
      const imagePath = path.join(rootDir, 'public', reference.replace(/^\//, ''))
      if (!fs.existsSync(imagePath)) addError(entryScope, `missing image ${reference}`)
    })
  })
}

function resolvesFeaturedLevel(featured, localizedLevels, englishLevels) {
  const address = featured?.addressBar || ''
  if (!address || address.startsWith('#')) return true

  const normalizedAddress = normalizeAddress(address)
  if (localizedLevels.some((entry) => normalizeAddress(entry.addressBar) === normalizedAddress)) {
    return true
  }

  const englishEntry = englishLevels.find(
    (entry) => normalizeAddress(entry.addressBar) === normalizedAddress,
  )
  if (englishEntry && localizedLevels.some((entry) => entry.id === englishEntry.id)) return true

  const levelKey = extractLevelKey(address) || extractLevelKey(featured.title)
  return Boolean(
    levelKey && localizedLevels.some((entry) =>
      [entry.addressBar, entry.title, entry.pageTitle, entry.sideBarInfo?.name]
        .some((value) => extractLevelKey(value) === levelKey),
    ),
  )
}

async function main() {
  const data = { levels: {}, maps: {} }

  for (const type of ['levels', 'maps']) {
    for (const locale of locales) {
      const module = await import(`../src/data/${type}/${locale}.js`)
      data[type][locale] = module.default || []
      validateEntries(type, locale, data[type][locale])
    }
  }

  for (const type of ['levels', 'maps']) {
    const englishIds = data[type].en.map((entry) => entry.id).sort().join(',')
    for (const locale of locales.slice(1)) {
      const localizedIds = data[type][locale].map((entry) => entry.id).sort().join(',')
      if (localizedIds !== englishIds) addError(`${type}.${locale}`, 'ids differ from English data')
    }
  }

  for (const locale of locales) {
    data.levels[locale].forEach((level) => {
      level.featured?.forEach((featured) => {
        if (!resolvesFeaturedLevel(featured, data.levels[locale], data.levels.en)) {
          addError(`levels.${locale}[${level.id}]`, `unresolved featured address ${featured.addressBar}`)
        }
      })
    })
  }

  if (errors.length) {
    console.error(`Data validation failed with ${errors.length} error(s):`)
    errors.forEach((error) => console.error(`- ${error}`))
    process.exit(1)
  }

  console.log(
    `Data validation passed: ${locales.length} locales, ` +
    `${data.levels.en.length} levels/locale, ${data.maps.en.length} maps/locale.`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
