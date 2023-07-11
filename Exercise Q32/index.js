// Task 32:Ordinal Number
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        console.log('1st');
    }
    else if (number === 2) {
        console.log('2nd');
    }
    else if (number === 3) {
        console.log('3rd');
    }
    else {
        console.log("".concat(number, "th"));
    }
}
