/**
 * ======================================================
 * DOUBLY LINKED LIST – JavaScript
 * ======================================================
 *
 * Operations Included:
 * 1. Insert at Start
 * 2. Insert at End
 * 3. Insert After a Given Value
 * 4. Delete a Node
 * 5. Print Forward
 * 6. Print Backward
 *
 * ======================================================
 *
 * Time Complexity Summary:
 * - Insert at Start      → O(1)
 * - Insert at End        → O(n)
 * - Insert After Value   → O(n)
 * - Delete               → O(n)
 * - Print Forward        → O(n)
 * - Print Backward       → O(n)
 *
 * Space Complexity:
 * - O(1)
 *
 * ======================================================
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    /* ======================================================
       INSERT AT START
    ====================================================== */
    insertAtStart(data) {
        const newNode = new Node(data);

        if (this.head !== null) {
            newNode.next = this.head;
            this.head.prev = newNode;
        }

        this.head = newNode;
    }

    /* ======================================================
       INSERT AT END
    ====================================================== */
    insertAtEnd(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;
    }

    /* ======================================================
       INSERT AFTER A GIVEN VALUE
    ====================================================== */
    insertAfterValue(value, data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === value) {
                const newNode = new Node(data);

                newNode.next = current.next;
                newNode.prev = current;

                if (current.next !== null) {
                    current.next.prev = newNode;
                }

                current.next = newNode;
                return;
            }

            current = current.next;
        }

        console.log("Value not found");
    }

    /* ======================================================
       DELETE A NODE
    ====================================================== */
    delete(data) {
        if (this.head === null) return;

        // Delete head
        if (this.head.data === data) {
            this.head = this.head.next;

            if (this.head !== null) {
                this.head.prev = null;
            }

            return;
        }

        let current = this.head;

        while (current !== null) {
            if (current.data === data) {

                if (current.prev !== null) {
                    current.prev.next = current.next;
                }

                if (current.next !== null) {
                    current.next.prev = current.prev;
                }

                return;
            }

            current = current.next;
        }
    }

    /* ======================================================
       PRINT FORWARD
    ====================================================== */
    printForward() {
        let current = this.head;
        let result = "";

        while (current !== null) {
            result += current.data + " <-> ";
            current = current.next;
        }

        console.log(result + "null");
    }

    /* ======================================================
       PRINT BACKWARD
    ====================================================== */
    printBackward() {
        if (this.head === null) {
            console.log("null");
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        let result = "";

        while (current !== null) {
            result += current.data + " <-> ";
            current = current.prev;
        }

        console.log(result + "null");
    }
}

/* =======================
   Example Usage
======================= */

const list = new DoublyLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.insertAtStart(5);

list.insertAfterValue(20, 25);

list.printForward();
// 5 <-> 10 <-> 20 <-> 25 <-> 30 <-> null

list.printBackward();
// 30 <-> 25 <-> 20 <-> 10 <-> 5 <-> null

list.delete(20);

list.printForward();
// 5 <-> 10 <-> 25 <-> 30 <-> null

list.printBackward();
// 30 <-> 25 <-> 10 <-> 5 <-> null