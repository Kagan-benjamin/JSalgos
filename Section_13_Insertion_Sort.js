                                     // Insertion Sort //

//. Builds up the sort by gradually creating a larger left portion which is 
//. always sorted.  

// Pseudocode: 1. Start by picking the second element in the array
// 2. Compare the 2nd element with the one before it and swap if necessary.
// 3. Continue to the next element and if it is in the incorrect order, iterate
// through the sorted portion to place the element in the correct place.
// 4. Repeat until the array is sorted and return the array.

function myInsertionSort(arr){                   // O(n^2)
    for(let i = 1; i < arr.length; i++){                  // O(n)
        let curVal = arr[i]
        let idx;
        for(let j = i - 1; j >= 0 && arr[j] > curVal; j--){  // O(n)
            arr[j+1] = arr[j];
            idx = j;
        }
        arr[idx+1] = curVal;
    }
    return arr;
}

function workingInsertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let curVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > curVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curVal;
    }
    return arr;
}

// .If the data is nearly all sorted and expecting incoming data,
// .This algo is efficient for live handling of incoming data.