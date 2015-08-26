# retext-english [![Build Status](https://img.shields.io/travis/wooorm/retext-english.svg)](https://travis-ci.org/wooorm/retext-english) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/retext-english.svg)](https://codecov.io/github/wooorm/retext-english)

English language support for [retext](https://github.com/wooorm/retext).

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install retext-english
```

**retext-english** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](retext-english.js) and [compressed](retext-english.min.js).

## Usage

```javascript
var retext = require('retext');
var english = require('retext-english');

retext().use(english).process('There, ol’ pal', function (err, file) {});
```

## API

### [retext](https://github.com/wooorm/retext).[use](https://github.com/wooorm/retext#retextuseplugin-options)\(english\)

Nothing else is needed. This will add better support for the English language
to retext. A complete list of what is added is available on
[**parse-english**](https://github.com/wooorm/parse-english#api) README.

**Parameters**

*   `english` — This plugin.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
