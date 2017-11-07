# profanities [![Build Status][travis-badge]][travis]

List of 1768 (possible) English profane words.

> See [**cuss**][cuss] for the same words, rated for sureness: how
> likely it is to be used as either profanity or clean text.

## Installation

[npm][]:

```bash
npm install profanities
```

## Usage

```js
var profanities = require('profanities');

profanities.length; // 1768

console.log(typeof profanities[0]); // 'string'
```

## API

### `profanities`

**Type**: `Array.<string>` — **profanities** exposes a list of strings.

## Support

**profanities** supports 1768 English profane words and phrases.
For a complete list, see [support.md][support] (:warning: **this file
contains (very) offensive terms**).

Note that the words listed in **profanities** might **not** be profane
in certain contexts.

## Data

Part of the list is scraped from [Luis von Ahn’s Research Group (Carnegie
Mellon)][luis-von-ahn].  I could not find
any license information on that page.

Another list is based on the [`List of ethnic slurs` from
WikiPedia][racial-slurs].

## Related

*   [buzzwords](https://github.com/words/buzzwords)
    — List of buzzwords
*   [dale-chall](https://github.com/words/dale-chall)
    — List of familiar American-English words (1995)
*   [fillers](https://github.com/words/fillers)
    — List of filler words
*   [hedges](https://github.com/words/hedges)
    — List of hedge words
*   [spache](https://github.com/words/spache)
    — List of simple American-English words (1974)
*   [weasels](https://github.com/words/weasels)
    — List of weasel words

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/words/profanities.svg

[travis]: https://travis-ci.org/words/profanities

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[support]: support.md

[author]: http://wooorm.com

[luis-von-ahn]: http://www.cs.cmu.edu/~biglou/resources/

[racial-slurs]: https://en.wikipedia.org/wiki/List_of_ethnic_slurs

[cuss]: https://github.com/wooorm/cuss
