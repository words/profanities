import fs from 'fs'
import path from 'path'

const pkg = JSON.parse(
  String(fs.readFileSync(path.join('node_modules', 'cuss', 'package.json')))
)

main()

async function main() {
  const files = [...new Set(Object.values(pkg.exports))]
  let index = -1

  while (++index < files.length) {
    const basename = files[index]
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
