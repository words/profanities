/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module profanities:script:build-data
 * @fileoverview Generate a database.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var path = require('path');
var got = require('got');
var json = require('JSONStream');
var split = require('split');
var filter = require('stream-filter');
var merge = require('merge-stream');
var unique = require('unique-stream');
var map = require('map-stream');
var sort = require('sort-stream');
var normalize = require('nlcst-normalize');

/*
 * List of words with a very high chance of being a
 * false-positive, either because they are a normal
 * word to describe a group of people, e.g., republican,
 * an accepted term, e.g., color, or not *that* bad,
 * e.g., angry.
 */

var notSoBad = fs
    .readFileSync(path.join('script', 'not-so-bad.txt'), 'utf8')
    .split('\n');

/*
 * Crawl.
 */

var offensive = got
    .stream('http://www.cs.cmu.edu/~biglou/resources/bad-words.txt')
    .pipe(split());

/*
 * Load.
 */

var racial = fs
    .createReadStream(path.join('script', 'racial.txt'))
    .pipe(split());

/*
 * Generate.
 */

merge(offensive, racial)
    .pipe(map(function (data, callback) {
        callback(null, normalize(data).trim());
    }))
    .pipe(filter(Boolean))
    .pipe(filter(function (value) {
        return notSoBad.indexOf(value) === -1;
    }))
    .pipe(unique())
    .pipe(sort())
    .pipe(json.stringify('[\n  ', ',\n  ', '\n]\n'))
    .pipe(fs.createWriteStream(path.join('data', 'index.json')));
