"use strict";
exports.__esModule = true;
var One = /** @class */ (function () {
    function One() {
        console.log('Class one');
    }
    return One;
}());
exports.One = One;
var Two = /** @class */ (function () {
    function Two(name) {
        if (name === void 0) { name = 'podaj imie'; }
        this.name = '';
        this.name = name;
        console.log(this.name);
    }
    return Two;
}());
exports.Two = Two;
exports.pi = 3.14;
