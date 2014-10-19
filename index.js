'use strict';

/**
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/**
 * Data.
 */

var words;

words = require('./data/profanities.json');

/**
 * Expose profanities.
 */

module.exports = new Interface(words);
