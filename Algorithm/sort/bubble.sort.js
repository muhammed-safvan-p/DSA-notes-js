/*
===========================================
Question:
Implement Bubble Sort.
===========================================

Applications:
- Simple sorting for small datasets
- Educational purpose (understanding sorting)
- Detect if array is already sorted
- Used in systems where simplicity matters more than performance

===========================================
Time & Space Complexity
===========================================

| Case            | Complexity |
|-----------------|-----------|
| Best Case       | O(n)      |
| Average Case    | O(n²)     |
| Worst Case      | O(n²)     |
| Space Complexity| O(1)      |
*/

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }

  } while (swapped);

  return arr;
}

// Example
let array = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(array));