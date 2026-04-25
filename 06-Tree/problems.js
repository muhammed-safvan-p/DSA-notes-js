/**
 * ======================================================
 * BINARY SEARCH TREE – PRACTICE PROBLEMS
 * ======================================================
 *
 * Contents:
 * 1. BST Structure & Traversals (Notes)
 *    - Draw a tree grom given array
 *    - Traversal 3 dfs and bfs
 * 2. Find Closest Value in BST
 * 3. Duplicate Handling in BST
 *    - Case 1: Remove duplicates from existing BST
 *    - Case 2: Prevent duplicates during insertion (Best)
 * 4. find the Degree of a node
 * ======================================================
 */

/* ======================================================
   PROBLEM 1: BST STRUCTURE & TRAVERSALS (NOTES)
====================================================== */

/*
Given Array:
[50, 25, 75, 15, 30, 60, 80, 28]

BST STRUCTURE: (Draw)

              50
         25         75
     15      30   60    80
            28
*/

/*
DFS Traversals:

Preorder  (Root → Left → Right):
50, 25, 15, 30, 28, 75, 60, 80

Inorder   (Left → Root → Right):
15, 25, 28, 30, 50, 60, 75, 80

Postorder (Left → Right → Root):
15, 28, 30, 25, 60, 80, 75, 50
*/

/*
BFS Traversal (Level Order):
50, 25, 75, 15, 30, 60, 80, 28
*/

/* ======================================================
   COMMON TREE NODE
====================================================== */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* ======================================================
   PROBLEM 2: FIND CLOSEST VALUE IN BST
====================================================== */

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
        }
    }
    #insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else this.#insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this.#insertNode(node.right, newNode);
        }
    }

    findClosest(target) {
        let current = this.root;
        let closest = current.value;

        while (current !== null) {
            if (
                Math.abs(current.value - target) <
                Math.abs(closest - target)
            ) {
                closest = current.value;
            }

            if (target < current.value) {
                current = current.left;
            } else if (target > current.value) {
                current = current.right;
            } else {
                return current.value; // exact match
            }
        }

        return closest;
    }
}

/* =======================
   Example Usage
======================= */

const bst = new BST();

bst.insert(50);
bst.insert(25);
bst.insert(75);
bst.insert(15);
bst.insert(30);
bst.insert(60);
bst.insert(80);
bst.insert(28);

console.log("Closest to 29:", bst.findClosest(29)); // 28
console.log("Closest to 61:", bst.findClosest(61)); // 60

/*
Time Complexity:
- Balanced BST: O(log n)
- Skewed BST: O(n)

Space Complexity:
- O(1)
*/

/* ======================================================
   PROBLEM 3: REMOVE DUPLICATES FROM EXISTING BST
====================================================== */

class BSTRemoveDuplicates {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
        }
    }

    // Allows duplicates
    #insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else this.#insertNode(node.left, newNode);
        } else {
            if (!node.right) node.right = newNode;
            else this.#insertNode(node.right, newNode);
        }
    }

    removeDuplicates() {
        let prev = null;

        const inorder = (node) => {
            if (!node) return null;

            node.left = inorder(node.left);

            if (prev !== null && node.value === prev) {
                return inorder(this.#deleteNode(node.value, node));
            }

            prev = node.value;
            node.right = inorder(node.right);
            return node;
        };

        this.root = inorder(this.root);
    }

    #deleteNode(value, node) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.#deleteNode(value, node.left);
        } else if (value > node.value) {
            node.right = this.#deleteNode(value, node.right);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            const minNode = this.findMin(node.right);
            node.value = minNode.value;
            node.right = this.#deleteNode(minNode.value, node.right);
        }
        return node;
    }

    findMin(node) {
        while (node.left) node = node.left;
        return node;
    }
}

/* =======================
   Example (Remove Duplicates)
======================= */

const bstWithDup = new BSTRemoveDuplicates();
bstWithDup.insert(2);
bstWithDup.insert(1);
bstWithDup.insert(3);
bstWithDup.insert(6);
bstWithDup.insert(7);
bstWithDup.insert(9);
bstWithDup.insert(3); // duplicate

bstWithDup.removeDuplicates();
console.log("BST after removing duplicates:", bstWithDup);


/* ======================================================
   PROBLEM 4: REMOVE DUPLICATES WHEN INSERTING BST
====================================================== */

#insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) node.left = newNode;
            else this.#insertNode(node.left, newNode);
        } else if (newNode.value > node.value) {
            if (!node.right) node.right = newNode;
            else this.#insertNode(node.right, newNode);
        }else{
            console.log("Duplicates cannot allowed");
        }
    }


/* ======================================================
   IMPORTANT NOTE
====================================================== */
/*
✔ Best Practice:
   → Always prevent duplicates during insertion

❌ Removing duplicates from an existing BST:
   → Complex and only done if explicitly asked
*/

/* ======================================================
   PROBLEM 4: FIND THE DEGREE OF A NODE
====================================================== */

function getDegree(node){
    let degree = 0;

    if(node.left)degree++;
    if(node.right)degree++;

    return degree;
}