/*
===========================================
Question:
Implement Queue using array.
===========================================

Queue:
- Follows FIFO (First In First Out)

Operations:
- enqueue → add element to rear
- dequeue → remove element from front
- peek → view front element
- isEmpty → check empty
- size → number of elements

Time Complexity:
- enqueue → O(1)
- dequeue → O(n) (due to shift)
*/

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

// Example
let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());   // 10
console.log(queue.dequeue()); // 10
console.log(queue.size());    // 2