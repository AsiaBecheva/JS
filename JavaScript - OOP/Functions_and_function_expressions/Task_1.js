// Write a function that sums an array of numbers:
// Numbers must be always of type Number
// Returns null if the array is empty
// Throws Error if the parameter is not passed (undefined)
// Throws if any of the elements is not convertible to Number

console.log(sum([1,2,7]));

function sum(arr) {
	if (arr === undefined) {
            return ('Please put the numbers!');
    } else if (!arr.length){
            return null;
    } else {
        if(!arr.every(function(num) {
           return num == Number(num);
        })) {
           return ('All elements must be numbers.');
        } else {
            return arr.reduce(function(currentSum, number) {
            return currentSum + number;
        }, 0);}
    }	   
}
