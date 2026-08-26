import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const errors = []

function relative(filePath) {
  return path.relative(rootDir, filePath).replaceAll('\\', '/')
}

function walk(directory) {
  if (!fs.existsSync(directory)) return []
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(target) : [target]
  })
}

function fail(message) {
  errors.push(message)
}

const sourceDir = path.join(rootDir, 'src')
const sourceFiles = walk(sourceDir)
const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'))
const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies }

for (const dependency of ['vue', 'vue-router', 'vue-i18n', 'pinia', 'vite', '@vitejs/plugin-vue']) {
  if (dependency in dependencies) fail(`legacy dependency remains: ${dependency}`)
}

for (const legacyPath of ['index.html', 'jsconfig.json', 'vite.config.js', 'vite.config.ts', 'dist', '.github']) {
  if (fs.existsSync(path.join(rootDir, legacyPath))) fail(`legacy path remains: ${legacyPath}`)
}

for (const requiredPath of [
  'docs/architecture-and-maintenance.md',
  'src/app',
  'src/page',
  'src/components',
  'src/style',
  'src/types',
  'src/lib',
  'src/config',
  'src/seo',
  'scripts/data',
  'scripts/audit',
  'scripts/audit/validate-pages.js',
  'public/collet-data.js',
  '.vercelignore',
  'vercel.json',
]) {
  if (!fs.existsSync(path.join(rootDir, requiredPath))) fail(`required path is missing: ${requiredPath}`)
}

for (const filePath of sourceFiles) {
  const file = relative(filePath)
  const extension = path.extname(filePath)
  const text = fs.readFileSync(filePath, 'utf8')

  if (extension === '.vue') fail(`Vue source file remains: ${file}`)
  if (extension === '.css' && !file.startsWith('src/style/')) fail(`CSS is outside src/style: ${file}`)
  if (extension === '.tsx' && /style=\{\{/.test(text)) fail(`static inline style remains: ${file}`)
  if (file.startsWith('src/components/') && /from ['"]@\/page/.test(text)) fail(`components -> page import: ${file}`)
  if (file.startsWith('src/lib/') && /from ['"]@\/page/.test(text)) fail(`lib -> page import: ${file}`)
  if (file.startsWith('src/content/') && /from ['"]@\/lib/.test(text)) fail(`content -> lib import: ${file}`)
}

const dataDir = path.join(sourceDir, 'data')
for (const filePath of walk(dataDir)) {
  if (path.extname(filePath) !== '.json') fail(`src/data must contain JSON only: ${relative(filePath)}`)
}

for (const forbiddenPath of [
  'src/types/content.ts',
  'src/lib/data/content.ts',
  'src/lib/data/routes.ts',
  'src/content/relatedGames.js',
  'src/app/(en)/site-404',
  'src/app/[locale]/site-404',
]) {
  if (fs.existsSync(path.join(rootDir, forbiddenPath))) fail(`superseded broad or non-kebab file remains: ${forbiddenPath}`)
}

const emptyDirectories = []
function findEmptyDirectories(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const target = path.join(directory, entry.name)
    if (fs.readdirSync(target).length === 0) emptyDirectories.push(relative(target))
    else findEmptyDirectories(target)
  }
}
findEmptyDirectories(sourceDir)
for (const directory of emptyDirectories) fail(`empty source directory remains: ${directory}`)

const localStorageNeedle = "window.localStorage.removeItem('__lsv__');"
const localStorageOccurrences = sourceFiles.reduce((count, filePath) => {
  const text = fs.readFileSync(filePath, 'utf8')
  return count + text.split(localStorageNeedle).length - 1
}, 0)
if (localStorageOccurrences !== 1) {
  fail(`expected one localStorage cleanup source occurrence, found ${localStorageOccurrences}`)
}

const referencedImages = new Set()
for (const filePath of sourceFiles) {
  const text = fs.readFileSync(filePath, 'utf8')
  for (const match of text.matchAll(/\/images\/[^\s"'\\`()<>]+/g)) {
    const reference = match[0].split(/[?#]/)[0]
    referencedImages.add(reference)
    const publicPath = path.join(rootDir, 'public', reference.replace(/^\//, ''))
    if (!fs.existsSync(publicPath)) fail(`missing public image referenced by ${relative(filePath)}: ${reference}`)
  }
}

const publicImagesDir = path.join(rootDir, 'public/images')
for (const imagePath of walk(publicImagesDir)) {
  const reference = `/${relative(imagePath).replace(/^public\//, '')}`
  if (!referencedImages.has(reference)) fail(`unreferenced public image remains: ${reference}`)
}

if (errors.length) {
  console.error(`Structure validation failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Structure validation passed: ${sourceFiles.length} source files checked.`)
