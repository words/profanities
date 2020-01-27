# profanities

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of lots of profane words.

> See [`cuss`][cuss] for the same words, rated for sureness: how
> likely they are to be used as either profanity or clean text.

## Install

[npm][]:

```sh
npm install profanities
```

## Use

```js
var profanities = require('profanities')

console.log(profanities.includes('butt')) // true
```

### Use of locale versions

For example, to use French:

```js
var profanities = require('profanities/fr')

console.log(profanities.includes('boule')) // true
```

## API

### `profanities`

`profanities` exposes a list of strings (`Array.<string>`).

## Support

`profanities` supports many profane words and phrases in different languages.

Note that the words listed in `profanities` might *not* be profane in certain
contexts.

See [`cuss`][cuss] for the supported terms.

## Related

*   [buzzwords](https://github.com/words/buzzwords)
    — List of buzzwords
*   [cuss][]
    — Map of profane words to a rating of sureness
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

## Contributing

Thanks, contributions are greatly appreciated!  :+1:
Words and new languages can be added to [`cuss`][cuss].
After they are added there, this project can be built to include the changes.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/profanities.svg

[build]: https://travis-ci.org/words/profanities

[downloads-badge]: https://img.shields.io/npm/dm/profanities.svg

[downloads]: https://www.npmjs.com/package/profanities

[size-badge]: https://img.shields.io/bundlephobia/minzip/profanities.svg

[size]: https://bundlephobia.com/result?p=profanities

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[cuss]: https://github.com/words/cuss
