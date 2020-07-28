                             // Recursion //

// | Define Recursion and how it can be used -

// .A process (function) that calls itself
// .examples: JSON.parse/.stringify, getElementById/querySelector, DOM traversal algos
// .Object traversal, traversal of complex data structures
// .Sometimes a cleaner alternative to iterative solutions  


// | Visualize the call stack to better debug and understand recursive functions -

// .Stack data structure - any time a function is invoked it is placed(pushed)
// .onto the top of the call stack.
// .When JS sees the return keyword or when the function ends, the compiler will
// .remove(pop) the action from the top of the stack.
// **Recursive functions keep pushing new functions (itself) onto the call stack.

// .Invoke the SAME function with DIFFERENT input until you reach your base case
// .Base Case: the condition when the recursion ends.
// ** 1. Base Case  // 2. Different Input **

function countDown(n){                  // Recursive
    if(n <= 0){
        console.log('done!');
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}

function iterativeCountDown(n){         // Iterative
    for(let i = n; i > 0; i--){
        console.log(i);
    }
    console.log('done!');
}

function sumRange(n){
    if(n === 1) return 1;      // base case
    return n + sumRange(n-1);  // variable input
}

function myFactorialRecursive(n){
    if(n === 1) return 1;
    return n * myFactorial(n-1)
}

function myFactorialIterative(n){
    let total = 1;
    for (let i = n; i > 1; i--){
        total = total * i
    }
    return total;
}

//  | Common Pitfalls -

// .No base case // maximum call stack size exceeded 
// .No return or returns the wrong thing // never hits base case, call stack exceeded
// .All of these result in a stack overflow


// | Use helper method recursion and pure recursion to solve more difficult problems -

// Helper Method example:

function collectOddValues(arr){                  // outer function enables
    let result = [];                          // the data array (result) to persist
                                              // through recursive function calls
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));    // shrink array by 1, call recursively
    }
    helper(arr);
    return result;
}

// Pure Recursion example:
  // tips: for arrays, use methods like .slice(), the spread operator and .concat() to
  // make copies of arrays so you do not mutate them

function pureCollectOddValues(arr){
    let newArray = [];

    if(arr.length === 0){
        return newArray;
    }
    if(arr[0] % 2 !== 0){
        newArray.push(arr[0]);
    }
    newArray = newArray.concat(pureCollectOddValues(arr.slice(1)));
    return newArray;
}
