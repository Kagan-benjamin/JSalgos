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


 //       -----  More Difficult Examples  -----

 // Write a recursive function called fib that accepts a number and returns the 
// nth number in the Fibonacci sequence. 
// Fib Sequence: 1, 1, 2, 3, 5, 8...     Ex: fib(4) => 3 | fib(10) => 55

function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// Write a function called reverse which accepts a string and returns a new
// string in reverse.

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// Write a function called isPalindrome that returns true if the string passed to it
// is a palindrome. Otherwise, returns false.

function isPalindrome(str){
    if(str.length <= 1) return true;
    if(str[0] === str[str.length - 1]){
        return isPalindrome(str.slice(1, str.length - 1));
    } else {
        return false;
    }
}

// Write a function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true
// when passed to the callback, otherwise it returns false. 
// Ex: const isOdd = val => val % 2 !== 0;  someRecursive([1,2,3,4], isOdd) // true

function someRecursive(arr, callback){
    if(arr.length < 1) return false;
    if(!(callback(arr[0]))){
        return someRecursive(arr.slice(1), callback)
    } else {
        return true;
    }
}

// Write a function called flatten that accepts an array of arrays and returns 
// a new array with all values flattened.
// Ex: flatten([1, [2, [3, 4], [[5]]]]) //=> [1, 2, 3, 4, 5]

function flatten(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArray = newArray.concat(flatten(arr[i]))
        } else {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

// Write a function called capitalizeFirst. Given an array of strings, capitalize
// the the first letter of each string in the array. 

function capitalizeFirst(arr){
    if(arr.length === 1){
        return [arr[0][0].toUpperCase() + arr[0].slice(1)];
    }
    let ans = capitalizeFirst(arr.slice(0, -1))
    ans.push(arr.slice(arr.length-1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].slice(1));
    return ans;
}

