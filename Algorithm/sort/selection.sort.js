/*
===========================================
Question:
Implement Selection Sort.
===========================================

Applications:
- Simple sorting for small datasets
- Useful when memory writes are costly
- Educational purpose (understanding selection logic)
- Works well when swaps need to be minimized

===========================================
Time & Space Complexity
===========================================

| Case            | Complexity |
|-----------------|-----------|
| Best Case       | O(n²)     |(still compares everything)
| Average Case    | O(n²)     |
| Worst Case      | O(n²)     |
| Space Complexity| O(1)      |
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example
let array = [5, 2, 9, 1, 5, 6];
console.log(selectionSort(array));