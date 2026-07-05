/*
===========================================
Question:
Find the Middle of a Linked List.
===========================================

Concept:
- Use two pointers:
  - slow moves one step
  - fast moves two steps
- When fast reaches the end,
  slow will be at the middle.

Time Complexity:
- O(n)

Space Complexity:
- O(1)
*/

class LinkedList {
  constructor() {
    this.head = null;
  }

  middleNode() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
}


/*
===========================================
Question:
Reverse a Linked List.
===========================================

Concept:
- Use three pointers:
  - prev
  - current
  - next
- Reverse each link one by one.
- Update head at the end.

Time Complexity:
- O(n)

Space Complexity:
- O(1)
*/

class LinkedList {
  constructor() {
    this.head = null;
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

/*
===========================================
Question:
Detect Cycle in a Linked List.
===========================================

Concept:
- Use two pointers:
  - slow moves one step
  - fast moves two steps
- If they meet, there is a cycle.
- If fast reaches the end,
  there is no cycle.

Time Complexity:
- O(n)

Space Complexity:
- O(1)
*/

class LinkedList {
  constructor() {
    this.head = null;
  }

  detectCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true;
      }
    }

    return false;
  }
}

/*
===========================================
Question:
Detect Cycle in a Linked List.
===========================================

Concept:
- Use two pointers:
  - slow moves one step
  - fast moves two steps
- If they meet, there is a cycle.
- If fast reaches the end,
  there is no cycle.

Time Complexity:
- O(n)

Space Complexity:
- O(1)
*/

function detectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}


/*
===========================================
Question:
Merge Two Sorted Linked Lists.
===========================================

Concept:
- Compare nodes of both lists.
- Add the smaller node to the new list.
- Move that list forward.
- When one list ends,
  attach the remaining nodes.

Time Complexity:
- O(n + m)

Space Complexity:
- O(1)
*/

function mergeTwoLists(list1, list2) {
  let dummy = new Node(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}