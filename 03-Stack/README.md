# 🧩 **Stack ( LIFO )**

---

A **Stack** is a linear data structure that follows the **LIFO (Last-In, First-Out)** principle. This means the last element added to the stack is the first one to be removed. Think of a stack of pancakes or a browser's "undo" history.

👉 **LIFO: Last In, First Out**

Meaning:

- The **last item you put in** is the **first item you take out**.

---

### 🧠  **Stack Operations**

| Operation | Meaning | Time Complexity |
| --- | --- | --- |
| **push(x)** | Add element on top | O(1) |
| **pop()** | Remove top element | O(1) |
| **peek() / top()** | See top element | O(1) |
| **isEmpty()** | Check if empty | O(1) |
| **size()** | Number of elements | O(1) |
- 🖥  **Implementing Stack in JavaScript (Using Array)**
    
    ```jsx
    class Stack {
      constructor() {
        this.items = [];
      }
    
      push(element) {
        this.items.push(element);
      }
    
      pop() {
        return this.items.pop();
      }
    
      peek() {
        return this.items[this.items.length - 1];
      }
    
      isEmpty() {
        return this.items.length === 0;
      }
    
      size() {
        return this.items.length;
      }
    
      print() {
        console.log(this.items);
      }
    }
    
    let s = new Stack();
    s.push(10);
    s.push(20);
    s.push(30);
    s.print(); // [10, 20, 30]
    console.log(s.pop()); // 30
    console.log(s.peek()); // 20
    ```
    
- 🖥  **Implementing Stack in JavaScript (Using Linked List)**
    
    ```jsx
    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
    
    class StackLL {
      constructor() {
        this.top = null;
        this.length = 0;
      }
    
      push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.length++;
      }
    
      pop() {
        if (!this.top) return null;
        let removed = this.top;
        this.top = this.top.next;
        this.length--;
        return removed.value;
      }
    
      peek() {
        return this.top ? this.top.value : null;
      }
    
      isEmpty() {
        return this.top === null;
      }
    }
    ```
    

---

## ⚙️ **Stack Applications (Where used in real life?)**

Stacks are used **everywhere** in programming:

✔ **1. Undo/Redo (Text Editors, Photoshop, VS Code)**

Most recent action undone first.

✔ **2. Browser History**

Back button uses a stack.

✔ **3. Function Call Stack in JS**

JS runtime stores function calls in a stack.

✔ **4. Expression Evaluation**

Used in:

- Converting infix → postfix
- Evaluating postfix expressions

✔ **5. Balanced Parentheses Check**

`( { [ ] } )` → validated using stack.

✔ **6. Recursion uses stack**

Each recursive call is pushed into call stack.

✔ **7. DFS (Depth First Search) in Graphs**

Implemented using stack.

✔ **8. Backtracking Problems**

Maze solving, N-Queens → stack helps track positions.

---

## 🔥 **6. Stack Advantages & Limitations**

### ✔ Advantages

- Fast operations (O(1))
- Simple structure
- Best for LIFO problems

### ❌ Limitations

- Cannot access elements in middle
- Only top element is accessible
- Fixed size if implemented using array (in low-level languages)

### 🧩 **1. Stack vs Array — When to Use Each**

✔ Stack

A **restricted** data structure that follows **LIFO (Last In First Out)**.

You can only:

- push() → add on top
- pop() → remove from top
- peek() → access top
- isEmpty()

📌 **Use Stack when:**

- You only need **top element**
- You want to implement **Undo/Redo**
- You want to solve **balanced parentheses**
- You want **DFS**
- You need to **reverse** something
- You want recursion-like behavior

---

### ✔ Array

A **general-purpose** structure to store multiple elements at fixed index positions.

You can access any element using index → O(1).

📌 **Use Array when:**

- You need **random access** (arr[5])
- You need to store large collections
- You want to perform searching/sorting
- You need 1D/2D/3D structures
- You need contiguous memory storage

---

### ⭐ Simple Summary

