# profanities [![Build Status](https://travis-ci.org/wooorm/profanities.svg?branch=master)](https://travis-ci.org/wooorm/profanities) [![Coverage Status](https://img.shields.io/coveralls/wooorm/profanities.svg)](https://coveralls.io/r/wooorm/profanities?branch=master)

List of 1300 English profane words.

## Installation

npm:
```sh
$ npm install profanities
```

Component:
```sh
$ component install wooorm/profanities
```

Bower:
```sh
$ bower install profanities
```

## Usage

```js
var profanities = require('profanities');

profanities.is('biteme'); // true
profanities.is('unicorn'); // false

profanities.add('unicorn');
profanities.is('unicorn'); // true

profanities.remove('unicorn');
profanities.is('unicorn'); // false
```

## API

**profanities** exposes the profane words using [the datalist-interface API](https://github.com/wooorm/datalist-interface#datalistinterfaceisword).

## Supported words

For a complete list of profane words, see [Supported-profanities.md](Supported-profanities.md); **note that this file contains terms which might be viewed as (very) offensive**.

Note that the words listed in **profanities** might **not** be profane in certain contexts.

## Data

The list is scraped from [Luis von Ahn's Research Group (Carnegie Mellon)](http://www.cs.cmu.edu/~biglou/resources/). I could not find any license information on that page.

## Related

- [buzzwords](https://github.com/wooorm/buzzwords) — List of buzzwords;
- [fillers](https://github.com/wooorm/fillers) — List of filler words;
- [hedges](https://github.com/wooorm/hedges) — List of hedge words;
- [weasels](https://github.com/wooorm/weasels) — List of weasel words.

## License

MIT © Titus Wormer
