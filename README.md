# make-async-function <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Function that returns an arbitrary `async function`, or undefined if `async function` syntax is unsupported.

## Example
```js
var maybeAsyncFunction = require('make-async-function')();
if (maybeAsyncFunction) {
	assert(typeof maybeAsyncFunction === 'function');
} else {
	assert(typeof maybeAsyncFunction === 'undefined');
}

var asyncFunctions = require('make-async-function').list();
assert(asyncFunctions.every(function (fn) { return typeof fn === 'function'; }));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/make-async-function
[npm-version-svg]: http://versionbadg.es/ljharb/make-async-function.svg
[travis-svg]: https://travis-ci.org/ljharb/make-async-function.svg
[travis-url]: https://travis-ci.org/ljharb/make-async-function
[deps-svg]: https://david-dm.org/ljharb/make-async-function.svg
[deps-url]: https://david-dm.org/ljharb/make-async-function
[dev-deps-svg]: https://david-dm.org/ljharb/make-async-function/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/make-async-function#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/make-async-function.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/make-async-function.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/make-async-function.svg
[downloads-url]: http://npm-stat.com/charts.html?package=make-async-function

