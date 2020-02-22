/* jshint node: true */
"use strict";

var assert = require('assert');
var Promise = require('./');
var promiseInstance;

if ( global.Promise ) {
	assert.equal( Promise, global.Promise );
	assert.equal( Promise.toString(), 'function Promise() { [native code] }' );

} else {
	var promise = new Promise( function() {} );
	assert.ok( promise instanceof Promise );
	assert.ok( typeof promise.then === 'function' );
	assert.ok( typeof promise.catch === 'function' );
	assert.ok( typeof Promise.resolve === 'function' );
	assert.ok( typeof Promise.reject === 'function' );
	assert.ok( typeof Promise.all === 'function' );
	assert.ok( typeof Promise.race === 'function' );
}

console.log( '✓ OK' );