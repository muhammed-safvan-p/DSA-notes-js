# 🧠 Sorting Algorithms — Quick Summary

| Algorithm          | Easy?       | Memory     | Best Time      | Average Time   | Worst Time            | Applications (Where used?)                                                                                                                |
| ------------------ | ----------- | ---------- | -------------- | -------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Bubble Sort**    | ✔ Very easy | ✔ O(1)     | **O(n)**       | **O(n²)**      | **O(n²)**             | ➤ Teaching sorting basics<br>➤ Detecting if array is already sorted<br>➤ Very small datasets                                              |
| **Selection Sort** | ✔ Easy      | ✔ O(1)     | **O(n²)**      | **O(n²)**      | **O(n²)**             | ➤ Embedded systems<br>➤ When swaps must be minimized<br>➤ Small datasets where memory is extremely limited                                |
| **Insertion Sort** | ✔ Easy      | ✔ O(1)     | **O(n)**       | **O(n²)**      | **O(n²)**             | ➤ Nearly sorted data<br>➤ Small datasets<br>➤ Online sorting (input coming one-by-one)<br>➤ Used inside TimSort (Python/Java)             |
| **Merge Sort**     | ❌ Medium    | ❌ O(n)     | **O(n log n)** | **O(n log n)** | **O(n log n)**        | ➤ Large data sorting<br>➤ External sorting (files bigger than RAM)<br>➤ Database engines<br>➤ Stable sorting needed                       |
| **Quick Sort**     | ❌ Medium    | ✔ O(log n) | **O(n log n)** | **O(n log n)** | **O(n²)** (bad pivot) | ➤ Most real-world sorting<br>➤ Used in programming languages (V8 uses variant)<br>➤ Large datasets in memory<br>➤ Competitive programming |
| **Heap Sort**      | ❌ Medium    | ✔ O(1)     | **O(n log n)** | **O(n log n)** | **O(n log n)**        | ➤ Guaranteed worst-case performance<br>➤ Systems programming<br>➤ Priority queues<br>➤ Real-time & embedded systems                       |

---

## 🧠 JavaScript `Array.sort()` — Which Algorithm?

JavaScript does **not use a single fixed algorithm**. It depends on the engine.

### 🟢 V8 Engine (Chrome, Node.js, Opera)

Uses **Timsort (Hybrid Algorithm)**
👉 Combination of **Merge Sort + Insertion Sort**

### ✔ Why Timsort?

* Very fast for real-world data
* Optimized for partially sorted arrays
* Stable sorting (maintains order of equal elements)
* Guaranteed **O(n log n)** performance

### 🧠 Also Used In:

* Python
* Java
* Android

---
