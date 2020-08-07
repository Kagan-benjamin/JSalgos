                                // Stacks and Queues //
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


