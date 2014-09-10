'use strict';

var words, Interface;

words = require('./data/profanities.json');
Interface = require('datalist-interface');

module.exports = new Interface(words);
