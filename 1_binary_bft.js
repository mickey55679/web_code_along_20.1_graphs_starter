class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const values = [];
  const queue = [root];

  while (queue.length) {
    const currentNode = queue.shift();
    values.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return values;

  // your BFT code here
  // Enqueue: queue.push(value)
  // Dequeue: queue.shift()
}

// Implement a breadth-first traversal (BFT) for a binary tree.
// Inputs:
//   root: node (root of the binary tree)

// Output: list of values in the order of a breadth-first traversal

// Test cases:
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

/*
1. Initalize an empty output list [] (line 10)
2. Initialize an empty queue --> visualize levels [] (line 11)
3. Enqueue root inside queue [root]
4. While values are in queue, start serving the values
  4a. Add to ouput list, remove from queue
  4b Enqueue children (left, right) to queue
  5. Return output list
 */
console.log(traverse(head)); // 6, 3, 9
