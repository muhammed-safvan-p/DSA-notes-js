/*
===========================================
Implement Stack using Linked List.
===========================================

Stack:
- Follows LIFO (Last In First Out)
- Uses linked list instead of array

Why Linked List instead of Array?
- No fixed size (dynamic memory)
- No shifting or resizing needed
- Efficient insert/delete at top
- Avoids overflow issues in large data

Advantages:
- Better memory flexibility
- Consistent O(1) operations
- Suitable for large or unknown data size

Operations:
- push → add element at top
- pop → remove top element
- peek → view top element
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

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) return null;

    const removed = this.top;
    this.top = this.top.next;
    this.length--;

    return removed.value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
}

// Example
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop());  // 30
console.log(stack.size()); // 2