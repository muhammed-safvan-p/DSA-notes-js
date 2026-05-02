/*
===========================================
Question:
Implement Heap Sort.
===========================================

Approach:
- Build a heap (Max Heap for ascending)
- Swap root with last element
- Reduce heap size
- Heapify again
- Repeat until sorted

Advantages:
- In-place sorting (no extra memory)
- Guaranteed O(n log n)
- No worst-case degradation

Disadvantages:
- Not stable
- Slower than Quick Sort in practice
- More complex than simple sorts

===========================================
Time & Space Complexity
===========================================

| Case            | Complexity |
|-----------------|-----------|
| Best Case       | O(n log n)|
| Average Case    | O(n log n)|
| Worst Case      | O(n log n)|
| Space Complexity| O(1)      |
*/

/*
===========================================
Heap Sort – Ascending (Max Heap)
===========================================
*/

function heapSortAscending(arr) {
  let n = arr.length;

  buildMaxHeap(arr, n);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyMax(arr, i, 0);
  }

  return arr;
}

function buildMaxHeap(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyMax(arr, n, i);
  }
}

function heapifyMax(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyMax(arr, n, largest);
  }
}

/*
===========================================
Heap Sort – Descending (Min Heap)
===========================================
*/

function heapSortDescending(arr) {
  let n = arr.length;

  buildMinHeap(arr, n);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyMin(arr, i, 0);
  }

  return arr;
}

function buildMinHeap(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyMin(arr, n, i);
  }
}

function heapifyMin(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapifyMin(arr, n, smallest);
  }
}

// Example
let array = [5, 3, 8, 4, 1];

console.log(heapSortAscending([...array]));
console.log(heapSortDescending([...array]));