/*Write a JavaScript function that reverses a string and returns it.*/

function reverseTheString(text){
	return text.split('').reverse().join('');
}

console.log(reverseTheString('reverse the string'));