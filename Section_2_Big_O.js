function sumN(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total
}

function betterSumN(n){
    return n * (n + 1) / 2
}

function countUpAndDown(n){
    console.log('Going up!');
    for (let i = 0; i < n; i++){            // O(n)
        console.log(i);
    }
    console.log('At the top!\nGoing down...');
    for (let j = n-1; j >= 0; j--){         // O(n)
        console.log(j);       
    }
    console.log('Back down, Bye!')          // consecutive
}
  //  O(2n) = O(n) //

function printAllPairs(n){
    for (let i = 0; i < n; i++){          // O(n)
        for(let j = 0; j < n; j++){       // O(n) 
            console.log(i, j);
        }                                 // nested
    }
} 
  //  O(n) * O(n) = O(n^2)