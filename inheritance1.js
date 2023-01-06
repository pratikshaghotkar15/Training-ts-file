var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fruits_veg = /** @class */ (function () {
    function Fruits_veg(t, c, type) {
        this.taste = t;
        this.color = c;
        this.type = type;
    }
    return Fruits_veg;
}());
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit(fn, p, t, c, ty) {
        var _this = _super.call(this, t, c, ty) || this;
        _this.price = p;
        _this.fname = fn;
        return _this;
    }
    Fruit.prototype.display = function () {
        console.log("fruit name=" + this.fname);
        console.log("fruit taste=" + this.taste);
        console.log("fruit color=" + this.color);
        console.log("fruit type=" + this.type);
        console.log("fruit price=" + this.price);
    };
    return Fruit;
}(Fruits_veg));
var obj = new Fruit("apple", 100, "sweet", "red", "fruit");
obj.display();
