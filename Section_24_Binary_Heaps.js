                            // Binary Heaps //
/* What is a binary heap?
.Very similar to a binary search tree, but different rules:
.In a MaxBinaryHeap, parent nodes are ALWAYS LARGER than child nodes.
.In a MinBinaryHeap, parent nodes are ALWAYS SMALLER than child nodes.
ex:                 41
                 39    33
               18 27  12

Max Binary Heap:
.Each parent has at most two child nodes.
.The value of each parent node is ALWAYS greater than its child nodes.
.In a MaxBH there are no guarantees of order between sibling nodes.
.A MaxBH is as compact as possible. All children of each node must be filled 
before moving to another level of depth. Left children are filled first.

Min Binary Heap - inverse of MaxBH.
.Binary heaps are very commonly used to implement Priority Queues.
.They are also used with graph traversal algorithms.             */
// .For any index of an array n:
// .The left child is stored at 2n+1 and the right child at 2n+2.
// .For any child at index n, its parent is at index Math.floor((n-1)/2)


// Implement basic heaps w/ methods //

class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }

/* .insert() pseudocode:
1. Push the new value into the values property on the heap.
2. Bubble up:
  -create a variable for idx which is equal to last index in values
  -create parentIdx variable which is Math.floor((idx-1)/2)
  -keep looping while value at child idx > parent idx:
    -swap the values between the child and parent index.
    -set the idx to be the old parentIdx and continue.    */

    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
/* .extractMax() pseudocode:
1. let this.values[0] = this.values[end], this.values.pop() 
 -Swap root node with last node and pop last node from array.
 -Child nodes: 2n+1 / 2n+2
2. Compare new root with 2 children. Whichever is larger, swap with root.
3. If both are smaller, don't swap.
*/

    extractMax(){
        if(this.values.length === 1) return this.values.pop();
        const oldRoot = this.values[0];
        this.values[0] = this.values[this.values.length-1];
        this.values.pop();
        let idx = 0;
        let child1 = (2*idx) + 1;
        let child2 = (2*idx) + 2;

        while(this.values[idx] < this.values[child1] || 
        this.values[idx] < this.values[child2]){
            child1 = (2*idx) + 1;
            child2 = (2*idx) + 2;
            if(this.values[child1] >= this.values[child2]){
                let temp = this.values[child1];
                this.values[child1] = this.values[idx];
                this.values[idx] = temp;
                idx = child1;
            } else {
                let temp = this.values[child2];
                this.values[child2] = this.values[idx];
                this.values[idx] = temp;
                idx = child2;
            }
        }
        return oldRoot;
    }
}

let test = new MaxBinaryHeap

test.insert(55)
test.insert(33)
test.insert(39)
test.insert(41)
test.insert(18)
test.insert(27)
test.insert(12)






// Where are heaps used in real world applications? 
// What other data structures can be constructed from heaps?                            