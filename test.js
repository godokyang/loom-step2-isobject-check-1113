'use strict';

var assert = require('assert');
var isObject = require('./');
var isNonEmptyObject = require('./').isNonEmptyObject;

assert(isObject({}));
assert(isObject(Object.create({})));
assert(isObject(Object.create(Object.prototype)));
assert(isObject(Object.create(null)));
assert(isObject(/foo/));

function Foo() {}
assert(isObject(new Foo()));

assert(!isObject('whatever'));
assert(!isObject(1));
assert(!isObject(function() {}));
assert(!isObject([]));
assert(!isObject(['foo', 'bar']));
assert(!isObject());
assert(!isObject(undefined));
assert(!isObject(null));

// isNonEmptyObject
assert(!isNonEmptyObject({}));
assert(isNonEmptyObject({ foo: 'bar' }));
function Bar() {
  this.baz = 1;
}
assert(isNonEmptyObject(new Bar()));

assert(!isNonEmptyObject([]));
assert(!isNonEmptyObject(['foo']));
assert(!isNonEmptyObject(null));
assert(!isNonEmptyObject(undefined));
assert(!isNonEmptyObject('foo'));
assert(!isNonEmptyObject(42));
assert(!isNonEmptyObject(function() {}));

// only enumerable Symbol keys
var symOnly = {};
symOnly[Symbol('a')] = 1;
assert(!isNonEmptyObject(symOnly));

// only non-enumerable own property
var hidden = {};
Object.defineProperty(hidden, 'secret', { value: 1, enumerable: false });
assert(!isNonEmptyObject(hidden));
