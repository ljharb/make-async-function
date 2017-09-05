'use strict';

var getAsyncs = function getAsyncFunctions() {
	return [
		Function('return async (a, b) => a * b;')(),
		Function('return async () => {};')(),
		Function('return async function foo() {}')()
	];
};
var asyncFuncs = [];
try {
	asyncFuncs = getAsyncs();
} catch (e) { /**/ }

module.exports = function makeAsyncFunction() {
	return asyncFuncs[0];
};
module.exports.list = function makeAsyncFunctions() {
	return asyncFuncs.slice();
};
