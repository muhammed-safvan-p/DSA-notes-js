# 🧩**Queue (FIFO)**

---

A **Queue** is a linear data structure that follows:

👉 **FIFO: First In, First Out**

Meaning:

- The **first** person to enter the line
- Is the **first** person to be served

### 🧠 **2. Queue Operations**

| Operation | Meaning | Time Complexity |
| --- | --- | --- |
| **enqueue(x)** | Add element at **end** | O(1) |
| **dequeue()** | Remove element from **front** | O(1) |
| **peek() / front()** | Check first element | O(1) |
| **isEmpty()** | Check if empty | O(1) |
| **size()** | Count elements | O(1) |

---

### 🧱 **3. Queue Structure (Diagram)**

```
Front → [10] [20] [30] [40] ← Rear
```

- New elements join at **rear** (right side)
- Elements leave from **front** (left side)

---

### 🖥 **4. Implementing Queue in JavaScript**

- ✔ Using Array (Simplest but not optimal)
    
    ```jsx
    class Queue {
      constructor() {
        this.items = [];
      }
    
      enqueue(element) {
        this.items.push(element);
      }
    
      dequeue() {
        return this.items.shift();
      }
    
      peek() {
        return this.items[0];
      }
    
      isEmpty() {
        return this.items.length === 0;
      }
    
      size() {
        return this.items.length;
      }
    }
    ```
    

❗ `shift()` is O(n) → not great for large data.

---

- ✔ Efficient Queue Using Linked List (Best Method)
    
    ```jsx
    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
    
    class QueueLL {
      constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
      }
    
      enqueue(value) {
        let newNode = new Node(value);
        if (!this.front) {
          this.front = this.rear = newNode;
        } else {
          this.rear.next = newNode;
          this.rear = newNode;
        }
        this.length++;
      }
    
      dequeue() {
        if (!this.front) return null;
        let removed = this.front;
        this.front = this.front.next;
        this.length--;
        return removed.value;
      }
    
      peek() {
        return this.front ? this.front.value : null;
      }
    
      isEmpty() {
        return this.length === 0;
      }
    }
    ```
    

### ✔ All operations are O(1)

---

### 🧩 **5. Queue Applications (Where Queues are Used?)**

✔ Computer Science Applications

- **CPU Scheduling**
- **Graph BFS (Breadth First Search)**
- **IO Buffers**
- **Print Queue**
- **Task scheduling**
- **Interrupt handling**
- **Message Queues** in microservices

✔ Real-World Applications

- Ticket lines
- Customer support queue
- Call center
- Restaurant waiting system

---

### 🧠 **6. Stack vs Queue**

| Feature | Stack (LIFO) | Queue (FIFO) |
| --- | --- | --- |
| Order | Last in, first out | First in, first out |
| End operations | Only on top | Front + Rear |
| Example | Undo, Recursion | Printer queue, BFS |
| Structure | Vertical | Horizontal |

---

### 🧩 **7. Queue Overflow & Underflow**

### ✔ Queue Underflow

Happens when you **dequeue** from an **empty** queue.

### ✔ Queue Overflow

Happens when queue is **full** and you try to enqueue.

(Only in fixed-size queues → array-based)

---

### 🧱 **8. Purpose of Front and Rear Pointers**

| Pointer | Role |
| --- | --- |
| **Front** | Points to first element (for dequeue) |
| **Rear** | Points to last element (for enqueue) |

Without rear pointer, enqueue would be slow.

---

### 🧩 **9. Types of Queues**

✔ 1️⃣ Simple Queue (Normal FIFO)

✔ 2️⃣ Circular Queue

Fixes array overflow issue by connecting last index back to first.

```
rear → wraps around → front
```

✔ 3️⃣ Priority Queue

Each item has priority.

Higher priority → served first.

✔ 4️⃣ Deque (Double-Ended Queue)

Insert/delete at **both ends**.

Used in sliding window problems.

✔ 5️⃣ Input-Restricted Queue

One end restricted for insertion.

✔ 6️⃣ Output-Restricted Queue

One end restricted for deletion.

---

### 🔥 **10. Circular Queue (Important)**

In normal array queue →

After many dequeues, the front moves forward → space wasted.

Circular queue solves it:

```
rear wraps → front
```

✔ Efficient

✔ No wasted space

✔ Used in OS and embedded systems

---

### 🧠 **11. Priority Queue (Important)**

Each element has priority:

Example:

```
(high priority) → doctor emergency queue
```

Lower number or higher number = priority (depends on design)

---

### 🧠 **12. Deque (Double Ended Queue)**

Operations:

- Insert front
- Insert rear
- Delete front
- Delete rear

Used in:

- Sliding window maximum
- Palindrome check
- LRU cache (Least Recently Used)

