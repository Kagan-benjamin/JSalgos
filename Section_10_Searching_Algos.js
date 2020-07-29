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

function linearSearch(arr, n){                    // O(n)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i;
        }
    }
    return -1;
}


// - Implement binary search on sorted arrays. //
// .Binary search is significantly faster than linear search
// .Rather than eliminating one element at a time, you can eliminate half 
// .*** Binary search only works on SORTED arrays //

// **write a binary search function that:
// 1. Accepts a sorted array and a value.  2. Create two variables, left and right 
// pointers for beginning and end of the array. 3. Loop while the left pointer
// is smaller than the right pointer. 4. during loop, create a middle pointer.  
// 5. check value at mid, if too small, move left pointer up
// 6. check value at mid, if too large, move right pointer down
// 7. if value matches, return the index.  8. If no match, return -1.

function myBinarySearch(arr, n){               // Worst/Avg Case: O(logn)
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);   // 16 element | 4 steps | log2(16) = 4
    while(arr[mid] !== n && start <= end){     // 32 element | 5 steps | log2(32) = 5
        if(arr[mid] < n){                                     // log2(n)
            start = mid + 1;
        } else  {
            end = mid - 1;
        }
        mid = Math.floor((start + end) /2)
    }
    if(arr[mid] === n) return mid;
    return -1;
}

// - Implement a naive string search algorithm. //
//. Suppose you want to count the number of times that a smaller string appears
//. in a longer string. A straightforward approach involves checking pairs of
//. characters individually.

//. 1. Loop over the longer string.  2. Loop over the shorter string
//. 3. If the characters don't match, break out of the inner loop.
//. 4. If the characters do match, keep going.
//. 5. If you complete the inner loop and find a match, increment
//. the count of matches.   6. Return the count.

function myNaiveStringSearch(str1, str2){
    let count = 0;
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str2[j] !== str1[i + j]){
                break;
            }
            if(j === str2.length - 1){
                count++;
            }

        }
    }
    return count;
}




// - Implement the KMP string searching algorithm.