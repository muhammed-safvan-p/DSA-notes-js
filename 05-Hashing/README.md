# 🧩**Hashing & Hash Table**

---

**Hashing** is a technique to store and retrieve data **very fast** using a **key**.

Example:

```
Key → "name"
Value → "Safwan"
```

Hashing converts the **key** into an index using a **hash function**.

---

### 🧩 2. What is a Hash Function?

A **hash function** takes a key and converts it to an **index**.

Simple example:

```
index = key % table_size
```

Example:

```
key = 15, table size = 10
15 % 10 = 5 → store in index 5
```

A good hash function must:

✔ Always give same output for same input

✔ Be fast O(1)

✔ Spread data evenly

✔ Reduce collisions

---

### 🧩 3. What is a Hash Table?

A **Hash Table** is a data structure that stores values using a **key → index mapping** created by a hash function.

Example storage:

```
Index: 0 1 2 3 4 5 6 7 8 9
Value: - - 8 - - 15 - - - -
```

---

### 🧠 How Hashing Works (Simple Steps)

1. Insert key → hash function generates index
2. Value stored at that index
3. Search → hash key, go to index → O(1)
4. Delete → hash key, go to index, remove value

---

- 🧑‍💻 JavaScript Hash Table (Simple Implementation)
    
    ```jsx
    class HashTable {
      constructor(size = 10) {
        this.table = new Array(size);
      }
    
      hash(key) {
        let sum = 0;
        for (let char of key) {
          sum += char.charCodeAt(0);
        }
        return sum % this.table.length;
      }
    
      insert(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
      }
    
      get(key) {
        const index = this.hash(key);
        return this.table[index];
      }
    }
    ```
    

---

### 🧨 4. The BIG Problem: COLLISIONS

A **collision** happens when two different keys produce the **same index**.

Example:

```
“John” → index 3
“Adam” → index 3  (collision!)
```

Since both map to index 3 → we need a solution.

---

### 🔥 5. Collision Handling Techniques

✔ 1️⃣ Separate Chaining (MOST COMMON)

Each index stores a **linked list** of all collided keys.

```
Index 3 → [ (“John”,100) → (“Adam”, 200) ]
```

This avoids overwriting.

- JS Example:
    
    ```jsx
    class HashTable {
      constructor(size = 10) {
        this.table = Array.from({ length: size }, () => []);
      }
    
      hash(key) {
        let hash = 0;
        for (let char of key) hash += char.charCodeAt(0);
        return hash % this.table.length;
      }
    
      insert(key, value) {
        let index = this.hash(key);
        this.table[index].push([key, value]);
      }
    
      get(key) {
        let index = this.hash(key);
        for (let pair of this.table[index]) {
          if (pair[0] === key) return pair[1];
        }
        return null;
      }
    }
    ```
    

---

✔ 2️⃣ Open Addressing     (No linked list; store next empty slot)

Types:

- **Linear Probing** — index + 1 + 1 + 1
- **Quadratic Probing** — index + 1², +2², …
- **Double Hashing** — two hash functions

---

🔹 Linear Probing Example

If index 5 is full → try:

```
6 → 7 → 8 ...
```

JS Example:

```jsx
insert(key, value) {
  let index = this.hash(key);
  while (this.table[index] !== undefined) {
    index = (index + 1) % this.table.length;
  }
  this.table[index] = [key, value];
}
```

---

✔ Pros/Cons Summary

| Method | Pros | Cons |
| --- | --- | --- |
| **Chaining** | Easy, flexible | Uses extra memory |
| **Linear Probing** | Cache-friendly | Clustering happens |
| **Quadratic** | Less clustering | Complex, can still fail |
| **Double Hashing** | Best distribution | Harder to implement |

---

### 🔥 6. Load Factor (Important)

```
Load factor = number_of_elements / table_size
```

High load factor → more collisions

Low load factor → faster performance

✔ Ideal load factor: **0.6 – 0.75**

---

### 🔥 7. Rehashing

When load factor exceeds threshold:

✔ Create a bigger table

✔ Reinsert all values

✔ Reduces collisions

---

### ⭐ 8. Applications of Hashing

Hashing is used EVERYWHERE:

✔ 1. Databases (indexing)

✔ 2. Caches (LRU Cache)

✔ 3. Password hashing

✔ 4. Compilers (symbol table)

✔ 5. Search engines

✔ 6. Sets and Maps

✔ 7. Blockchain

✔ 8. DNS lookup

✔ 9. Memory addressing

✔ 10. Counting problems (frequency)

---

### 🔥 9. Hash Map vs Hash Set

| Feature | Hash Map | Hash Set |
| --- | --- | --- |
| Stores | key → value | only keys |
| Example | (“name”, “Safwan”) | {1,4,7} |
| Use case | data storage | uniqueness |

### 🔥 10. Cryptographic Hash Functions (Advanced)

Different from normal hash functions.

Features:

- One-way
- Collision resistant
- Deterministic
- Fixed output size

Examples:

- SHA-256
- MD5
- SHA-1
- BLAKE2

Used in:

✔ Passwords

✔ Security

✔ Blockchains