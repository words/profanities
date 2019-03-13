'use strict'

var fs = require('fs')
var path = require('path')
var pkg = require('cuss/package')

var root = require.resolve('cuss')

pkg.files.forEach(basename => {
  var fp = path.join(root, '..', basename)
  var doc = fs.readFileSync(fp)
  var map = JSON.parse(doc)
  var profanities = Object.keys(map)

  fs.writeFileSync(basename, JSON.stringify(profanities, null, 2) + '\n')

  console.log('✓ ' + basename + ' (' + profanities.length + ')')
})
