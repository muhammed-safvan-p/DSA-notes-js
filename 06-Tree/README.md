# 🌳 **TREES**

---
### 🌱 **1. What is a Tree?**

> A **Tree** is a *non-linear* data structure that stores data in a **hierarchy (parent → child)**.
A **Tree** is a hierarchical data structure made of **nodes** connected by **edges**.
> 

🔥 Real-life example:

✔ Family tree

✔ Folder → subfolders

✔ Company hierarchy (CEO → Managers → Employees)

---
## 🧱 **2. Basic Terms**

| Term | Meaning |
| --- | --- |
| **Node** | Single element |
| **Root** | Top-most node |
| **Child** | Below a node |
| **Parent** | Above a node |
| **Leaf** | Node with no children |
| **Edge** | Connection between nodes |
| **Height** | Longest path from root to leaf |
| **Depth** | Distance from root |
| Level | Level tells which row a node belongs to in the tree |
| Degree | **degree of  a node** is the **number of children that node has**. |

Example Tree:

```
        A (root)
       / \
      B   C
     / \
    D   E (leaf)
```

---

## 🌳 **3. Why Do We Use Trees? (Applications)**

Trees are used **everywhere**:

- **File system**
    
    Folders → subfolders → files
    
- **Organization hierarchy**
    
    Company structure (CEO → managers → employees)
    
- **Family tree**
    
    Parents → children → grandchildren
    
- **Database indexing (B-Tree, B+ Tree)**
    
    Fast searching in databases
    
- **HTML / XML DOM**
    
    Web page structure
    
- **Compiler design**
    
    Syntax tree / expression tree
    

✅ One-line summary

> Trees are used to represent data in parent–child hierarchy.
> 

---

## 🌲 **4. Types of Trees (Overview)**

We’ll learn all of these step-by-step:

1️⃣ **General Tree**

- Each node can have **any number of children**.

2️⃣ **Binary Tree**

- Each node can have **0 to 2 children**.

3️⃣ **Binary Search Tree (BST)**

- A special binary tree where:
    *Left subtree < node value
    Right subtree > node value*
Useful for **searching**.

4️⃣ **Balanced Trees (AVL, Red-Black Tree)**

- A **balanced tree** is a tree where **left and right sides are almost equal in height**.

👉 This keeps the tree **fast** for searching, inserting, and deleting.

- (AVL, Red-Black Tree) *These trees keep height small for fast search.*

5️⃣ **Heap (Min-Heap, Max-Heap)**

- Used in priority queues.

6️⃣ **Trie (Prefix Tree)**

- A **Trie** is a tree used to **store words letter by letter**.

7️⃣ **Segment Tree**

A **Segment Tree** is a special tree used to answer **range queries fast**.

👉 Questions like:

- Sum from index 2 to 6?
- Minimum from index 1 to 4?
- Maximum in a range?

8️⃣ **Fenwick Tree (Binary Indexed Tree)**

A **Fenwick Tree** is a **simpler and lighter version of Segment Tree**.

👉 Used mainly for:

- Prefix sums
- Range sums (with less memory & code)
    
    ---
    

## ✅ **General Tree**

### **⌛Time Complexities**

| Operation | Time Complexity |
| --- | --- |
| Search | **O(n)** |
| Insert (with known parent) | **O(1)** |
| Insert (search parent) | **O(n)** |
| Delete node | **O(n)** |
| Preorder traversal | **O(n)** |
| Postorder traversal | **O(n)** |
| Level-order traversal | **O(n)** |
| Height | **O(n)** |
| Count nodes | **O(n)** |


## 🌳 **5. Binary Tree (BT)**


A **Binary Tree** is a tree where **each node can have at most 2 children**, called **left child** and **right child**.

✔ Properties

- No rule for how values are arranged.
- Children can have any value.
- Used mainly for **structure**, **expressions**, **heaps**, etc.

Example (valid BT):

```
      10
     /  \
    5    30
   / \
  40  20
```

➡ This is valid because each node has ≤ 2 children.

❌ But values are random — no ordering rule.
---
## 🌳 **Full BT vs Complete BT**

### **Full Binary Tree**

👉 Every node has **0 or 2 children only**

❌ No node with exactly 1 child

### **Complete Binary Tree**

👉 All levels filled **level-by-level**

👉 Last level filled **left to right**

✅ Nodes may have **0, 1, or 2 children**

**Key Difference**

- **Full** → child count rule (0 or 2)
- **Complete** → filling order rule (level-wise, left-first)

