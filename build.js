/**
 * @typedef {import('type-fest').PackageJson} PackageJson
 */

import assert from 'node:assert/strict'
import fs from 'node:fs/promises'

const cussUrl = new URL('node_modules/cuss/', import.meta.url)
const pkgUrl = new URL('package.json', cussUrl)
/** @type {PackageJson} */
const pkg = JSON.parse(String(await fs.readFile(pkgUrl)))

assert(pkg.exports, 'expected `exports` in `cuss`')

const files = [...new Set(Object.values(pkg.exports))]
let index = -1

/* eslint-disable no-await-in-loop */
while (++index < files.length) {
  const basename = files[index]
  assert(typeof basename === 'string', 'expected string exports in `cuss`')
  const modUrl = new URL(basename, cussUrl)
  /** @type {{cuss: Record<string, number>}} */
  const mod = await import(modUrl.href)
  const profanities = Object.keys(mod.cuss)

  await fs.writeFile(
    basename,
    'export const profanities = ' + JSON.stringify(profanities, null, 2) + '\n'
  )

  console.log('✓ ' + basename + ' (' + profanities.length + ')')
}
/* eslint-enable no-await-in-loop */
