/*Write a script that finds the maximal increasing sequence in an array.*/

var arr = [88,89,90,91,92,4,5,9,10,11];

function maxIncreasingSequence(arr) {
    var elementPos = 0,
        count = 1,
        bestCount = 0;

    for (var i = 0; i < arr.length-1; i+=1) {

        if(arr[i] < arr[i+1]) {
            count++;
        } else {
            count = 1;
        }

        if(count > bestCount) {
            bestCount = count;
            elementPos = i+2;
        }

    }

    var result = [];

    for (i = bestCount; i > 0; i -= 1) {
        result.push(arr[elementPos-i]);
    }
    console.log('Longest increasing sequence: ' + result.join(', '));
}
 
 maxIncreasingSequence(arr);   