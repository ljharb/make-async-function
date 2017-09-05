'use strict';

var test = require('tape');
var makeAsyncFunction = require('../');

test('makeAsyncFunction() is undefined or an arrow function', function (t) {
	var asyncFunction = makeAsyncFunction();
	if (asyncFunction) {
		t.equal(typeof asyncFunction, 'function', 'makeArrowFunction is function');
		t.equal(String(asyncFunction), 'async (a, b) => a * b', 'asyncFunction has expected source');
	} else {
		t.comment('async functions not supported');
		t.equal(typeof asyncFunction, 'undefined', 'makeArrowFunction is undefined');
	}
	t.end();
});

test('makeArrowFunction.list() is an array', function (t) {
	var funcs = makeAsyncFunction.list();
	var expectedSources = [
		'async (a, b) => a * b',
		'async () => {}',
		'async function foo() {}'
	];
	t.plan(1 + (2 * funcs.length));
	t.equal(Object.prototype.toString.call(funcs), '[object Array]', 'list() is an array');
	if (funcs.length === 0) {
		t.comment('no arrow functions present');
	} else {
		for (var i = 0; i < funcs.length; ++i) {
			t.equal(typeof funcs[i], 'function', funcs[i] + ' is a function');
			t.equal(String(funcs[i]), expectedSources[i], '"' + funcs[i] + '" !== "' + expectedSources[i] + '"');
		}
	}
	t.end();
});
