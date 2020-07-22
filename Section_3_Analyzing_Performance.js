let instructor = {
    firstName: 'Ben',
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

// Object Operation Performance //

//  insertion - O(1)                // Object.keys - O(n)
//  removal - O(1)                  // Object.values - O(n)
//  access - O(1)                   // Object.entries - O(n)
//  searching - O(n)                // hasOwnProperty() - O(1)   provide property key, return t/f

let names = ['Layla', 'Ben', 'Dan'];
let values = [true, {}, [], 2, 'awesome'];