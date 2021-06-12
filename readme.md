# profanities

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of lots of profane words.

> See [`cuss`][cuss] for the same words, rated for sureness: how
> likely they are to be used as either profanity or clean text.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

[npm][]:

```sh
npm install profanities
```

## Use

```js
import {profanities} from 'profanities'

console.log(profanities.includes('butt')) // true
```

### Use of locale versions

For example, to use French:

```js
import {profanities} from 'profanities/fr'

console.log(profanities.includes('boule')) // true
```

## API

`profanities` has the following entries in its export map:
`profanities` (English), `profanities/ar-latn` (Arabic (Latin script)),
`profanities/es` (Spanish), `profanities/fr` (French),
`profanities/it` (Italian), `profanities/pt-br` (Portuguese (Brazillian)),
`profanities/pt-pt` (Portuguese (Portugal)).

Each entry exports the identifier `profanities`.
There are no default exports.

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

[build-badge]: https://github.com/words/profanities/workflows/main/badge.svg

[build]: https://github.com/words/profanities/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/profanities.svg

[coverage]: https://codecov.io/github/words/profanities

[downloads-badge]: https://img.shields.io/npm/dm/profanities.svg

[downloads]: https://www.npmjs.com/package/profanities

[size-badge]: https://img.shields.io/bundlephobia/minzip/profanities.svg

[size]: https://bundlephobia.com/result?p=profanities

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[cuss]: https://github.com/words/cuss
