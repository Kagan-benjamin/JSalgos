                              // Selection Sort //

//. This algorithm is similar to Bubble Sort, but instead of first placing large
//. values into sorted position, it places small values into sorted position.

//. Example: set min. Original: [5, 3, 4, 1, 2]
// 1. min [5, 3, 4, 1, 2] => 1b. min = 1 [5, 3, 4, 1, 2] =>
// 2. min [1, 5, 3, 4, 2] => 2b. min = 2 [1, 5, 3, 4, 2] =>
// 3. min [1, 2, 5, 3, 4] => 3b. min = 3 [1, 2, 5, 3, 4] =>
// 4. min [1, 2, 3, 5, 4] => 4b. min = 4 [1, 2, 3, 5, 4] =>
// 5. min [1, 2, 3, 5, 4] => 5b. min = 5 [1, 2, 3, 5, 4] => return [1, 2, 3, 4, 5]

// Pseudocode: 1. Store the 0th element as the smallest value so far.
// 2. Compare this item to the next item in the array until you find a smaller number.
// 3. If a smaller number is found, set that new number as the smallest. continue till end
// 4. If the 'min' is not the original value at first checked index, swap
// 5. Repeat with the next element until the array is sorted.

function mySelectionSort(arr){
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
      
        if(arr[i] < min){
            min = arr[i];
        }
    }
    if(min !== arr[0]){
        let temp = arr[0];
        arr[0] = min;
    }
}

function selectionSort(arr){           // O(n^2)
    for(let i = 0; i < arr.length; i++){         // iterate over array
        let lowest = i;                          // set lowest = 1st element (i)
        for(let j = i + 1; j < arr.length; j++){ // iterate again for comparison #
            if(arr[j] < arr[lowest]){           // if val at j < lowest (i)
                lowest = j;                    //  set lowest to j
            }
        }
        if(i !== lowest){                       // check to make sure min is new
        let temp = arr[i];                      // if new, swap elements
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        }
    }
    return arr;                                 // return sorted array
}