/*Write a script that compares two char arrays lexicographically
 (letter by letter).*/

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 6];
var areEqual = true;

for (var i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
        areEqual = false;
    }
}

console.log('Arrays are equal: ' + areEqual);