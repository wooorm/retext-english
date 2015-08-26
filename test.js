/**
 * @author Titus Wormer
 * @copyright 2014-2015 Titus Wormer
 * @license MIT
 * @module retext:english
 * @fileoverview Test suite for `retext-english`.
 */

'use strict';

/* eslint-env node, mocha */

/*
 * Dependencies.
 */

var assert = require('assert');
var retext = require('retext');
var English = require('parse-english');
var english = require('./');

/*
 * Methods.
 */

var equal = assert.strictEqual;

/*
 * Tests.
 */

describe('english()', function () {
    it('should work', function (done) {
        retext.use(english).use(function (processor) {
            equal(processor.Parser, English);
            done();
        });
    });
});
