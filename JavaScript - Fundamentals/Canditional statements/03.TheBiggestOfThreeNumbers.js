/*Write a script that finds the biggest of three numbers.
Use nested if statements.*/

function biggestOfThreeNumbers(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    } else {
        if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}
