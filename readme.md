# profanities [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

List of 1551 (possible) English profane words.

## Installation

[npm][npm-install]:

```bash
npm install profanities
```

**profanities** is also available for [duo][duo-install], and as an
AMD, CommonJS, and globals module, [uncompressed and compressed][releases].

## Usage

```js
var profanities = require('profanities');

profanities.length; // 1551

console.log(typeof profanities[0]); // 'string'
```

## API

### `profanities`

**Type**: `Array.<string>` — **profanities** exposes a list of strings.

## Support

**profanities** supports 1551 English profane words and phrases.
For a complete list, see [support.md][support] (:warning: **this file
contains (very) offensive terms**).

Note that the words listed in **profanities** might **not** be profane
in certain contexts.

## Data

Part of the list is scraped from [Luis von Ahn’s Research Group (Carnegie
Mellon)][luis-von-ahn].  I could not find
any license information on that page.

Another list is based on the [“List of ethnic slurs” from
WikiPedia][racial-slurs].

## Related

*   [buzzwords](https://github.com/wooorm/buzzwords)
    — List of buzzwords;

*   [dale-chall](https://github.com/wooorm/dale-chall)
    — List of familiar American-English words (1995);

*   [fillers](https://github.com/wooorm/fillers)
    — List of filler words.

*   [hedges](https://github.com/wooorm/hedges)
    — List of hedge words;

*   [spache](https://github.com/wooorm/spache)
    — List of simple American-English words (1974);

*   [weasels](https://github.com/wooorm/profanities)
    — List of weasel words.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/profanities.svg

[travis]: https://travis-ci.org/wooorm/profanities

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/profanities.svg

[codecov]: https://codecov.io/github/wooorm/profanities

[npm-install]: https://docs.npmjs.com/cli/install

[duo-install]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/profanities/releases

[license]: LICENSE

[support]: support.md

[author]: http://wooorm.com

[luis-von-ahn]: http://www.cs.cmu.edu/~biglou/resources/

[racial-slurs]: https://en.wikipedia.org/wiki/List_of_ethnic_slurs
