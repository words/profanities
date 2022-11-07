import assert from 'node:assert'
import test from 'node:test'
import {profanities} from './index.js'

test('profanities', () => {
  assert.equal(typeof profanities, 'object', 'should be an array #1')
  assert.equal(Array.isArray(profanities), true, 'should be an array #2')
  assert.notEqual(profanities.indexOf('barf'), -1, 'should contain words')
})