---

### 🔥 **13. Monotonic Queue (Advanced DSA)**

A queue where elements are stored in:

✔ Increasing order

or

✔ Decreasing order

Used for:

- Sliding window maximum
- Sliding window minimum
- Optimization problems

### 🧩 **1. Bounded Queue**

A **bounded queue** is a queue that has a **fixed maximum size**.

📌 Used when:

✔ Memory is limited

✔ You want to prevent overflow

✔ Real-time systems (CPU scheduling)

✔ Network buffers (fixed size packets)

---

### 🧩 **2. Circular Queue — Explanation + Diagram**

A **Circular Queue** connects the last position back to the first.

Normal queue waste space:

```
Front → [ ] [ ] [ ] [40] [50] ← Rear
(Empty spaces cannot be reused)
```

Circular queue:

```
    Rear
      ↓
[40] [50] [10] [20] [30]
         ↑
       Front
```

✔ Space-efficient

✔ No wasted indexes

✔ Great for bounded queues

---

- 🧑‍💻 **Circular Queue Implementation (JavaScript)**
    
    ```jsx
    class CircularQueue {
      constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
      }
    
      enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
          console.log("Queue Overflow");
          return;
        }
    
        if (this.front === -1) this.front = 0;
    
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
      }
    
      dequeue() {
        if (this.front === -1) {
          console.log("Queue Underflow");
          return null;
        }
    
        let value = this.queue[this.front];
    
        if (this.front === this.rear) {
          this.front = this.rear = -1; // queue becomes empty
        } else {
          this.front = (this.front + 1) % this.size;
        }
    
        return value;
      }
    
      print() {
        console.log(this.queue);
      }
    }
    
    ```
    

---

### 🧩 **3. Circular Queue With Maximum Length**

This simply means:

✔ The queue has a fixed size

✔ When it becomes full → **no more enqueues allowed**

It is basically the **same as above**, but commonly used in:

- Sliding window problems
- Rate limiters
- Fixed-length buffers
- LRU cache systems

You already implemented one above with fixed `size`.

---

### 🧩 **4. Convert Queue into Stack**

🎯 Idea:

Queue is FIFO     Stack is LIFO

To convert queue → stack:

Use two queues:

✔ Push Operation

1. Push element to `q2`
2. Move all elements from `q1` → `q2`
3. Swap q1 and q2

✔ Pop Operation

Pop from `q1`

---

- 🧑‍💻 JavaScript Implementation
    
    ```jsx
    class StackUsingQueues {
      constructor() {
        this.q1 = [];
        this.q2 = [];
      }
    
      push(x) {
        this.q2.push(x);
    
        while (this.q1.length) {
          this.q2.push(this.q1.shift());
        }
    
        [this.q1, this.q2] = [this.q2, this.q1];
      }
    
      pop() {
        return this.q1.shift();
      }
    
      top() {
        return this.q1[0];
      }
    
      isEmpty() {
        return this.q1.length === 0;
      }
    }
    ```
    

---

### 🧩 **5. Deque (Double-Ended Queue)**

A **Deque** is a queue where you can:

✔ Insert at **front**

✔ Insert at **rear**

✔ Delete at **front**

✔ Delete at **rear**

Basically:

**Both stack + queue power combined**

---

### 🔥 Deque Diagram

```
Front ↔ [10] [20] [30] ↔ Rear
```

---

- 🧑‍💻 **Deque Implementation in JavaScript**
    
    ```jsx
    class Deque {
      constructor() {
        this.items = [];
      }
    
      pushFront(x) {
        this.items.unshift(x);
      }
    
      pushRear(x) {
        this.items.push(x);
      }
    
      popFront() {
        return this.items.shift();
      }
    
      popRear() {
        return this.items.pop();
      }
    
      front() {
        return this.items[0];
      }
    
      rear() {
        return this.items[this.items.length - 1];
      }
    
      isEmpty() {
        return this.items.length === 0;
      }
    }
    ```
    

---

🧩 **6. Applications of Deque**

✔ Sliding Window Maximum

✔ Palindrome checker

✔ Implementing LRU Cache

✔ Task scheduling

✔ Playing cards (pick from front/back)

✔ Storing recent browser history

---

### ⭐ Final Summary (Easy to Remember)

| Topic | Simple Meaning |
| --- | --- |
| Bounded Queue | Queue with fixed size |
| Circular Queue | Queue that wraps around |
| Max Length Queue | Circular queue with fixed capacity |
| Queue → Stack | Use 2 queues |
| Stack → Queue | Use 2 stacks |
| Deque | Insert/delete both ends |
| Deque Use | Sliding window, palindromes, LRU cache |
| Circular Queue Use | OS scheduling, buffers |
| Queue by LL | Fast O(1) operations |