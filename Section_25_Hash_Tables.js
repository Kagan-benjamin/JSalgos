                                    // Hash Tables //
/*  .What is a hash table?
.Hash tables are used to store key-value pairs.
.They are like arrays, but the keys are not ordered.
.Unlike arrays, hash tables are FAST for all of the following operations:
finding values, adding new values and removing values

.Nearly every programming language has some sort of hash table data structure.
.Because of their speed, hash tables are very commonly used.
.Python has 'dictionaries', JS has 'objects' and 'maps*', Java/GO/Scala has 'maps'
***Objects in JS have some restrictions, but are essentially hash tables. 

["#ff69b4", "ff4500", "#00ffff"] Rather than using indices, can we define readable keys?
pink --> #ff69b4
orange/red --> #ff4500
cyan --> #00ffff

.colors["cyan"] is more readable than colors[2], so how can we get human AND computer
readability?
.In order to look up values by key, we need a way to convert keys into valid array indices.
.A function that performs this task is called a Hash Function.



    .What is a hashing algorithm?
    .Understand how collisions occur in a hash table.
    .Handle collisions using separate chaining or linear probing.
*/                              

/* Hash Functions:
.Takes in data of arbitrary size and returns data of fixed size. 1-way
.What makes a good hashing algorithm?
    -Fast (constant time)
    -Doesn't cluster outputs at specific indices, but distributes uniformly
    -Deterministic (same input yields same output, always)
*/

// Basic (Bad) Hash Function Example:

'a'.charCodeAt(0) //=> 97
'hi'.charCodeAt(0) //=> 104
hash('pink', 10)

function hash(key, arrLength){
    let total = 0;
    for(let i = 0; i < str.length; i++){
        total += (str.charCodeAt(i) % arrLength);
    }
    return total;
}
// .Only hashes strings.
// .Not in constant time - O(n) relative to key length.
// .Could be more random.
