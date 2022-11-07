# profanities

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

List of profane words.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`profanities`](#profanities-1)
*   [Data](#data)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contributing](#contributing)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes lists of profane words in several languages.

## When should I use this?

This is a flat list of words.
See [`cuss`][cuss] for the same words, rated for sureness: how likely they are
to be used as either profanity or clean text.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install profanities
```

In Deno with [`esm.sh`][esmsh]:

```js
import {profanities} from 'https://esm.sh/profanities@3'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {profanities} from 'https://esm.sh/profanities@3?bundle'
</script>
```

## Use

```js
import {profanities} from 'profanities'
import {profanities as profanitiesFr} from 'profanities/fr'

console.log(profanities.includes('butt')) // true
console.log(profanitiesFr.includes('boule')) // true
```

## API

`profanities` has exports the following entries:

*   `profanities`
    — English
*   `profanities/ar-latn`
    — Arabic (Latin)
*   `profanities/es`
    — Spanish
*   `profanities/fr`
    — French
*   `profanities/it`
    — Italian
*   `profanities/pt`
    — Portuguese
*   `profanities/pt-pt`
    — European Portuguese

Each entry exports the identifier `profanities`.
There are no default exports.

### `profanities`

List of strings (`Array<string>`).

## Data

The data includes many profane words and phrases in different languages.
In many contexts, those words are *not* profane though.
See [`cuss`][cuss] for the terms (and a rating of sureness).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+, 16.0+, and 18.0+.
It also works in Deno and modern browsers.

## Related

*   [buzzwords](https://github.com/words/buzzwords)
    — list of buzzwords
*   [cuss][]
    — map of profane words to a rating of sureness
*   [dale-chall](https://github.com/words/dale-chall)
    — list of familiar English words (1995)
*   [fillers](https://github.com/words/fillers)
    — list of filler words
*   [hedges](https://github.com/words/hedges)
    — list of hedge words
*   [spache](https://github.com/words/spache)
    — list of easy English words (1974)
*   [weasels](https://github.com/words/weasels)
    — list of weasel words

## Contributing

Yes please!
See [How to Contribute to Open Source][contribute].

Words and new languages can be added to [`cuss`][cuss].
After they are added there, this project can be built to include the changes.

## Security

This package is safe.

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

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[cuss]: https://github.com/words/cuss
