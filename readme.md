# tokenizer [![Build Status](https://travis-ci.org/hexacta/tokenizer.svg?branch=master)](https://travis-ci.org/hexacta/tokenizer) [![npm version](https://img.shields.io/npm/v/hx-tokenizer.svg?style=flat)](https://www.npmjs.com/package/hx-tokenizer) [![XO code style](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)  
> Split text into tokens.

## Install
```
$ npm install --save hx-tokenizer
```

## Usage

```js
const tokenizer = require("hx-tokenizer");
const tokens = tokenizer.tokenize("Lorem ipsum, something.");
// tokens == ["Lorem", "ipsum", ",", "something", "."]
const text = tokenizer.join(tokens);
// text == "Lorem ipsum, something."
```

## API

### tokenizer.tokenize(text)
### tokenizer.join(tokens)

## License

MIT © [Hexacta](http://www.hexacta.com)