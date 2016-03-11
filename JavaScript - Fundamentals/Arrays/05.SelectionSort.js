/*Write a script to sort an array.
Use the selection sort algorithm*/

var sortMe = [2,5,4,7,8,5,2,6,9];

function selectionSort (sortMe)
{
    var i, j, tmp, tmp2;
    for (i = 0; i < sortMe.length - 1; i++)
    {
        tmp = i;
        for (j = i + 1; j < sortMe.length; j++){
            if (sortMe[j] < sortMe[tmp]){
                tmp = j;
            }
        }
        if(tmp!=i){
            tmp2 = sortMe[tmp];
            sortMe[tmp] = sortMe[i];
            sortMe[i] = tmp2;
        }
    }

    console.log(sortMe);
}

selectionSort(sortMe);