                                // Stacks and Queues //
// What is a stack?
// .abstract data structure that follows a LAST IN FIRST OUT (LIFO) pattern.
// .the last element added to the stack will be the first element removed from the stack.
// Ex:           last               first 
//       null <-- 10 <-- 2 <-- 22 <-- 7
//              (Tail)              (Head)

// Use cases for stacks
// .manage function invocations
// .undo/redo 
// .history objects (routing) are treated like a stack
// .used to store history of data in tree/graph comparison
// .more than one way to implement stacks

// Implementation for stacks: 

// Array Stack

const stack = [];
stack.push('site 1') // [site 1]
stack.push('site 2') // [site 1, site 2]
stack.push('site 3') // [site 1, site 2, site 3]
stack.pop() // [site 3] => [site 1, site 2]
stack.pop() // [site 2] => [site 1]
stack.pop() // [site 1] => []

// Linked List Stack


