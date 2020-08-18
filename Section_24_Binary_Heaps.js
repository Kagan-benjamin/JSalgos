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
.They are also used with graph traversal algorithms.              */


// Implement basic heaps w/ methods //

// .For any index of an array n:
// .The left child is stored at 2n+1 and the right child at 2n+2.
// .For any child at index n, its parent is at index Math.floor((n-1)/2)




// Where are heaps used in real world applications? 
// What other data structures can be constructed from heaps?                            