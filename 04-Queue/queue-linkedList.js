/*
===========================================
Question:
Implement Queue using Linked List.
===========================================

Queue:
- Follows FIFO (First In First Out)
- Uses linked list for efficient operations

Why Linked List instead of Array?
- No shifting needed (unlike shift in array)
- Efficient enqueue & dequeue → O(1)
- Dynamic size (no resizing issues)

Operations:
- enqueue → add element at rear
- dequeue → remove element from front
- peek → view front element
- isEmpty → check empty
- size → number of elements

Time Complexity:
- All operations → O(1)
*/

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

    if (!this.front) this.rear = null;

    this.length--;
    return removed.value;
  }

  peek() {
    return this.front ? this.front.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

// Example
let queue = new QueueLL();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());   // 10
console.log(queue.dequeue()); // 10
console.log(queue.size());    // 2