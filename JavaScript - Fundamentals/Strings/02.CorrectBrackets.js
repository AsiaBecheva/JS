/*Write a JavaScript function to check if in a given expression
 the brackets are put correctly.*/

 var char1 = '(';
var char2 = ')';
var expression = '((a+b))';

function checkForCorrectBrackets(expression) {
    var count = 0;

    for (var char in expression) {
        if (expression[char] === '(') {
            count += 1;
        }
        if (expression[char] === ')') {
            count -= 1;
        }
        if (count < 0) {
            return false;
        }
    }
    if (count !== 0) {
        return false;
    }

    return true;
}

console.log(checkForCorrectBrackets(expression));