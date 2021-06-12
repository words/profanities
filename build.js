'use strict'

var fs = require('fs')
var path = require('path')
var pkg = require('cuss/package')

var root = require.resolve('cuss')

const files = pkg.files
let index = -1

while (++index < files.length) {
  const basename = files[index]
  var fp = path.join(root, '..', basename)
  var doc = fs.readFileSync(fp)
  var map = JSON.parse(doc)
  var profanities = Object.keys(map)

  fs.writeFileSync(basename, JSON.stringify(profanities, null, 2) + '\n')

  console.log('✓ ' + basename + ' (' + profanities.length + ')')
}
