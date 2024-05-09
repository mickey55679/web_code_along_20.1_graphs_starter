function traverse(graph, root) {
  // Implement
}

// Implement a breadth-first traversal (BFT) for a graph.
// Inputs:
//   graph: object (adjacency list representation)
//   root: int (starting point for the traverse)

// Output: list of values in the order of a breadth-first traversal

// Representing a graph as a JavaScript object provides a nice simplified version of an adjacency list implementation. The keys of the object/dictionary are vertices, and the key-value pairs map each vertex to a list of integers representing its neighbors.

// Test cases
// We'll be using this simple undirected graph to test our BFT:
// 5 -- 3
// | \
// |  2
// | / \
// 1    4

/*
1. Initalize an empty output list [] 
2. Initialize an empty queue []
Initialize empty visited set {}
3. Enqueue root inside queue []
4. While values are in queue, start serving the values
  4a. Add to ouput list, remove from queue
  4b Enqueue neighbors to the queue and mark as visited
  5. Return output list
 */
const graph = { 1: [2, 5], 2: [1, 4, 5], 3: [5], 4: [2], 5: [1, 2, 3] };
console.log(traverse(graph, 1)); // 1, 2, 5, 4, 3
console.log(traverse(graph, 4)); // 4, 2, 1, 5, 3
console.log(traverse(graph, 5)); // 5, 1, 2, 3, 4
