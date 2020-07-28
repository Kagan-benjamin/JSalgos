                            // Searching Algorithms //

// - Describe what a searching algorith is:

// - Implement linear search on arrays. //
// .Given an array, the simplest way to search for a value is to look
// .at every element in the array and check.
// .In-built linear search include: .indexOf(), .includes(), .find()

// **write a linear search function that:
//  1. Accepts an array and a value. 2. loop through the array and check if the
// current element is equal to the value. 3. If it is, return the index at which
// the element is found.

function linearSearch(arr, n){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i;
        }
    }
    return -1;
}



// - Implement binary search on sorted arrays.
// - Implement a naive string search algorithm.
// - Implement the KMP string searching algorithm.