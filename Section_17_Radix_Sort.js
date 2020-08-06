                                  // Radix Sort //
// .No direct comparisons, unlike previous sorts. Works on lists of numbers.
// .Never makes comparisons between elements. Instead, exploits the fact that
// information about the size of a number is encoded in the number of digits.
// .More digits means a bigger number.

// Radix Sort Helper Methods:

// .getDigit()
// .getDigit(num, place) - returns the digit in num at the given place value.
// getDigit(12345, 0); // 5 | getDigit(12345, 1); // 4 | getDigit(12345, 2); // 3
// getDigit(12345, 3); // 2 | getDigit(12345, 4); // 1 | getDigit(12345, 5); // 0

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// .digitCount(n) - returns the number of digits in n 
// .digitCount(1); // 1 | digitCount(15); // 2

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// .mostDigits(array) - given an array of numbers, returns the number of digits
// in the largest number

function mostDigits(arr){
    let maxDigits = 0;
    for(let i = 0; i < arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}