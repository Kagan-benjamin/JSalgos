  // What is sorting? //

// .Sorting is the process of rearranging the items in a collection (e.g. an array)
// .so that the items are in some kind of order.
// .Ex: Sorting numbers by size. Sorting names alphabetically. Movies based on release year

  //  Why?   //

// .Sorting is an incredibly common task, so it's good to know how it works.
// .There are many different ways to sort things, and different techniques have their
// .own advantages and disadvantages.
// **Sorting Algorithm Animations website**

  // Objectives //

// .Implement bubble sort | implement selection sort | implement insertion sort
// .Understand why it is important to learn these simpler sorting algorithms.

  // JavaScript in-built Methods //

// .The built-in sort method accepts an optional comparator function.
// .You can use this comparator function to tell JS how you want it to sort.
// .The comparator looks at pairs of elements (a and b) and determines their
// .sort order based off the return value.

                            // Custom Sort Methods //

function numberCompare(num1, num2){
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare)

function compareByLength(str1, str2){
    return str1.length - str2.length;
}

['Hello', 'test', 'who am I'].sort(compareByLength)

                             // Bubble Sort //

// .A sorting algorithm where the largest values bubble up to the top.

// Original: [5, 3, 4, 1, 2] => 
// 1a. [5 <=> 3, 4, 1, 2] => 1b. [3, 5, 4, 1, 2] => 2a. [3, 5 <=> 4, 1, 2] =>
// 2b. [3, 4, 5, 1, 2] => 3a. [3, 4, 5 <==> 1, 2] => 3b. [3, 4, 1, 5, 2] =>
// 4a. [3, 4, 1, 5 <==> 2] => 4b. [3, 4, 1, 2, 5] | Pass 1 complete
// 5a. [3 <==> 4, 1, 2, 5] => 5b. [3, 4, 1, 2, 5] => 6a. [3, 4 <=> 1, 2, 5] =>
// 6b. [3, 1, 4, 2, 5] => 7a. [3, 1, 4 <==> 2, 5] => 7b. [3, 1, 2, 4, 5] =>
// 8a. [3, 1, 2, 4 <==> 5] => 8b. [3, 1, 2, 4, 5] | Pass 2 complete
// 9a. [3 <==> 1, 2, 4, 5] => 9b. [1, 3, 2, 4, 5] => 10a. [1, 3 <==> 2, 4, 5] =>
// 10b. [1, 2, 3, 4, 5] => 11a. [1, 2, 3 <==> 4, 5] => 11b. [1, 2, 3, 4, 5] =>
// 12a. [1, 2, 3, 4 <==> 5] => 12b. [1, 2, 3, 4, 5] | Pass 3 complete, Return sortArray
 
// .many sorting algos involve some sort of swapping functionality.

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// Pseudocode steps: 
// 1. Start looping from the end of the array towards the beginning (let i)
// 2. Nest a loop from the beginning until i-1 (let j)
// 3. If arr[j] > arr[j+1], swap those two values.
// 4. Return sorted array after completion.

function naiveBubbleSort(arr){                  // | O(n^2)
    for(let i = 0; i < arr.length; i++){                    // O(n)
        for(let j = 0; j < arr.length; j++){                // nested O(n)
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function myBubbleSort(arr){                     //  | O(n^2)
    for(let i = arr.length; i > 0; i--){                   // O(n)
        for(let j = 0; j < i - 1; j++){       // loop decreases each pass but nested
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    return arr
}

function optimizedBubbleSort(arr){        // Introduce short-circuit for no swaps
    let noSwaps;                                  // O(n^2)
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;                   
        for(let j = 0; j < i - 1; j++){                    
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false; 
            }
        }
        if(noSwaps) break;            // after completing iteration over all j,
    }                                 // if no swaps were made, sort is done so break.
    return arr
}

//. Bubble Sort is efficient when the array is already nearly sorted. With largely 
//. unsorted data, bubble sort is pretty inefficient.