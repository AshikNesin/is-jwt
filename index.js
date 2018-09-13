'use strict';
module.exports = (input, opts) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	opts = opts || {};

	return /^([a-zA-Z0-9\-_=]+)\.([a-zA-Z0-9\-_=]+)\.([a-zA-Z0-9\-_=]*)/.test(input);
};
