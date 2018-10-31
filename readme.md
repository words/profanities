# profanities [![Build Status][travis-badge]][travis]

List of lots of profane words.

> See [**cuss**][cuss] for the same words, rated for sureness: how
> likely it is to be used as either profanity or clean text.

## Installation

[npm][]:

```bash
npm install profanities
```

## Usage

```js
var profanities = require('profanities')

profanities.length // 1772

console.log(typeof profanities[0]) // 'string'
```

## API

### `profanities`

**Type**: `Array.<string>` — **profanities** exposes a list of strings.

## Support

**profanities** supports many profane words and phrases in different languages.

Note that the words listed in **profanities** might **not** be profane
in certain contexts.

*   [`index.json`](index.json) — ± 1772 English profane words and phrases from
    [Luis von Ahn’s Research Group (Carnegie Mellon)][luis-von-ahn], the [`List
    of ethnic slurs` from WikiPedia][racial-slurs], and more (see
    [support.md][support])
*   [`ar-latn.json`](ar-latn.json) — ± 250 Arabic (Latin-Script) profane words
    and phrases from [`naughty-words`][ar-source-naughty-words] and
    [`youswear`][ar-source-youswear]
*   [`es.json`](es.json) — ± 550 Spanish profane words and phrases from
    [`naughty-words`][es-source-naughty-words],
    [`revistagq.com`][es-source-revistagq], [`taringa.net`][es-source-taringa],
    [`mundoxat.om`][es-source-mundoxat]
*   [`fr.json`](fr.json) — ± 730 French profane words and phrases from
    [`wiktionary.org`][fr-source]
*   [`pt-br.json`](pt-br.json) — ± 140 Brazilian Portuguese profane words from
    [`aprenderpalavras.com`][pt-br-source]

## Contributing

Thanks, contributions are greatly appreciated!  :+1:

New English words should be added to [racial.txt][racial-list] if they are
racial slurs; all other English profanities should be added to
[rest.txt][rest-list].

After adding a word, run `npm install` to install all required dependencies,
then `npm test` to update [support.md][support]
and open a Pull Request.

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

[license]: license

[support]: support.md

[author]: http://wooorm.com

[luis-von-ahn]: http://www.cs.cmu.edu/~biglou/resources/

[racial-slurs]: https://en.wikipedia.org/wiki/List_of_ethnic_slurs

[cuss]: https://github.com/wooorm/cuss

[racial-list]: script/racial.txt

[rest-list]: script/rest.txt

[ar-source-naughty-words]: https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/ar

[ar-source-youswear]: http://www.youswear.com/index.asp?language=Arabic

[es-source-taringa]: https://www.taringa.net/posts/info/7253513/Listado-de-vulgarismos-y-malas-palabras-en-espanol.htm

[es-source-mundoxat]: https://www.mundoxat.com/foro/showthread.php?301-Lista-de-palabras-MALAS-Necesito-AYUDA%21

[es-source-naughty-words]: https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words/blob/master/es

[es-source-revistagq]: https://www.revistagq.com/la-buena-vida/articulos/221-insultos-en-castellano-que-deberias-saber/19728

[fr-source]: https://fr.wiktionary.org/wiki/Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais

[pt-br-source]: https://aprenderpalavras.com/lista-de-palavroes-xingamentos-e-girias/
