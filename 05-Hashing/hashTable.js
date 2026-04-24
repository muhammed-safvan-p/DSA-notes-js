/*
===========================================
Question:
Implement Hash Table (Simple - No Collision Handling).
===========================================

Hash Table:
- Stores key-value pairs
- Uses hash function to map keys to index
- No collision handling (overwrites if same index)

Time Complexity:
- Average → O(1)
*/

class HashTable {
  constructor(size = 10) {
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
    this.table[index] = value;
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    let index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      console.log(i, this.table[i]);
    }
  }
}

// Example
let table = new HashTable();

table.insert("name", "safvan");
table.insert("age", 21);

console.log(table.get("name")); // safvan

table.display();