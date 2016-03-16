/*Write a function that counts how many
times given number appears in given array.*/

var arr = [1,5,4,7,8,9,6,5,4,7,8,5,5,2,1,4,5,8,7,5],
	count = 0;

function countGivenNumber(array, number){
	for (var i = 0; len = array.length, i < len; i+=1) {
		if (arr[i] == number) {
			count++;
		}
	}

	return count;
}

console.log(countGivenNumber(arr, 8));

