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

// Better Hash Function:

function hash(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;               // use prime numbers to reduce collisions
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let value = key[i].charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

/* Prime Numbers:
.The prime number in the hash is helpful in spreading out keys more uniformly.
.It's also helpful if the array that you're putting values into has a prime length.
--> this dramatically reduces collisions. Use a larger prime number.

 Dealing with Collisions:
.Even with a large array and a great hash function, collisions are inevitable.

.Separate Chaining: At each index in our array we store values using a more
sophisticated data structure (eg array or linked list).
.This allows us to store multiple key-value pairs at the same index.

.Linear Probing: When we find a collision, we search through the array to find
the next empty slot. No need to used a nested structure. **Limited to size of hash**
*/

class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let value = key[i].charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

// .set() pseudocode:
// 1. Accepts a key and a value
// 2. Hashes the key 
// 3. Stores the key-value pair in the hash table array via separate chaining.

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

// .get() pseudocode:
// 1. Accepts a key
// 2. Hashes the key
// 3. Retrieves the key-value pair in the hash table.
// 4. If the key isn't found, return undefined.

    get(key){
        let index = this._hash(key);
        if(!this.keyMap[index]){ 
            return undefined;
        } else {
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] == key){
                    return this.keyMap[index][i][1];
                }
            }
        }
    }

// .keys() pseudocode:
// 1. Loops through the hash table array and returns an array of keys in the table.

// .values() pseudocode:
// 1. Loops through the hash table array and returns an array of values in the table.



}
