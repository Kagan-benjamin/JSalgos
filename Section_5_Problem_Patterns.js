// Problem Solving Patterns //

// Frequency Counters
// .this pattern uses objects or sets to collect values/frequencies of values
// .this can often avoid the need for nested loops or O(n^2) operations w/ arrays or strings.

// - Write a function called same, which accepts two arrays.
// - The function should return true if every value in the array has it's
// - corresponding value squared in the second array. The frequency of 
// - values must be the same.   same([1,2,3], [4,1,9]) => true

function naiveSame(arr1, arr2){                      // O(n^2)
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){             // O(n)
        let correctIdx = arr2.indexOf(arr1[i] ** 2)   // nested O(n)
        if(correctIdx === -1){
            return false;
        }
        arr2.splice(correctIdx, 1)
    }
    return true;
}

function same(arr1, arr2){                           // O(n)
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){                           // O(n)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){                           // O(n)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){              // O(n)
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true;
}

// - Given two strings, write a function to determine if the second string
// - is an anagram of the first. Return true or false.

function findAnagram(str1, str2){                // You wrote this
    if(str1.length !== str2.length){
        return false;
    }
    let obj1 = {}
    let obj2 = {}
    for(let char of str1){
        obj1[char] = (obj1[char] || 0) + 1
    }
    for(let char of str2){
        obj2[char] = (obj2[char] || 0) + 1
    }
    for(let key in obj1){
        if(!(key in obj2)){
            return false
        }
        if(obj2[key] !== obj1[key]){
            return false
        }
    }
    return true
}

function validAnagram(str1, str2){               // Posted solution
    if(str1.length !== str2.length){
        return false;
    }
    const lookup = {};
    for(let i = 0; 0 < str1.length; i++){
        let char = str1[i];
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
    }
    for(let i = 0; i < str2.length; i++){
        let char = str2[i];
        if (!lookup[char]){                     // 0 val is falsey, if 0 comes in there
            return false;                       // is an extra letter and returns false
        } else {
            lookup[char] -= 1;
        }
    }
    return true;
}







// .multiple pointers
// .sliding window
// .divide and conquer
// .dynamic programming 
// .greedy algorithms
// .backtracking