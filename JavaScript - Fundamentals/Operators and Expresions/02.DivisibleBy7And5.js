//Write a boolean expression that checks for given
// integer if it can be divided (without remainder)
// by 7 and 5 in the same time.

var number = 70;
var isDevided = false;

if (number % 7 === 0 && number % 5 === 0) {
	isDevided = true;
}else{
	isDevided = false;
}

console.log(isDevided);