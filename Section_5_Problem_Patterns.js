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


                //  Multiple Pointers //
// .creating pointers or values that correspond to an index or 
// .position and move towards the beginning, end or middle based
// .on a certain condition.   -very efficient for solving w/ minimal space complexity

// - Write a function called sumZero which accepts a sorted array of integers. The
// - function should find the first pair where the sum is 0. Return an array that
// - includes both values that sum to zero or undefined if there is no pair.
//   sumZero([-3, -2, -1, 0, 1, 2, 3]) => [-3, 3] // sumZero([1, 2, 3]) => undefined

function naiveSumZero(arr){                          // O(n^2)
    for(let i = 0; i < arr.length; i++){             // O(n)
        for(let j = i + 1; j < arr.length; j++){     // nested O(n)
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

function sumZero(arr){                             // O(n)
    let left = 0;
    let right = arr.length - 1;
    while(left < right){                           // O(n)
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

// - implement a function called countUniqueValues, which accepts a sorted
// - array, and counts the unique values in the array. There can be negative
// - numbers in the array, but it will always be sorted.

function findUniqueValues(arr){         //O(n)         // You wrote this
    let uniqueVal = []; 
    let left = 0; 
    let right = arr.length - 1;
    while(left < right){                                 // O(n)
        if(!(uniqueVal.includes(arr[left]))){
            uniqueVal.push(arr[left]);
            left++;
        } else if(!(uniqueVal.includes(arr[right]))){
            uniqueVal.push(arr[right]);
            right--;
        } else if(uniqueVal.includes(arr[left])){
            left++;
        } else {
            right--;
        }
    }
    return uniqueVal.length
}

function countUniqueValues(arr){         // O(n)      // Posted Solution
    if(arr.length === 0){
        return 0;
    }                     
    let i = 0;
    for (let j = 1; j < arr.length; j++){                // O(n)
        if(arr[i] !== arr[j]){
            arr[i] = arr[j];
            i++
        } 
    }
    return i + 1
}


                        //  Sliding Window //
// .This pattern involves creating a window which can either be an array or
// .number from one position to another.
// .Depending on a certain condition, the window either increases or closes (and
// . a new window is created) - Useful for keeping track of a subset of data in array

// - Write a function called maxSubarraySum which accepts an array of integers
// - and a number called n. The function should calculate the maximum sum of n 
// - consecutive elements in the array.  maxSubarraySum([4,2,1,6],2) => 7

function maxSubArraySum(arr, n){         //  O(n^2)   // naive solution
    let maxSum = 0;
    for(let i = 0; i < arr.length - n + 1; i++){      // O(n)
        let temp = 0;
        for(let j = 0; j < n; j++){                   // nested O(n)
            temp += arr[i + j];
        }
        if(temp > maxSum){
            maxSum = temp;
        }
    }
    return maxSum;
}

function maxSubarraySum(arr, n){      // O(n)    // sliding window solution
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < n) return null;           
    for(let i = 0; i < n; i++){                 //  O(n)
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = n; i < arr.length; i++){        // performs 1 operation per loop,
        tempSum = tempSum - arr[i - n] + arr[i]; // so is not nested
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


                            //  Divide And Conquer
// .This pattern involves dividing a data set into smaller chunks and then repeating a 
// .process with a subset of data. This pattern can tremendously decrease time complexity.

// - Given a sorted array of integers, write a function called search, that accepts a 
// - value and returns the index where the value passed to the function is located. 
// - If the value is not found, return -1.

function searchNaive(arr, n){                // O(n)   Linear Search
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i;
        } 
    }
    return -1;
}

function search(arr, n){                      // O(logn) Binary Search
    let min = 0;
    let max = arr.length - 1;

    while (min < max){                        
        let mid = Math.floor((min + max)/2);
        let element = arr[mid];

        if (element < n){
            min = mid + 1;
        } else if (element > n){
            max = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}


// .dynamic programming 
// .greedy algorithms
// .backtracking