// Write a function that finds all the prime numbers in a range
// It should return the prime numbers in an array
// It must throw an Error if any of the range params is not convertible to Number
// It must throw an Error if any of the range params is missing

console.log(primesInRange(0,50));

function primesInRange(from, to){
   if (arguments.length < 2) {
       throw new Error ('Incorrect number of parameters!');
   } else if (!isNumber(from) || !isNumber(to)) {
       throw new Error ('Both of the elements must be numbers!');
   } else {
       var primes = [],
           num;
       from = +from;
       to = +to;     
       
       for(num = from; num <= to; num += 1){
           if (isPrime(num)) {
               primes.push(num);
           }
       }
       return primes;
   }
   
   function isNumber(num) {
       return num === Number(num);
   }
   
   function isPrime(num) {
        if (num <= 2) {
            return false;
        }
        var i,
            prime = true;
        for (i = 2; i <= Math.sqrt(num); i += 1) {
            if (num % i === 0) {
                prime = false;
            }
        }
        return prime;
    }
}

