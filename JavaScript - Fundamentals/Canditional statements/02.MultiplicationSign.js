/*Write a script that shows the sign (+, - or 0) of the product 
of three real numbers, without calculating it.
Use a sequence of if operators.*/

function showTheSignOfProduct(a,b,c){
 	if (a === 0 || b === 0 || c === 0) {
 		console.log('The sign is 0');
 	} else if ((a > 0 && b > 0 && c > 0) ||
 		    (a > 0 && b < 0 && c < 0) ||
 		    (a < 0 && b < 0 && c < 0)||
 		    (a < 0 && b > 0 && c < 0)) {
 		console.log('The sign is +');
 	} else {
 		console.log('The sign is -');
 	}
}