**Facts**

✔ A tree can be full but not complete

✔ Complete but not full

✔ Both

✔ Or neither
---

## 🌲 **6. Binary Search Tree (BST)**

A **BST** is a special type of binary tree with a **strict ordering property**:

✔ BST Property

For every node:

- **Left subtree values < node**
- **Right subtree values > node**

Example (valid BST):

```
       20
      /  \
    10    40
   / \    / \
  5  15  30  50
```

➡ Every left child is smaller, every right child is larger.

```jsx
**All BSTs are Binary Trees, but not all Binary Trees are BSTs.**
```

Benefits:

✔ Searching = **O(log n)**

✔ Inserting = **O(log n)**

## 🧪 **7. BST Basic Operations**

✔ Insert

Place value in correct position using BST rules.

✔ Search

Compare and go left/right.

✔ Delete (3 cases)

1. No child
2. One child
3. Two children → replace with inorder successor

✅ **Applications of BST**

- Fast **searching**
- **Sorted data** storage
- Database indexing
- Phone directory
- Symbol table in compilers

## 🧠 **8. Tree Traversals**

Traversal = "how to visit nodes"

### ✔ DFS (Depth First Search)

- 1️⃣ **Preorder** → Root, Left, Right
    
    ```jsx
    preOrder(root = this.root){
            if(root === null)return;
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    ```
    
- 2️⃣**Inorder** → Left, Root, Right
    
    ```jsx
    inOrder(root = this.root){
            if(root === null)return;
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    ```
    
- 3️⃣ **Postorder** → Left, Right, Root
    
    ```jsx
    postOrder(root = this.root){
            if(root === null)return;
            this.preOrder(root.left);
            this.preOrder(root.right);
            console.log(root.value);
        }
    ```
    

### ✔ BFS (Level Order)

Visit level by level using **queue**.

- ✔ Level Order (BFS)
    
    ```jsx
    bfs(){
            let queue = [this.root];
            let result = [];
    
            while(queue.length > 0){
                let node = queue.shift()
                result.push(node.value)
                if(node.left)queue.push(node.left)
                if(node.right)queue.push(node.right)
            }
            return result;
        }
    ```
### 📘 BST – Time Complexity

Key Concept

> The time complexity of BST operations depends on the height (h) of the tree.
> 
- **Balanced BST** → `h = O(log n)`
- **Skewed BST** → `h = O(n)`

---

⌛ Time Complexity Table

| Operation | Best Case (Balanced) | Average Case | Worst Case (Skewed) |
| --- | --- | --- | --- |
| Search | O(log n) | O(log n) | O(n) |
| Insert | O(log n) | O(log n) | O(n) |
| Delete | O(log n) | O(log n) | O(n) |
| Find Minimum | O(log n) | O(log n) | O(n) |
| Find Maximum | O(log n) | O(log n) | O(n) |
| Inorder Traversal | O(n) | O(n) | O(n) |
| Preorder Traversal | O(n) | O(n) | O(n) |
| Postorder Traversal | O(n) | O(n) | O(n) |
| Height of Tree | O(n) | O(n) | O(n) |
| Count Nodes | O(n) | O(n) | O(n) |

Space Complexity (Extra Memory)

| Operation | Space |
| --- | --- |
| Search / Insert / Delete (recursive) | O(h) |
| Traversals | O(h) |

- Balanced BST → O(log n)
- Skewed BST → O(n)

Summary 

- BST operations depend on **tree height**
- **Balanced BST → fast (O(log n))**
- **Unbalanced BST → slow (O(n))**
- Traversals always take **O(n)**

One-Line Exam Answer

> In a BST, search, insert, and delete take O(h) time, which becomes O(log n) for a balanced tree and O(n) for a skewed tree.
> 

## ✅ Difference between DFS and BFS

### 🌳 **DFS (Depth First Search)** in BST

- Goes **deep** into the tree first
- Uses **stack** or **recursion**
- Traversal types:
    - **Preorder** (Root → Left →  Right)
    - **Inorder** (Left → Root → Right)
    - **Postorder** (Left → Right → Root)
- **Inorder DFS gives sorted order** in a BST ✔️
- Memory usage is **low** (O(h))

🔥 When useful?

- When you want **sorted output**
- When tree is **deep**
- Good for **searching specific patterns**

---

### 🌳 **BFS (Breadth First Search)** in BST

