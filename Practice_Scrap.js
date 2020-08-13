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

set(idx, val){
  if(idx < 0 || idx >= this.length) return false;
  let newNode = new Node(val);
  let target = this.get(idx);
  target.val = val;
  return true;
}

get(idx){
  if(idx < 0 || idx >= this.length) return null;
  let counter = 0;
  let curNode = this.head
  while(counter !== idx){
      curNode = curNode.next;
      counter++;
  }
  return curNode;
}

pop(){
  if(!this.head) return undefined;
  let target = this.tail
  if(this.length === 1){
      this.head = null;
      this.tail = null;
  } else {
      let newTail = target.prev;
      newTail.next = null;
      target.prev = null;
      this.tail = newTail;
  }
  this.length--
  return target;
}

insert(idx, val){
  if(idx < 0 || idx > this.length) return false;
  if(idx === 0) return !!this.unshift(val);
  if(idx === this.length) return !!this.push(val);
  
  let newNode = new Node(val);
  let nextNode = this.get(idx);
  let prevNode = nextNode.prev;
  
  prevNode.next = newNode;
  newNode.next = nextNode;
  nextNode.prev = newNode;
  newNode.prev = prevNode;
  
  this.length++;
  return true;
}

}
// PUZZLES //

// sortedFrequency()


function howMany(arr, idx, n){
  let counter = 0;
  let target = n;
  let i = idx;
  // console.log(counter, 'idx: ' + i, 'target: ' + target);
  if(arr.length < 3){
      if(arr[0] === n){
          counter++;
      }
      if(arr[1] === n){
          counter++;
      }
      if(counter === 0){
          return -1;
      } else {
          return counter;
      }
  }
  while(arr[i] === target && i > -1){
      counter++;
      i--;
      // console.log('loop left', 'i: ' + i, counter)    
  }
  i = idx + 1;
  while(arr[i] === target && i < arr.length){
      counter++;
      i++;
      //  console.log('loop right', 'i: ' + i, counter)   
  }
  if(counter <= 0){
      return -1;
  } else {
      // console.log(counter)
      return counter;
  }
}

function sortedFrequency(arr, n){
//   console.log('[' + arr + ']', n)

let start = 0;
let end = arr.length - 1;
let mid = Math.floor((start + end) / 2);
if(arr[mid] === n || arr.length < 3){
  let ans = howMany(arr, mid, n);  
  // console.log(ans)
  return ans;
} 

if(arr[mid] > n){
    let halfArr = arr.slice(0, mid);
    sortedFrequency(halfArr, n);
}
if(arr[mid] < n){
    let halfArr = arr.slice(mid);
    sortedFrequency(halfArr, n)
}
}

let testArr = [1, 1, 2, 2, 2, 2, 3]

console.log(sortedFrequency(testArr, 1))
sortedFrequency(testArr, 2)
sortedFrequency(testArr, 3)
sortedFrequency(testArr, 4)

// Binary Search Tree Practice

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if(value > current.value){
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                return false;
            }
        }
        
    }

    find(value){
        let current = this.root;
        if(value === current.value) return current;
        while(true){
            if(value < current.value){
                if(!current.left) return undefined;
                current = current.left;
            } else if(value > current.value){
                if(!current.right) return undefined;
                current = current.right;
            } else {
                return current;
            }
        }
    }



  }

  