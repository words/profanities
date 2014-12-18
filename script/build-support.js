'use strict';

/*
 * Dependencies.
 */

var fs,
    words;

fs = require('fs');
words = require('..');

/*
 * Write.
 */

fs.writeFileSync('Supported-words.md',
    'Supported Words\n' +
    '=================\n' +
    '\n' +

    words.all().map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
