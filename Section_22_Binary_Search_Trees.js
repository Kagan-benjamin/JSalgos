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