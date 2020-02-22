/* jshint node: true */
/* global Promise: false */
"use strict";

if ( typeof Promise === "undefined" ) {
	module.exports = require('promise-polyfill');
} else {
	module.exports = Promise;
}
