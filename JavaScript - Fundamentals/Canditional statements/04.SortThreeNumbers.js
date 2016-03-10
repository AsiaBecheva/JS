/*Sort 3 real values in descending order.
Use nested if statements.
Note: Don’t use arrays and the built-in sorting functionality.*/

function sortThreeNumbers(a, b, c) {
    var result,
    	temp;

    if (a <= b) {
        if (b <= c) {
            temp = a;
            a = c;
            c = temp;
        } else if (a <= c){
            temp = a;
            a = b;
            b = c;
            c = temp;
        } else {
            temp = a;
            a = b;
            b = temp;
        }
    } else {
        if (b < c){
            temp = b;
            b = c;
            c = temp;
        }
    }
    result = (a + ', ' + b + ', ' + c);
    console.log(result);
}

sortThreeNumbers(-7,8,-44);