'use strict';

/**
 * Dependencies.
 */

var profanities,
    assert;

profanities = require('./');
assert = require('assert');

/**
 * Tests.
 */

describe('profanities', function () {
    it('should be an `Object`', function () {
        assert(typeof profanities === 'object');
    });
});

describe('profanities.is(word)', function () {
    it('should return true if a word is listed', function () {
        assert(profanities.is('biteme') === true);
    });

    it('should return false if a word is not listed', function () {
        assert(profanities.is('unicorn') === false);
    });
});

describe('profanities.all()', function () {
    var all;

    all = profanities.all();

    it('should return an array', function () {
        assert('length' in all);
        assert(typeof all === 'object');
    });

    it('every entry should be lowercase', function () {
        all.forEach(function (word) {
            assert(word.toLowerCase() === word);
        });
    });

    it('every entry should only occur once', function () {
        all.forEach(function (word, index) {
            assert(all.indexOf(word, index + 1) === -1);
        });
    });

    it('should be immutable', function () {
        all.push('unicorn');

        assert(profanities.all().indexOf('unicorn') === -1);
    });
});

describe('profanities.add(word) and profanities.remove(word)',
    function () {
        it('should add and remove a word', function () {
            assert(profanities.is('unicorn') === false);

            profanities.add('unicorn');

            assert(profanities.is('unicorn') === true);

            profanities.remove('unicorn');

            assert(profanities.is('unicorn') === false);
        });

        it('should add and remove multiple profanities', function () {
            assert(profanities.is('unicorn') === false);
            assert(profanities.is('rainbow') === false);

            profanities.add('unicorn', 'rainbow');

            assert(profanities.is('unicorn') === true);
            assert(profanities.is('rainbow') === true);

            profanities.remove('unicorn', 'rainbow');

            assert(profanities.is('unicorn') === false);
            assert(profanities.is('rainbow') === false);
        });

        it('should fail silently when removing a non-existing word',
            function () {
                assert(profanities.is('unicorn') === false);

                profanities.remove('unicorn');

                assert(profanities.is('unicorn') === false);
            }
        );
    }
);
