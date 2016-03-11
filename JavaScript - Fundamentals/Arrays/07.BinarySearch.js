/*Write a script that finds the index of given element in a sorted
 array of integers by using the binary search algorithm.*/

 var input = [78,5,88,9,6,3,2,4,5,8,-18,-99,155,4,5,9,66,365,-27],
    target = 6;

binarySearch(input, target);

function binarySearch(arr, key) {
    var len = arr.length,
        iMax = len - 1,
        iMin = 0,
        iMid = len / 2,
        keyFound = false;

    arr.sort(function(a, b) {
        return a - b;
    });

    while(iMax >= iMin) {
        iMid = ((iMin + iMax) / 2) | 0;
        if (arr[iMid] == key)
        {
            console.log(key + ' found');
            keyFound = true;
            break;
        }
        else if (arr[iMid] < key)
        {
            iMin = iMid + 1;
        }
        else
        {
            iMax = iMid - 1;
        }
    }

    if (!keyFound)
    {
        console.log(key + ' not found!');
    }
}