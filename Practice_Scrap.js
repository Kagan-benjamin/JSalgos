function practiceBubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        let swapToggle = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapToggle = false;
            }
        }
        if(swapToggle){
            break;
        }
    }
    return arr;
}

function practiceSelectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

function practiceInsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let curVal = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > curVal){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curVal;
    }
    return arr;
}

function nestedEvenSum (obj) {
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] == 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

// REPL.it Singly Linked Lists 

class Node {
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
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
      if(this.length === 1){
        let temp = this.head;
        this.head = null;
        this.tail = null;
        this.length--;
        return temp;
      }
      let lastNode = this.tail;
      let curNode = this.head;
      
      while(curNode.next !== lastNode){
        curNode = curNode.next;
      }
      this.tail = curNode;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return lastNode;
    }
  
  }
  
  let list1 = new SinglyLinkedList;
  let node1 = new Node('a');
  let node2 = new Node('b');
  let node3 = new Node('c');
  let node4 = new Node('d');
  
  list1.push(node1)
  list1.push(node2)
  list1.push(node3)
  list1.push(node4)

  // Doubly Linked List Exercises //

  class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
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

    unshift(val){
      const newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
      return this;
  }
    
  shift(){
    if(!this.head) return undefined;
    let target = this.head;
    if(this.length === 1){
        this.head = null;
        this.tail = null;
    } else {
        let newHead = target.next;
        newHead.prev = null;
        target.next = null;
        this.head = newHead;
    }
    this.length--;
    return target;
}

}