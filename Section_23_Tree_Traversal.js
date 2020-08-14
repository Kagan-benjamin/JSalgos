                                    // Tree Traversal //

// .Methods that can be applied to ANY tree (not just BST)
// .How do we visit every node once?  .Breadth-first Search and Depth-first Search

// Breadth-First Search (BFS)
// .create a queue (this can be an array) and a variable to store the values of
// .visited nodes.
// .Place the root node in the queue.
// .Loop as long as there is anything in the queue:
//  -Dequeue a node from the queue and push the value of the node into the
//  variable that stores visited nodes.
//  -If there is a left property on the node dequeued, add it to the queue.
//  -If there is a right property on the node dequeued, add it to the queue.
// .Return the variable that stores all visited values.

function bFS(tree){
    if(!tree.root) return 'Empty Tree';
    let queue = [];
    let visited = [];
    let tempQueue;
    queue.push(tree.root)
    while(queue.length > 0){
        tempQueue = queue.shift();
        visited.push(tempQueue.val);
        if(tempQueue.left) queue.push(tempQueue.left);
        if(tempQueue.right) queue.push(tempQueue.right);
    }
    return visited;
}

// Depth-First Search (DFS) - PreOrder
// .create a variable to store the values of visited nodes.
// .store the root of the BST in a variable called current.
// .Write a helper function which accepts a node:
//   -Push the value of the node to the variable that stores the values
//   -If the node has a left property, call the helper function with the node.left
//   -If the node has a right property, call the helper function with the node.right
// .Invoke the helper function with the current variable
// .Return the array of visited values. 

function dFSPreOrder(tree){
    let result = [];
    let current = tree.root;
    function traverse(node){
        result.push(node.val)
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(current)
    return result;
}

function dFSPostOrder(tree){
    let result = [];
    let current = tree.root;
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        result.push(node.val);
    }
    traverse(current);
    return result;
}

function dFSInOrder(tree){
    let result = [];
    let current = tree.root;
    function traverse(node){
        if(node.left) traverse(node.left);  // node.left && traverse(node.left)
        result.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return result;
}

// Methods of Tree Traversal Discussion

// Time complexity between BFS and DFS is the same, however:

// .Breadth-first search uses up a lot of memory for wide trees.
// .In this case, depth-first needs to hold fewer nodes in memory.
// .For skinny trees, BFS does not need to keep track of many nodes.
// .For a very deep tree, BFS may be more efficient.

// DFS inOrder - used to produce representation of tree in order
// DFS preOrder - can be used to 'export' a tree structure for easy copying 
// (tree relationships are maintained in data representation)


