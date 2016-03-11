/*Write a function that reverses 
the digits of given decimal number.*/

function reverseNumber(number){
	var isNegative = number < 0,
		number = number.toString().replace('-', '').split(''),
		reversed = [];
		
		if (isNegative) {
			reversed.push('-');
		}
		
		Array.prototype.push.apply(reversed, number.reverse());
	
	return +(reversed.join(''));
}

console.log(reverseNumber(12547));