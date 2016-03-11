/*Write a script that finds the most frequent number in an array.*/

var arr = [1,4,5,5,5,7,8,5,6,9,3,2,1,4,2,5,4,7,8,9,6];
var currentNumber;
var count = 0;
var resultArr = [];

for (var i = 0; i < arr.length; i += 1) {
    if (resultArr[arr[i]]) {
        var count = resultArr[arr[i]];
        count++;
        resultArr[arr[i]] = count;
    }
    else {
        resultArr[arr[i]] = 1;
    }
}

var occurances = 0;
var finalNumber;
for (var i = 0; i < resultArr.length; i += 1) {
    if (occurances < resultArr[i]) {
        occurances = resultArr[i];
        finalNumber = i;
    }
}

console.log('The most frequent number: ' + finalNumber + ' with ' + occurances + ' occurances');