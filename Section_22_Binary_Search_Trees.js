                            // Binary Search Trees //

// What is a tree? 

// .A data structure that consists of nodes in a parent/child relationship  
//** .Lists are linear whereas trees are non-linear
// .Tree nodes CANNOT reference sibling nodes, only parent/child nodes.
// .Each tree needs 1 entry Root Node. The 'root' is the top node in a tree.
// .A child node is directly connected to another node when moving away from the root.
// .A parent node is the converse concept relative to child nodes.
// .Sibling nodes have the same parent.
// .Leaf - a node with no children.  Edge - The connection between nodes (arrow/ling)

// Use cases for trees:
// .HTML Document-Object-Model (DOM) - nested html data structure
// .Network Routing
// .Abstract Syntax Tree
// .Artificial Intelligence (decision trees)
// .Folders within operating systems (folder trees)
// .JSON objects  

// .Binary trees: Each node can have at most 2 children.
// .Binary Search Trees are used to order data for efficient access.
// .Every node to the left is always LESS than the parent
// .Every node to the right is always GREATER than the parent

// Why binary search trees? 
// .Efficient for retrieval and insertion (search) 
// Ex:
//                       41
//                      /  \
//                     20  65
//                    / \  / \
//                  11 29 50 91
//                   \  \    / \
//                   12 32  72 99            


// Raw Binary Search Tree Implementation:

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);

class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }


// Binary Search Tree Insert pseudocode:
// 1. Is there a root? If no, set it.
// 2. If root, is the val less or greater than the root?
// 3. If it is greater:
// 3a. check to see if there is a node to the right
//  3aa. if yes, move to that node and repeat these steps.
//  3ab. If not, add that node as the right property
// 4. If it is less:
// 4a. check to see if there is a node to the left
//  4aa. if yes, move to that node and repeat.
//  4ab. if not, add that node as the left proprety

insert(val){
    const newNode = new Node(val);
    if(!this.root){
      this.root = newNode;
      return this;
    } 
    let current = this.root;
    while(true){
        if(val < current.val){
            if(!current.left){
                current.left = newNode;
                return this;
            } 
            current = current.left;   
        } else if (val > current.val){
            if(!current.right){
                current.right = newNode;
                return this;
            } 
            current = current.right;
        } else {
            return undefined;
        }
    }
}

// find() pseudocode:

find(val){
    let current = this.root;
    if(val === this.root.val) return current;
    while(true){
        if(val < current.val){
            if(!current.left) return false;
            current = current.left;
        } else if(val > current.val){
            if(!current.right) return false;
            current = current.right;
        } else {
            return current;
        }
    }
}

}

// Big-O of Binary Search Trees

//  Insertion / Searching - O(logn) As you add another level of children (double 
// the size of the tree), you only need to search 1 level deeper.   *AVG/BEST CASE*

// Completely 1-sided tree results in O(n)  *WORST CASE*