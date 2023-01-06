"use strict";
exports.__esModule = true;
exports.print = exports.Sum = void 0;
var Sum = /** @class */ (function () {
    function Sum(n1, n2) {
        this.no1 = n1;
        this.no2 = n2;
    }
    Sum.prototype.showsum = function () {
        console.log(this.no1 + this.no2);
    };
    return Sum;
}());
exports.Sum = Sum;
var print = /** @class */ (function () {
    function print() {
    }
    print.prototype.showdata = function () {
        console.log("one method module");
    };
    return print;
}());
exports.print = print;