| Feature | Stack | Array |
| --- | --- | --- |
| Access | Only top | Any index |
| Order | LIFO | No order restriction |
| Flexibility | Limited | Very flexible |
| Use Case | Undo, Back, Recursion | Data storage, searching, sorting |

### 🧩 **2. Stack Overflow vs Stack Underflow**

✔ **Stack Underflow**

Happens when:

👉 You **pop** from an **empty** stack.

Example:

```jsx
stack = []
stack.pop()  // underflow
```

💡 This means:

“You are trying to remove something that is not there.”

---

✔ **Stack Overflow**

Happens when:

👉 You **push** into a **full stack**.

In JavaScript arrays won't overflow,

but in low-level languages stack has fixed memory.

Real-life example:

- Deep recursion → stack frame overload → **StackOverflowError**

Example:

```jsx
function test() {
  test(); // infinite recursion → stack overflow
}
test();
```

---

### 🧩 **3. Purpose of Stack Pointer (SP)**

Stack Pointer = a special register in CPU that **points to the top of the stack**.

✔ Uses:

- Tracks where the next push/pop should happen
- Helps CPU manage memory
- Used in function calls (call stack)
- Used in passing parameters, returning values

Simple explanation:

**SP tells the CPU “where the top of the stack is right now.”**

---

### 🧩 **4. Types of Stacks**

✔ 1️⃣ Static Stack

- Implemented using arrays
- Size is fixed
- Fast but limited

✔ 2️⃣ Dynamic Stack

- Implemented using linked list
- Grows and shrinks with memory
- Flexible but slower

✔ 3️⃣ Two-Stack (in single array)

Two stacks implemented inside one array.

✔ 4️⃣ Application-based stacks

- Call stack
- Expression stack
- Memory stack
- Browser history stack

---

### 🧩 **5. Pros of Using Linked List for Stack**

| Feature | Array Stack | Linked List Stack |
| --- | --- | --- |
| Size | Fixed (in low-level) | Dynamic |
| Overflow | Possible | Not possible unless memory full |
| Insert/Delete | O(1) but may resize | O(1) always |
| Memory | Contiguous | Scattered |

✔ Summary:

Use **Linked List Stack** when:

- You want unlimited stack size
- Many push/pop operations
- Memory is fragmented

---

### 🧩 **6. Applications of Stack (Real-Life + DSA)**

Programming / Real-life:

✔ Undo/Redo in editors

✔ Browser back button

✔ History management

✔ Function call stack

✔ Expression evaluation

✔ Reversing strings

✔ Syntax parsing (compilers)

DSA Problems:

✔ Balanced parentheses

✔ Evaluate postfix/prefix expressions

✔ DFS on trees/graphs

✔ Backtracking → N-Queens, Sudoku

✔ Finding next greater/smaller element

✔ Converting infix → postfix

---

### 🧩 **7. Monotonic Stack**

A **Monotonic Stack** is a stack where elements are kept in either:

✔ **Monotonically Increasing Order**

or

✔ **Monotonically Decreasing Order**

This means:

- All elements go in sorted order
- If a new element breaks the order, you pop until order is restored.

---

🎯 Purpose

To solve high-level array problems in O(n) time:

- Next greater element
- Next smaller element
- Stock span problem
- Daily temperatures
- Largest rectangle in histogram
- Trapping rainwater

---

### 🧠 Example: Next Greater Element

Array: `[2, 1, 5, 3]`

Monotonic Decreasing Stack:

```
Stack: []

2 → push
1 → push
5 → pop until empty (5 > 1, 5 > 2)
3 → push
```

This makes solving the problem much faster.

## ⭐ Final Summary (Easy to Remember)

| Topic | Simple Explanation |
| --- | --- |
| Stack vs Array | Use stack for LIFO, array for data storage |
| Overflow | Push into full stack |
| Underflow | Pop from empty stack |
| Stack Pointer | Tracks top of stack in memory |
| Types of stacks | Static, Dynamic, Application-based |
| LL Stack Benefit | Dynamic size, no overflow |
| Monotonic Stack | Special stack for O(n) array problems |