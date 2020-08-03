                                     // Quick Sort //

// .Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
// .Works by selecting one element (called the 'pivot') and finding the index where
// .the pivot should end up in the sorted array.
// .Once the pivot is positioned appropriately, quick sort can be applied on either 
// .side of the pivot.

// Ex: [*5*, 2, 1, 8, 4, 7, 6, 3] => [3, 2, 1, 4, *5*, 7, 6, 8] =>
// [*3*, 2, 1, 4, 5, 7, 6, 8] => [1, 2, *3*, 4, 5, 7, 6, 8] =>
// [*1*, 2, 3, 4, 5, 7, 6, 8] => [1, 2, 3, 4, 5, 7, 6, 8] =>
// [1, 2, 3, 4, 5, *7*, 6, 8] => [1, 2, 3, 4, 5, 6, *7*, 8]

//  Partition or Pivot Helper Function //

// .In order to implement quick sort, it's useful to first implement a function 
// responsible for arranging elements in an array on either side of a pivot.
// .Given an array, this helper function should designate an element as the pivot.
// .It should then rearrange elements in the array so that all values less than the 
// pivot are moved to the left of the pivot and all values greater than the pivot are 
// moved to the right.
// .The order of the elements on either side of the pivot doesn't matter!
// .The helper should do this in place and not create a new array.
// .When finished, the helper should return the index of the pivot.

// .The runtime of quick sort depends in part on how one selects the pivot.
// .Ideally, the pivot should be chosen so that it's roughly the median value
// within the dataset. Clearly, this is not easy to accomplish.
// .Different pivot selection methods have Big O implications for quick sort.

// Example: 
let arr = [5, 2, 1, 8, 4, 7, 6, 3]
pivot(arr); // 4 | arr[0] final position = index 4
arr; // [2, 1, 4, 3, *5*, 8, 7, 6] or [1, 4, 3, 2, *5*, 7, 6, 8] or more!

// Pivot Function pseudocode:
// 1. It will help to accept 3 arguments: an array, a start index, and an end
// index. These can default to 0 and the array length to -1, respectively.
// 2. Grab the pivot from the start of the array. 
// 3. Store the current pivot index in a variable. This will keep track of
// where the pivot should end up.
// 4. Loop through the array from the start until the end:
//   4a. If the pivot is greater than the current element, increment the pivot
//       index variable, then swap the current element with the element at the pivot.
// 5. Swap the starting element (ie the pivot) with the pivot index. 
// 6. Return the pivot index.

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

function pivot(arr, start=0, end=arr.length+1){
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

// Quick Sort Pseudocode:
// 1. Call the pivot helper on the full array.
// 2. When the helper returns the updated pivot index, recursively call the pivot helper
// on the subarray to the left and to the right of the pivot.
// 3. The base case occurs when you arrive at subarrays of 1 element. 

function quickSort(arr, left=0, right=arr.length-1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx-1);
        quickSort(arr, pivotIdx+1, right);
    }
    return arr;
}

// Big O of Quick Sort

// as n grows, we need to make log2n decompositions O(logn)
// as we define a new pivot and compare to every other element O(n) comparisons per decomp
// when the pivot is always the min or max, very inefficient with already sorted data
// pivot around random or middle element.

// Best Case: | Avg Case: | Worst Case: | Space Complexity:
//  O(nlogn)  |  O(nlogn) |    O(n^2)   |      O(logn)