- Visits nodes **level by level**
- Uses a **queue**
- Also called **Level-order traversal**
- Memory usage is **higher** (O(n) in worst case)

🔥 When useful?

- When you want to process nodes **level-wise**
- Good for checking:
    - **tree height**
    - **completeness**
    - **levels / structure**

| DFS (Depth First Search) | BFS (Breadth First Search) |
| --- | --- |
| Goes **deep first** | Goes **level by level** |
| Follows one path fully | Visits all nearby nodes first |
| Uses **stack / recursion** | Uses **queue** |
| Less memory (usually) | More memory |
| Not guaranteed shortest path | **Finds shortest path** (unweighted graph) |

🧠 Simple way to remember

- **DFS** = go deep → back → try another path
- **BFS** = visit all neighbors → then go deeper

📌 When to use

- Use **DFS** when you want to explore fully (like checking connectivity)
- Use **BFS** when you want the **shortest path**

---

### 🌳 **9. Balanced Trees (Advanced)**

> A **balanced tree** is a tree where **left and right sides are almost equal in height**.
> 

Common Balanced Trees

- **AVL Tree**
    
    > An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees of every node is at most 1.
    > 
    
    (AVL = **Adelson-Velsky and Landis**)
    
    Time Complexity
    
    | Operation | Time |
    | --- | --- |
    | Search | O(log n) |
    | Insert | O(log n) |
    | Delete | O(log n) |
    
    AVL vs Normal BST
    
    | Feature | BST | AVL |
    | --- | --- | --- |
    | Balanced | ❌ | ✅ |
    | Worst-case height | O(n) | O(log n) |
    | Speed | Can be slow | Always fast |
- **Red-Black Tree**
    
    > A Red–Black Tree is a self-balancing Binary Search Tree where each node is colored red or black to keep the tree balanced.
    > 
    
    The coloring rules ensure the tree height stays small, so operations are fast.
    
    ---
    
    Red–Black Tree Rules (Very Important)
    
    1. Every node is **either red or black**
    2. The **root is always black**
    3. All **leaf (NULL) nodes are black**
    4. **No two red nodes** can be adjacent (no red parent–child)
    5. Every path from a node to its descendant NULL nodes has the **same number of black nodes** (black height)
    
    These rules keep the tree balanced.
    
    ---
    
    Example
    
    ```
            10(B)
           /     \
       5(R)      15(R)
       /  \        \
    2(B) 7(B)     20(B)
    ```
    
    (B = Black, R = Red)
    
    ---
    
- **B-Tree**
- **B+ Tree**

📌 Key Point to Remember

- Balanced tree = **short height** = **fast search**

### 🔥 **Differences Between AVL and Red-Black Tree**

| Feature | AVL Tree | Red-Black Tree |
| --- | --- | --- |
| Type of balancing | **Strict** | **Loose** |
| Balance factor limit | ≤ 1 | Uses color rules |
| Search speed | **Faster** (O(log n)) | Slightly slower |
| Insert/Delete | Slower (many rotations) | **Faster** (few rotations) |
| Height | Smaller | Slightly larger |
| Best use | Search-heavy tasks | Insert/Delete-heavy tasks |
| Memory | Requires storing heights | Requires storing color bit |

✅ One-line summary

- **AVL = more balanced, slower updates**
- **Red-Black = less balanced, faster updates**

## 🔥**Differences between BT & BST**

| Feature | Binary Tree (BT) | Binary Search Tree (BST) |
| --- | --- | --- |
| Structure | Each node has ≤ 2 children | Each node has ≤ 2 children |
| Value Rule | **No rule** | **Left < Root < Right** |
| Searching | **Slow** (O(n)) | **Fast** (O(log n)) |
| Usage | General tree structure, heaps | Searching, sorting, fast lookup |
| Order of Nodes | Can be random | Always ordered |

### 🌲 **10. Segment Tree (Advanced)**

> A **Segment Tree** is a tree that stores information about **ranges (segments)** of an array so range queries and updates are fast.
> 

Used for:

✔ Range queries

✔ Interval sums

✔ Competitive programming

---

## 🌟 **11. Easy Summary**

| Topic | Meaning |
| --- | --- |
| Tree | Hierarchical structure |
| Binary Tree | Each node max 2 children |
| BST | Left < Root < Right |
| DFS | Inorder, Preorder, Postorder |
| BFS | Level-by-level |
| AVL / Red-Black | Balanced BST |
| Heap | Priority queue |
| Trie | Prefix search |
| Segment Tree | Range queries |
