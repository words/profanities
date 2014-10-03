'use strict';

var fs = require('fs'),
    words = require('./data/profanities.json');

fs.writeFileSync('Supported-profanities.md',
    'Supported Profanities\n' +
    '=================\n' +
    '\n' +

    words.map(function (word) {
        return '* “' + word + '”';
    }).join(';\n') +

    '.\n'
);
