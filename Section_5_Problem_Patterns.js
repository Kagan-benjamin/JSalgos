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








// .multiple pointers
// .sliding window
// .divide and conquer
// .dynamic programming 
// .greedy algorithms
// .backtracking