import fs from 'node:fs'
import path from 'node:path'

/** @type {{exports: Record<string, string>}} */
const pkg = JSON.parse(
  String(fs.readFileSync(path.join('node_modules', 'cuss', 'package.json')))
)

main()

async function main() {
  const files = [...new Set(Object.values(pkg.exports))]
  let index = -1

  while (++index < files.length) {
    const basename = files[index]
    /** @type {{cuss: Record<string, number>}} */
    // eslint-disable-next-line no-await-in-loop
    const mod = await import('./' + path.join('node_modules', 'cuss', basename))
    const profanities = Object.keys(mod.cuss)

    fs.writeFileSync(
      basename,
      'export const profanities = ' +
        JSON.stringify(profanities, null, 2) +
        '\n'
    )

    console.log('✓ ' + basename + ' (' + profanities.length + ')')
  }
}
