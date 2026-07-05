/**
 * ======================================================
 * CIRCULAR SINGLY LINKED LIST – JavaScript
 * ======================================================
 *
 * Operations Included:
 * 1. Insert at End
 * 2. Print List
 *
 * ======================================================
 *
 * Time Complexity Summary:
 * - Insert at End    → O(n)
 * - Print List       → O(n)
 *
 * Space Complexity:
 * - O(1)
 *
 * ======================================================
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    /* ======================================================
       INSERT AT END
    ====================================================== */
    insert(value) {
        const newNode = new Node(value);

        // Empty List
        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let current = this.head;

        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = newNode;
        newNode.next = this.head;
    }

    /* ======================================================
       PRINT CIRCULAR LINKED LIST
    ====================================================== */
    print() {
        if (this.head === null) {
            console.log("List is Empty");
            return;
        }

        let current = this.head;
        let result = "";

        do {
            result += current.value + " -> ";
            current = current.next;
        } while (current !== this.head);

        console.log(result + "(Head)");
    }
}

/* =======================
   Example Usage
======================= */

const list = new CircularLinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);

list.print();   // 1 -> 2 -> 3 -> 4 -> (Head)

console.log(list);