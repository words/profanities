'use strict';

/* Dependencies. */
var test = require('tape');
var profanities = require('.');

/* Tests. */
test('profanities', function (t) {
  t.equal(typeof profanities, 'object', 'should be an array #1');
  t.equal(Array.isArray(profanities), true, 'should be an array #2');
  t.notEqual(profanities.indexOf('barf'), -1, 'should contain words');
  t.end();
});
