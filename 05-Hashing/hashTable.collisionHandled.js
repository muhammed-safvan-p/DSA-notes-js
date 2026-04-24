/*
===========================================
Question:
Implement Hash Table.
===========================================

Hash Table:
- Stores key-value pairs
- Uses hash function to map keys to index

Features:
- Fast lookup, insert, delete
- Handles collisions using chaining (array of pairs)

Time Complexity:
- Average → O(1)
- Worst → O(n) (collision case)
*/

class HashTable {
  constructor(size = 5) {
    this.table = new Array(size);
  }

  hash(key) {
    let sum = 0;
    for (let ch of key) {
      sum += ch.charCodeAt(0);
    }
    return sum % this.table.length;
  }

  insert(key, value) {
    let index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    // update if key exists
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);

    if (!this.table[index]) return undefined;

    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
  }

  remove(key) {
    let index = this.hash(key);

    if (!this.table[index]) return;

    this.table[index] = this.table[index].filter(
      ([k]) => k !== key
    );
  }

  displayHashTable() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(i, this.table[i]);
    }
  }
}

// Example
const table = new HashTable();

table.insert("name", "safvan");
table.insert("age", 1);
table.insert("s", 2);
table.insert("ss", 3);
table.insert("ses", 4);
table.insert("sws", 5);

table.remove("s");

table.displayHashTable();