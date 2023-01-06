var test = /** @class */ (function () {
    function test(fn, ln, no) {
        this.fname = fn;
        this.lname = ln;
        this.rollno = no;
    }
    test.prototype.show = function () {
        console.log("name=" + this.fname + this.lname);
        console.log("rollno=" + this.rollno);
    };
    return test;
}());
var obj = new test("anil", "kumar", 1234);
obj.show();
