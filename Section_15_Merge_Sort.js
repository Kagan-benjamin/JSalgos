                                // Merge Sort //

// Objectives - Understand the limitations of the sorting algorithms we've learned 
// so far:

//.Quadratic sorting algorithms do not scale well. With large n, these algorithms are slow.
//.There is a family of sorting algorithms that can improve time complexity
//.from O(n^2) to O(nlogn)
//.There is a tradeoff between efficiency and simplicity.
//.The more efficient algorithms are much less simple and generally take longer to
// understand.

// Combination of splitting, sorting and merging. 
// Exploits the fact that arrays of 0 or 1 element are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then
// building up a newly sorted array.

// Ex: [8, 3, 5, 4, 7, 6, 1, 2] => [8, 3, 5, 4] + [7, 6, 1, 2] =>
// [8, 3] + [5, 4] + [7, 6] + [1, 2] => [8], [3], [5], [4], [7], [6], [1], [2] =>
// [3, 8] + [4, 5] + [6, 7] + [1, 2] => [3, 4, 5, 8] + [1, 2, 6, 7] =>
// [1, 2, 3, 4, 5, 6, 7, 8]

// Merging Arrays Introduction + Implementation
// .It's useful to first implement a function responsible for merging two sorted 
// arrays. Given two arrays which are sorted, this helper function should create
// a new array which is also sorted, and consists of all the elements of the 
// input arrays. 
// .This function should run in O(n+m) time and O(n+m) space and should not modify
// the parameters passed into it.

// Pseudocode: 1. Create an empty array, take a look at the smallest values in
// each input array. While there are values we still haven't looked at:
// .If the value in the first array is smaller than the value in the 2nd array,
// push the value from array1 into our results and move on to next 1st array value.
// .If the value in the first array is larger than the value in the 2nd array, 
// push the value from array2 into our results and move on to next 2nd array value.
// .Once we exhaust one array, push in all remaining values from the other array. 

// merge portion that accepts 2 sorted arrays

function merge(arr1, arr2){
    let results = [];
    let i, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// mergeSort Pseudocode:
// 1. Break up the array into halves until you have arrays that are empty
// or have one element (use .slice())
// 2. Continue recursively until all arrays have 1 or 0 elements. (arr.length <= 1)
// 3. Once you have smaller sorted arrays, merge those arrays with other sorted
// arrays until you are back at the full length of the original array.
// 4. Once the array has been merged back together, return the sorted array.  

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

// Merge Sort Time Complexity //   O(nlogn)

// Best Case | Avg Case | Worst Case | Space Complexity
//  O(nlogn) | O(nlogn) |  O(nlogn)  |    O(n)

// .During the split process, mergeSort requires logn time to complete the 
// .split. [1, 2, 3, 4, 5, 6, 7, 8] => 1. [1, 2, 3, 4] + [5, 6, 7, 8]      O(logn)
// 2. => [1, 2] + [3, 4] + [5, 6] + [7, 8] => 3. [1],[2],[3],[4],[5],[6],[7],[8]

// .During the merge back together, every element must be compared once    O(n)