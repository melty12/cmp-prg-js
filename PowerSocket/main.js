"use strict";
var input = "2 1";
var main = function (lines) {
    var data = lines.split(" ");
    var division = parseInt(data[0], 10) - 1;
    var targetValue = parseInt(data[1], 10) - 1;
    var result = 0;
    result = Math.ceil(targetValue / division);
};
main(input);
