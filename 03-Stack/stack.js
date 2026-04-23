/*
===========================================
Implement Stack using class.
===========================================

Stack:
- Follows LIFO (Last In First Out)

Operations:
- push → add element
- pop → remove top element
- peek → view top element
- isEmpty → check empty
- size → number of elements

Time Complexity:
- All operations → O(1)
*/

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

// Example
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print();           // [10, 20, 30]
console.log(stack.pop());  // 30
console.log(stack.peek()); // 20