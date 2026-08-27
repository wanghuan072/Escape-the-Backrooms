import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const locales = ['en', 'de', 'fr', 'es']
const errors = []
const staticSeoKeys = [
  'home',
  'levels',
  'maps',
  'codes',
  'relatedGames',
  'search',
  'privacyPolicy',
  'termsOfService',
  'copyright',
  'aboutUs',
  'contactUs',
]

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

function isNonEmpty(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function richTextLength(value) {
  return String(value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length
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
    if (!isNonEmpty(entry.title)) addError(entryScope, 'missing title')
    if (!isNonEmpty(entry.description)) addError(entryScope, 'missing description')
    if (type === 'levels' && !isNonEmpty(entry.pageTitle)) addError(entryScope, 'missing pageTitle used by H1')
    if (!isNonEmpty(entry.detailsHtml)) addError(entryScope, 'missing detailsHtml')
    else if (richTextLength(entry.detailsHtml) < 80) addError(entryScope, 'detailsHtml is unexpectedly short')
    if (!entry.seo?.title) addError(entryScope, 'missing seo.title')
    if (!entry.seo?.description) addError(entryScope, 'missing seo.description')
    if (!entry.seo?.keywords) addError(entryScope, 'missing seo.keywords')
    if (entry.imageUrl && !isNonEmpty(entry.imageAlt)) addError(entryScope, 'imageUrl requires imageAlt')

    if (type === 'maps') {
      entry.mapPoints?.forEach((point, pointIndex) => {
        if (!isNonEmpty(point.title)) addError(`${entryScope}.mapPoints[${pointIndex}]`, 'missing title')
        if (!isNonEmpty(point.content)) addError(`${entryScope}.mapPoints[${pointIndex}]`, 'missing content')
      })
    }

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
      const contentModule = await import(`../../src/content/${type}/${locale}.js`)
      data[type][locale] = contentModule.default || []
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

  const relationsModule = await import('../../src/content/map-level-relations.js')
  const mapLevelRelations = relationsModule.mapLevelRelations || {}
  const englishMapIds = new Set(data.maps.en.map((entry) => String(entry.id)))
  const englishLevelIds = new Set(data.levels.en.map((entry) => String(entry.id)))

  for (const mapId of englishMapIds) {
    const relation = mapLevelRelations[mapId]
    const relatedLevelIds = relation?.levelIds
    if (!Array.isArray(relatedLevelIds) || relatedLevelIds.length === 0) {
      addError(`map-level-relations[${mapId}]`, 'map is missing related level IDs')
      continue
    }
    if (!Number.isInteger(relation.levelLinkParagraph) || relation.levelLinkParagraph < 1) {
      addError(`map-level-relations[${mapId}]`, 'level link paragraph must be a positive integer')
    }
    if (!Number.isInteger(relation.mapLinkParagraph) || relation.mapLinkParagraph < 1) {
      addError(`map-level-relations[${mapId}]`, 'map link paragraph must be a positive integer')
    }
    for (const levelId of relatedLevelIds) {
      if (!englishLevelIds.has(String(levelId))) {
        addError(`map-level-relations[${mapId}]`, `unknown level ID ${levelId}`)
      }
    }
  }

  for (const locale of locales) {
    for (const map of data.maps[locale]) {
      const relation = mapLevelRelations[map.id]
      if (!relation) continue
      const mapParagraphCount = (map.detailsHtml.match(/<\/p>/gi) || []).length
      if (relation.mapLinkParagraph > mapParagraphCount) {
        addError(`maps.${locale}[${map.id}]`, 'map link paragraph does not exist')
      }
      for (const levelId of relation.levelIds) {
        const level = data.levels[locale].find((entry) => String(entry.id) === String(levelId))
        const levelParagraphCount = (level?.detailsHtml.match(/<\/p>/gi) || []).length
        if (!level || relation.levelLinkParagraph > levelParagraphCount) {
          addError(`levels.${locale}[${levelId}]`, `map ${map.id} link paragraph does not exist`)
        }
      }
    }
  }

  for (const mapId of Object.keys(mapLevelRelations)) {
    if (!englishMapIds.has(mapId)) addError(`map-level-relations[${mapId}]`, 'unknown map ID')
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

  for (const locale of locales) {
    const messagesModule = await import(`../../src/content/i18n/${locale}.js`)
    const messages = messagesModule.default || {}
    for (const seoKey of staticSeoKeys) {
      for (const field of ['title', 'description', 'keywords']) {
        if (!isNonEmpty(messages.tdk?.[seoKey]?.[field])) {
          addError(`i18n.${locale}.tdk.${seoKey}`, `missing ${field}`)
        }
      }
    }
  }

  const gamesModule = await import('../../src/content/related-games.js')
  for (const locale of locales) {
    const games = gamesModule.getRelatedGames(locale) || []
    if (games.length === 0) addError(`relatedGames.${locale}`, 'no related games')
    games.forEach((game, index) => {
      const scope = `relatedGames.${locale}[${game.id ?? index}]`
      for (const field of ['id', 'addressBar', 'title', 'summary', 'listSummary', 'editorialVerdict']) {
        if (!isNonEmpty(game[field])) addError(scope, `missing ${field}`)
      }
      for (const field of ['title', 'description', 'keywords']) {
        if (!isNonEmpty(game.seo?.[field])) addError(scope, `missing seo.${field}`)
      }
      for (const field of ['quickFacts', 'listReasons', 'comparisonRows', 'mechanics', 'detailSections', 'practicalTips', 'faq']) {
        if (!Array.isArray(game[field]) || game[field].length === 0) addError(scope, `${field} is empty`)
      }
    })
  }

  const entitiesModule = await import('../../src/content/wiki/entities.js')
  const entities = entitiesModule.default || []
  if (entities.length === 0) addError('entities', 'no entity data')
  entities.forEach((entity, index) => {
    const scope = `entities[${entity.id ?? index}]`
    for (const field of ['title', 'addressBar', 'description']) {
      if (!isNonEmpty(entity[field])) addError(scope, `missing ${field}`)
    }
    collectImageReferences(entity).forEach((reference) => {
      const imagePath = path.join(rootDir, 'public', reference.replace(/^\//, ''))
      if (!fs.existsSync(imagePath)) addError(scope, `missing image ${reference}`)
    })
  })

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
