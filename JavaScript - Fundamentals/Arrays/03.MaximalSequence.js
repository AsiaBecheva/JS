/*Write a script that finds the maximal sequence of equal 
elements in an array.*/

var input = [1,2,2,3,3,3,4,4,4,4,9,9,1,11,12];

function maxSequence(arr) {
    var count = 1,
        bestCount = 0,
        element;

    for (var i = 0; i < arr.length-1; i+=1) {

        if(arr[i] === arr[i+1]) {
            count++;
        } else {
            count = 1;
        }

        if(count > bestCount) {
            bestCount = count;
            element   = arr[i];
        }

    }

    console.log('Best sequence: ' + element + ' with ' + bestCount + ' consequent occurrences');
}

maxSequence(input);