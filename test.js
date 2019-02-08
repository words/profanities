'use strict'

var test = require('tape')
var profanities = require('.')

var langs = ['ar-latn', 'es', 'fr', 'pt-br']

test('profanities', function(t) {
  t.equal(typeof profanities, 'object', 'should be an array #1')
  t.equal(Array.isArray(profanities), true, 'should be an array #2')
  t.notEqual(profanities.indexOf('barf'), -1, 'should contain words')

  langs.forEach(function(lang) {
    t.doesNotThrow(function() {
      require('./' + lang)
    }, 'Should support ' + lang)
  })

  t.end()
})
