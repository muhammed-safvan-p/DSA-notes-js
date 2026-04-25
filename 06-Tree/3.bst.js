/*
===========================================
Question:
Implement Binary Search Tree (BST).
===========================================

BST Rules:
- Left child < Parent
- Right child > Parent

Operations:
- Insert
- Search
- Delete
- Traversal (DFS, BFS)
- Min / Max
- Height
- Balance Check

Time Complexity:
- Average → O(log n)
- Worst → O(n)
*/

class TreeNode {
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

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this._insert(this.root, newNode);
    }
  }

  _insert(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode;
      else this._insert(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this._insert(node.right, newNode);
    }
  }

  search(value, node = this.root) {
    if (!node) return false;

    if (node.value === value) return true;

    if (value < node.value) {
      return this.search(value, node.left);
    } else {
      return this.search(value, node.right);
    }
  }

  // InOrder → sorted
  inOrder(node = this.root) {
    if (!node) return;

    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  bfs() {
    if (!this.root) return;

    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();
      console.log(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  findMin(node = this.root) {
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  findMax(node = this.root) {
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }

  height(node = this.root) {
    if (!node) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
  }

  delete(value) {
    this.root = this._delete(this.root, value);
  }

  _delete(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._delete(node.left, value);
    } else if (value > node.value) {
      node.right = this._delete(node.right, value);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let min = this.findMin(node.right);
      node.value = min;
      node.right = this._delete(node.right, min);
    }

    return node;
  }
}

// Example
let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.inOrder(); // sorted
console.log(bst.search(7)); // true