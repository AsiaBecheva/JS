function createPerson(firstName, lastName, age, isFemale){
	return{
		firstName: firstName,
		lastName:  lastName,
		age: age,
		isFemale: isFemale
	};
}

var people = [1,2,3,4,5,6,7,8,9,10].map(function(_,i){
	return createPerson('Jesy' + i,
						'Lee' + i,
						21 + i,
						Boolean(i % 2));
});

people.forEach(function(person){
	console.log(person);
});

var separator = function () {
	console.log('-----------------------------');
};
separator();


/*Write a function that checks if an array of person contains 
only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)*/

var filtredPeople = people.every(function(person){ 
	return person.age >= 18;
});

console.log('People are with age 18 or greater: ' + filtredPeople);
separator();


/*Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach*/

var underagedPeople = people.filter(function(person){
	return person.age < 18;
});

underagedPeople.forEach(function(person){
	console.log(person);
});

separator();


/*Write a function that calculates the average age of all females,
 extracted from an array of persons.
Use Array#filter*/

var women = people.filter(function(person){
	return person.isFemale;
});

sum = women.reduce(function(sum, person){
	return sum + person.age; 
},0);

avg = sum / women.length;

console.log('WOMEN');
women.forEach(function(woman){
	console.log(woman);
});
console.log('Average age of women: ' + avg);
separator();


/*Write a function that finds the youngest male
person in a given array of people and prints his full name*/

if (!Array.prototype.find) {
            Array.prototype.find = function(callback) {
                var i, len = this.length;
                for (i = 0; i < len; i+=1) {
                    if (callback(this[i], i, this)) {
                        return this[i];
                    }
                }
            };
        }
/*
function findYoungestMale(people) {
    var person = people
        .sort(function (item1, item2) {
            return item1.age - item2.age;
        })
        .find(function (item) {
            return !item.isFemale;
        });

    return person.firstName + ' ' + person.lastName + ' with age of ' + person.age;
}

console.log('\nTASK 5: ');
console.log('The youngest person is ' + findYoungestMale(people));  */ 

function theYoungestMale(people){
	var person = people.sort(function(a, b){
		return a.age - b.age;
	}).find(function(item){
		return !item.isFemale;
	});

	return person.firstName + ' ' + person.lastName + ' age:' + person.age;
}
console.log('The youngest man is: ' + theYoungestMale(people));
