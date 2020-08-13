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



