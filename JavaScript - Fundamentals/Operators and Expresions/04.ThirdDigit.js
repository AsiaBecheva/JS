// Write an expression that checks for given integer
// if its third digit (right-to-left) is 7.

var number = 2312734;
var thirdDigit = Math.floor(number / 100) % 10;
if (thirdDigit === 7) {
    console.log('true');
}
else {
    console.log('false');
}