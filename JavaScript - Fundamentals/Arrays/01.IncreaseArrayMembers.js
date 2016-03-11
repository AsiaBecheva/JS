/*Write a script that allocates array of 20 integers
 and initializes each element by its index multiplied by 5.
Print the obtained array on the console.*/


var	size = 20,
product = [size];

for (var i = 0;  i <= size; i += 1) {
	product[i] = i * 5;
}

console.log(product.join(', '));


