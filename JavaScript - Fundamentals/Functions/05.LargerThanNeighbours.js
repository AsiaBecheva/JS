/*Write a function that checks if the element 
at given position in given array of integers is 
bigger than its two neighbours (when such exist).*/

function isBiggerThanBeighbours(arr, index){
    var isBigger = true;

    for (var i = index - 1; i <= index + 1; i += 2) {
        if (i >= 0 && i < arr.length) {
            if (arr[i] >= arr[index]) {
                isBigger = false;
            }
        }
    }
    return isBigger;
}

console.log(isBiggerThanBeighbours([4,1,2,10,8], 3));