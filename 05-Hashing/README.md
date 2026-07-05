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

# 1️⃣ Separate Chaining (Most Common)

Separate chaining handles **hash collisions** by storing multiple key-value pairs at the same index using a **linked list**, **array**, or another collection.

Instead of overwriting an existing value, all colliding entries are stored together.

### Example

```text
Index 3 → [ ("John", 100) → ("Adam", 200) ]
```

Both `"John"` and `"Adam"` produce the same hash index, so they are stored in the same bucket.

## Advantages

- ✅ Easy to implement
- ✅ Table doesn't fill up immediately
- ✅ Handles multiple collisions without overwriting data

## Disadvantages

- ❌ Uses extra memory for storing buckets
- ❌ Performance slows down if too many values collide in the same bucket

## JavaScript Example

```javascript
class HashTable {
  constructor(size = 10) {
    // Create an array of empty buckets
    this.table = Array.from({ length: size }, () => []);
  }

  hash(key) {
    let hash = 0;

    for (let char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.table.length;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);

    for (const [storedKey, storedValue] of this.table[index]) {
      if (storedKey === key) {
        return storedValue;
      }
    }

    return null;
  }
}
```

## Example Usage

```javascript
const ht = new HashTable();

ht.insert("John", 100);
ht.insert("Adam", 200);

console.log(ht.get("John")); // 100
console.log(ht.get("Adam")); // 200
```

## Time Complexity

| Operation | Average | Worst |
|-----------|---------|--------|
| Insert | O(1) | O(n) |
| Search | O(1) | O(n) |
| Delete | O(1) | O(n) |

> **Note:** Worst-case time complexity occurs when many keys collide into the same bucket.

# 2️⃣ Open Addressing (No Linked List; Store in the Next Empty Slot)

Open Addressing resolves **hash collisions** by finding another empty slot within the hash table instead of storing multiple values at the same index.

There are several techniques for finding the next available position.

---

# 1. Linear Probing

Linear Probing checks the next available slot **sequentially** until it finds an empty position.

### Formula

```text
index = (hash + i) % tableSize
```

where `i = 0, 1, 2, 3...`

### Example

If index **5** is occupied:

```text
5 ❌ → 6 → 7 → 8 → ...
```

### JavaScript Example

```javascript
insert(key, value) {
  let index = this.hash(key);

  while (this.table[index] !== undefined) {
    index = (index + 1) % this.table.length;
  }

  this.table[index] = [key, value];
}

get(key) {
  let index = this.hash(key);
  const startIndex = index;

  while (this.table[index] !== undefined) {
    if (this.table[index][0] === key) {
      return this.table[index][1];
    }

    index = (index + 1) % this.table.length;

    // Stop if we've searched the entire table
    if (index === startIndex) {
      break;
    }
  }

  return null;
}
```

### Advantages

- ✅ Very simple to implement
- ✅ Good cache performance
- ✅ No extra memory needed

### Disadvantages

- ❌ Suffers from **Primary Clustering**

### What is Primary Clustering?

Primary Clustering is the formation of **long consecutive groups of occupied slots**.

As these clusters grow, insertion and search become slower because many consecutive slots must be checked.

---

# 2. Quadratic Probing

Quadratic Probing checks positions using **quadratic intervals** instead of consecutive ones.

The probe sequence becomes:

```text
+1² → +2² → +3² → ...
```

### Formula

```text
index = (hash + i²) % tableSize
```

where `i = 0, 1, 2, 3...`

### Example

If index **5** is occupied:

```text
5
↓
6   (+1²)
↓
9   (+2²)
↓
14  (+3²)
...
```

### Advantages

- ✅ Reduces Primary Clustering
- ✅ Better key distribution than Linear Probing

### Disadvantages

- ❌ Can still suffer from **Secondary Clustering**
- ❌ Slightly more complex to implement
- ❌ May fail to find an empty slot if the table is too full

### What is Secondary Clustering?

Secondary Clustering occurs when **different keys that produce the same initial hash value follow the same quadratic probing sequence**, creating smaller clusters.

---

# 3. Double Hashing

Double Hashing uses **two hash functions**.

- The first hash function finds the initial index.
- The second hash function determines the probe step size.

Because different keys usually get different step sizes, collisions are greatly reduced.

### Formula

```text
index = (hash1(key) + i × hash2(key)) % tableSize
```

where `i = 0, 1, 2, 3...`

### Advantages

- ✅ Minimizes Primary Clustering
- ✅ Minimizes Secondary Clustering
- ✅ Provides excellent key distribution
- ✅ Often the best-performing open addressing technique

### Disadvantages

- ❌ More difficult to implement
- ❌ Requires two good hash functions

---

# Pros and Cons Summary

| Method | Pros | Cons |
|---------|------|------|
| **Separate Chaining** | Easy to implement, flexible | Uses extra memory |
| **Linear Probing** | Simple, cache-friendly | Primary clustering |
| **Quadratic Probing** | Less clustering than Linear Probing | Secondary clustering, more complex |
| **Double Hashing** | Best key distribution, minimizes clustering | Harder to implement |

---

# Which Collision Handling Technique is Best?

There is no single best technique—it depends on the use case.

- **Separate Chaining** is the simplest and one of the most commonly used methods.
- **Linear Probing** is easy to implement and cache-friendly but suffers from clustering.
- **Quadratic Probing** reduces primary clustering but can still experience secondary clustering.
- **Double Hashing** generally provides the best distribution among open addressing techniques by minimizing both primary and secondary clustering, though it is more complex to implement.

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

# Load Factor

## 📖 Simple Definition

**Load Factor** is the ratio of the number of stored elements to the total number of slots (buckets) in a hash table.

## Formula

\[
\text{Load Factor} = \frac{\text{Number of Elements}}{\text{Number of Buckets (Slots)}}
\]

Or simply:

```text
Load Factor = Number of Elements / Number of Buckets
```

---

# Why is Load Factor Important?

As the **load factor increases**:

- ❌ More collisions
- ❌ Slower search
- ❌ Slower insertion
- ❌ Slower deletion

As the **load factor decreases**:

- ✅ Fewer collisions
- ✅ Better performance
- ✅ Faster operations

---

# What Happens When the Load Factor Becomes Too High?

Most hash table implementations **resize (rehash)** the table.

### Example

**Before resizing:**

```text
Buckets  = 8
Elements = 7

Load Factor = 7 / 8 = 0.875
```

This load factor is high.

The hash table grows:

```text
Buckets = 16
```

Now:

```text
Load Factor = 7 / 16 = 0.4375
```

Then all existing elements are **rehashed** into the new table.

This process is called **rehashing** or **resizing**.

---

# Common Threshold

Many programming languages resize the hash table when the load factor exceeds **0.75**.

```text
Load Factor > 0.75
        ↓
Resize Hash Table
```

> **Note:** The exact threshold depends on the implementation. For example, Java's `HashMap` uses a default load factor of **0.75**.

---

# 📌 Key Points

- **Formula:**

  ```text
  Load Factor = Number of Elements / Number of Buckets
  ```

- Indicates how full the hash table is.
- Higher load factor → More collisions.
- Lower load factor → Better performance.
- High load factor may trigger **rehashing**.

---

# 🎯 One-Line Interview Answer

> **Load Factor is the ratio of stored elements to available buckets in a hash table. It indicates how full the table is, and a higher load factor generally increases collisions and reduces performance.**
