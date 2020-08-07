                                    // Stacks //
// What is a stack?
// .abstract data structure that follows a LAST IN FIRST OUT (LIFO) pattern.
// .the last element added to the stack will be the first element removed from the stack.
// Ex:           last               first 
//       null <-- 10 <-- 2 <-- 22 <-- 7
//              (Tail)              (Head)

// Use cases for stacks
// .manage function invocations (Call Stack)
// .undo/redo operations
// .history objects (routing) are treated like a stack
// .NOT A BUILT-IN DATA STRUCTURE IN JAVASCRIPT, but easy to implement.
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

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.length;
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--
        return temp.val
    }
}

// Big-O of Stacks:

// Insertion - O(1) | Removal - O(1)  No need to iterate
// Search - O(n) | Access - O(n)  Necessary to iterate through linked list


                                  // Queues //
// FIFO (First in, first out) data structure
// .waiting queues to connect
// .background tasks
// .uploading resources
// .print queue / task processing


// Array Queue

let q = [];
q.push('first');
q.push('second');
q.push('third');
// ['first', 'second', 'third']
q.shift() // 'first' | ['second', 'third']
q.shift() // 'second' | ['third']
q.shift() // 'third' | []


// Linked List Queue

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.length;
    }

    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return temp.val;
    }
}

// Big-O of Queues

// Insertion - O(1) | Removal - O(1)
// Searching - O(n) | Access - O(n)

// .Queues are useful for processing tasks and are foundational for more complex
// data structures. Insertion and removal are performed in constant time O(1).