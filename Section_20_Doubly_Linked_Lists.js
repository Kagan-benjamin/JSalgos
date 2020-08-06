                               // Doubly Linked Lists //
                            
// .Almost identical to singly linked lists, except that every node has a pointer to 
// both the previous AND the next node.

// More flexibility but more memory than Singly Linked List. Bi-directional.

// Example:   
//            next   next  next   next
// null <-- 12 --> 9 --> 5 --> 14 --> null 
//      pre <-- pre <-- pre <-- pre
//         HEAD               TAIL

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

// .push() pseudocode:
// 1. Create a new node with the value passed in.
// 2. If the head property is null, set the head + tail to the new node.
// 3. Else, set next property on the tail node to be the new node.
// 4. Set the prev property on the new node to be the tail node.
// 5. set the tail to the new node and increment length by 1
// 6. Return the doubly linked list.

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

// .pop() pseudocode:
// 1. If the linked list is empty, return undefined.
// 2. Store the current tail in a variable and return later.
// 3. If the length is 1, set the head and tail to null.
// 4. Update the tail to be the previous node.
// 5. set the new tail's next to null.
// 6. Decrement the length and return the removed node.

    pop(){
        if(this.length < 1) return undefined;
        let oldTail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
        let newTail = this.tail.prev;
        newTail.next = null;
        oldTail.prev = null;
        this.tail = newTail;
        }
        this.length--;
        return oldTail;
    }

// .shift() pseudocode:
// 1. If there is no head, return undefined.
// 2. Otherwise, store the current head property in a variable.
// 3. If the length is 1, set the head and tail to be null.
// 4. Otherwise, update the head to be the next of the old head. 
// 5. Set the head's prev property to null.
// 6. Set the old head's next to null.
// 7. Decrement the length and return the old head node.

    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let newHead = oldHead.next;
            oldHead.next = null;
            newHead.prev = null;
            this.head = newHead;
        }
        this.length--;
        return oldHead;
    }

// .unshift() pseudocode:
// 1. Create a new node with the passed in value.
// 2. If the list is empty, set the head and tail to be the new node. 
// 3. Otherwise, set the prev property on the head of the list to be the new node.
// 4. Set the next property on the new node to be the old head node.
// 5. Update the head to be the new node.
// 6. Increment the length and return the list.

    unshift(val){
        let newHead = new Node(val);
        if(!this.head){
            this.head = newHead;
            this.tail = newHead;
        } else {
            let oldHead = this.head
            oldHead.prev = newHead;
            newHead.next = oldHead;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

// .get() pseudocode: 
// 1. If the index is than 0 or greater than / equal to the list length, return null
// 2. If the index is less than or equal to half the length of the list,
//   2a. loop through the list starting from the head towards the mid and return node
// 3. If the index is greater than half the length of the list,
//   3a. loop through the list starting from the tail towards the mid and return node. 

    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let idxMid = Math.floor(this.length / 2)
        let counter, curNode;
        if(idx <= idxMid){
            counter = 0
            curNode = this.head
            while(counter !== idx){
                curNode = curNode.next;
                counter++
            }
        } else {
            counter = this.length - 1;
            curNode = this.tail;
            while(counter !== idx){
                curNode = curNode.prev;
                counter--;
            }
        }
        return curNode;
    }

// .set() pseudocode:
// 1. Create a variable that is a result of the get method at the passed in index.
// 2. If the get method returns a valid node, change val and return true.
// 3. Else, return false. 

    set(idx, val){
        let target = this.get(idx);
        if(!target) return false;
        target.val = val;
        return true;
    }

// .insert() pseudocode:
// 1. If the index is less than zero or greater than the list length, return false
// 2. If the index is 0, unshift 
// 3. If the index is equal to the length, push
// 4. Use the get method to access the index - 1
// 5. Set all next and prev properties correctly between nodes.
// 6. Increment the length and return true.

    insert(idx, val){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.unshift(val);
        if(idx === this.length) return !!this.push(val);
        let prevNode = this.get(idx - 1);
        let nextNode = prevNode.next;
        let newNode = new Node(val);
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++
        return true;
    }

    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return !!this.shift();
        if(idx === this.length - 1) return !!this.pop();

        let target = this.get(idx);
        let prevNode = target.prev;
        let nextNode = target.next;
        target.prev = null;
        target.next = null;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
        return target;
    }

    reverse() {
        if (!this.head) {
          return null;
        }
    
        let currentNode = this.head;
        this.tail = currentNode;
    
        while (currentNode !== null) {
          let prev = currentNode.prev;
          currentNode.prev = currentNode.next;
          currentNode.next = prev;
    
          if (currentNode.prev) {
            currentNode = currentNode.prev;
          } else {
            this.head = currentNode;
            break;
          }
        }
        return this;
      }
}

                     // Doubly Linked Lists Big-O //
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n) (technically n/2, but negligible w/ huge datasets)
// Access - O(n)

// .If you need to access your data from the end, efficient
// .Easily move backwards or forwards, finding nodes can be done in half 
// the time, HOWEVER, it takes up more memory to keep track of .prev property. 
