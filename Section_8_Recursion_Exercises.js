// Write a function called power that accepts a base and an exponent. The function 
// should return the power of the base to the exponent. This function should mimic
// the functionality of Math.pow()  - do not worry about neg bases and exponents.
// Ex:  power(2,0) //=> 1  |  power(2,2) //=> 4  |  power(2,4) //=> 16

function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base, exp - 1)
}

// Write a recursive factorial function

function factorial(n){
    if(n === 0) return 1;
    return n * factorial(n-1);
}

// Write a function called productOfArray that takes in an array of numbers and
// returns the product of them all

function productOfArray(arr){
    let total = 1;
    if(arr.length < 1) return 1;
    return arr[0] * productOfArray(arr.slice(1))
}

// Write a function called recursiveRange which accepts a number and adds up all
// the numbers from 0 to the number passed to the function
// Ex: recursiveRange(6) //=> 21  |  recursiveRange(10) //=> 55

function recursiveRange(n){
    if(n === 1) return 1;
    if(n === 0) return 0;
    return n + recursiveRange(n-1);
}

// Write a recursive function called fib that accepts a number and returns the 
// nth number in the Fibonacci sequence. 
// Fib Sequence: 1, 1, 2, 3, 5, 8...     Ex: fib(4) => 3 | fib(10) => 55

function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}