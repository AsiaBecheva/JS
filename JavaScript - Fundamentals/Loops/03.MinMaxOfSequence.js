/*Write a script that finds
 the max and min number from a sequence of numbers.*/

 function minMaxFromNumbers(){
	var numbers = [4,8,55,-18,-6,5,44,12,9,3,158,-7],
		min = Number.MAX_VALUE,
		max = Number.MIN_VALUE;

	for (var i = 0; i < numbers.length; i+=1) {
		if (min > numbers[i]) {
			min = numbers[i];
		}
		if (max < numbers[i]) {
			max = numbers[i];
		}
	}

	console.log('Min value: ' + min + ' Max value: ' + max);
 }

 minMaxFromNumbers();



