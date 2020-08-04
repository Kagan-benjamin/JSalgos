                           // Singly Linked Lists //
 
// .Define what a Singly Linked List is:

// .A data structure that contains a head (start), tail (end) and length property.
// .Linked Lists consist of nodes, and each node has a value and a pointer
// to another node or null. 

//    Head      Length = 4      Tail
//     4 =====> 6 =====> 8 =====> 2 
//        next     next     next     null


// .Compare and contrast Linked Lists with Arrays:

// . Lists - do not have indexes! Connected via nodes w/ a next pointer
//    .random access is not allowed, traversal-dependent

// . Arrays - indexed in order! Insertion and deletion can be expensive
//    .Can quickly be accessed at a specific index


// .Implement insertion, removal and traversal methods on Singly Linked Lists:


// Basic Setup:

// .push() pseudocode:
// 1. This function should accept a value. 2. Create a new node using the value passed in
// 3. If there is no head, set the head and tail to be the newly created node.
// 4. Otherwise, set the next property on the tail to be the new node and set the
// tail property on the list to be the newly created node. Increment length by 1.

// .pop() pseudocode:
// 1. If there are no nodes in the list, return undefined
// 2. Otherwise, loop through the list until you reach the tail
// 3. Set the next property of the 2nd to last node to null
// 4. Set the tail of the list to be that 2nd to last node.
// 5. Decrement list length by 1 and return the value of the node removed





class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 

    pop(){
        if(!this.head){
            return undefined;
        } 
        let newTail = this.head;
        let currentNode = this.head;
        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
}