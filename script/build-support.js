'use strict';

/* Dependencies. */
var fs = require('fs');
var path = require('path');
var json = require('JSONStream');
var join = require('join-stream');
var wrap = require('wrap-stream');

/* Generate. */
fs
  .createReadStream(path.join('index.json'))
  .pipe(json.parse('*', function (value) {
    return '*   `' + value + '`';
  }))
  .pipe(join('\n'))
  .pipe(wrap('# Support\n\n', '\n'))
  .pipe(fs.createWriteStream(path.join('support.md')));
