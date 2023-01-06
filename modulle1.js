"use strict";
exports.__esModule = true;
exports.Average = exports.SecondLargest = void 0;
var SecondLargest = /** @class */ (function () {
    function SecondLargest() {
    }
    SecondLargest.prototype.showsecondlargest = function (count) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        var temp;
        var i;
        var j;
        for (i = 0; i < a.length; i++) {
            for (j = i + 1; j < a.length; j++) {
                if (a[i] > a[j]) {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        console.log("second largest no " + a[count - 2]);
    };
    return SecondLargest;
}());
exports.SecondLargest = SecondLargest;
var Average = /** @class */ (function () {
    function Average() {
    }
    Average.prototype.findAverage = function (a, b, c) {
        var d = 3;
        console.log("average is=" + ((a + b + c) / d));
    };
    return Average;
}());
exports.Average = Average;
