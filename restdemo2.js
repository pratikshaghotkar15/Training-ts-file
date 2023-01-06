function restDemo2(count) {
    var nolist = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nolist[_i - 1] = arguments[_i];
    }
    var i;
    for (i = 0; i < nolist.length; i++)
        console.log(nolist[i]);
}
restDemo2(5, "sunil", "anil", "somu", "monu", "ravi");
