# is-jwt [![Build Status](https://travis-ci.org/HugeThoughts/is-jwt.svg?branch=master)](https://travis-ci.org/HugeThoughts/is-jwt) [![Coverage Status](https://coveralls.io/repos/github/HugeThoughts/is-jwt/badge.svg?branch=master)](https://coveralls.io/github/HugeThoughts/is-jwt?branch=master)

> Determine if a string is JSON Web Token (JWT)


## Install

```
$ npm install --save is-jwt
```


## Usage

```js
const isJWT = require('is-jwt');

const VALID_JWT = 'eyJhbGciOiJIUzI1NiIsImV4cCI6MTQ5MzE3NDkxMCwiaWF0IjoxNDgyMzk3OTEwfQ.eyJyb2xlIjoiZW1wbG95ZXIiLCJpZCI6MiwiZW1haWwiOiJhc2hpa0BuZm5sYWJzLmluIn0.ICtMwjrhg4KbQjPJBWd29O4KRogNdjQj8bOhUrvYlLw';

isJWT(VALID_JWT);
//=> 'true'
```


## API

### isJWT(token)

#### token

Type: `string`

A valid JWT token

## License

MIT © [Ashik Nesin](https://github.com/HugeThoughts/is-jwt)
