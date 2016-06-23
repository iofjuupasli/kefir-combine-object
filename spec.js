'use strict';
var Kefir = require('kefir');
var assert = require('assert');
var combineObject = require('./').default;

describe('', () => {
    it('', () => {
        assert.ok(combineObject);
    });
    it('', done => {
        combineObject({
                foo: Kefir.constant('bar')
            })
            .onValue(v => {
                assert.ok(v.foo === 'bar');
                done();
            });
    });
    it('', done => {
        combineObject({
                a: Kefir.constant('1'),
                b: Kefir.constant(2)
            })
            .onValue(v => {
                assert.ok(v.a === '1');
                assert.ok(v.b === 2);
                done();
            });
    });
    it('', done => {
        combineObject({
                a: Kefir.constant('1'),
            }, {
                b: Kefir.constant(2)
            })
            .onValue(v => {
                assert.ok(v.a === '1');
                assert.ok(v.b === 2);
                done();
            });
    });
    it('', done => {
        combineObject({
                a: Kefir.constant('1'),
                b: Kefir.later(1, 2)
            })
            .onValue(v => {
                assert.ok(v.a === '1');
                assert.ok(v.b === 2);
                done();
            });
    });
    it('', done => {
        let i = 0;
        combineObject({
                a: Kefir.constant('1'),
                b: Kefir.sequentially(1, [1, 2, 3])
            })
            .onValue(v => {
                i++;
                assert.ok(v.a === '1');
                assert.ok(v.b === i);
                if (i === 3) {
                    done();
                }
            });
    });
    it('', done => {
        let i = 0;
        combineObject({
                a: Kefir.later(30, '1')
            }, {
                b: Kefir.sequentially(1, [1, 2, 3])
            })
            .onValue(v => {
                i++;
                assert.ok(v.a === '1');
                assert.ok(v.b === 3);
                assert.ok(i === 1);
                done();
            });
    });
});
