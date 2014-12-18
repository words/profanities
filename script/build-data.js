'use strict';

/*
 * Dependencies.
 */

var fs,
    textToJSON;

fs = require('fs');
textToJSON = require('plain-text-data-to-json');

/*
 * Data.
 */

var data;

data = textToJSON(fs.readFileSync('data/profanities.txt', 'utf8'));

/*
 * Validate.
 */

data.forEach(function (word) {
    if (word.toLowerCase() !== word) {
        throw new Error(
            'Mixed-case entry `' + word + '`. ' +
            'Please ensure all entries are lower case.'
        );
    }
});

/*
 * Write.
 */

fs.writeFileSync('data/profanities.json', JSON.stringify(data, null, 2));
