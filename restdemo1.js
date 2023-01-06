function restDemo1(count) {
    var nolist = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nolist[_i - 1] = arguments[_i];
    }
    var sum = 0;
    var i = 0;
    for (i = 0; i < nolist.length; i++)
        sum = sum + nolist[i];
    console.log(sum);
}
restDemo1(5, 2, 4, 5, 6, 7);
