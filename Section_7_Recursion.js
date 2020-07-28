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

// | Use helper method recursion and pure recursion to solve more difficult problems -


