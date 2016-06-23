(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'ramda', 'kefir'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('ramda'), require('kefir'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.ramda, global.kefir);
        global.kefirCombineObject = mod.exports;
    }
})(this, function (exports, _ramda, _kefir) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = combineObject;

    var _ramda2 = _interopRequireDefault(_ramda);

    var _kefir2 = _interopRequireDefault(_kefir);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function combineObject(active) {
        var passive = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var keys = _ramda2.default.concat(_ramda2.default.keys(active), _ramda2.default.keys(passive));
        return _kefir2.default.combine(_ramda2.default.values(active), _ramda2.default.values(passive)).map(_ramda2.default.zipObj(keys));
    }
});
