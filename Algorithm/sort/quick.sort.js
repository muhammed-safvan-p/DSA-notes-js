/*
===========================================
Question:
Implement Quick Sort.
===========================================

Approach:
- Divide and Conquer
- Choose a pivot element
- Partition array into:
  - Left (elements < pivot)
  - Right (elements >= pivot)
- Recursively sort left and right

Advantages:
- Very fast in practice
- In-place version possible
- Works well for large datasets

Disadvantages:
- Worst case O(n²) (bad pivot choice)
- Not stable
- Recursive overhead

===========================================
Time & Space Complexity
===========================================

| Case            | Complexity |
|-----------------|-----------|
| Best Case       | O(n log n)|
| Average Case    | O(n log n)|
| Worst Case      | O(n²)     |
| Space Complexity| O(log n)  |
*/

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example
let array = [5, 2, 9, 1, 5, 6];
console.log(quickSort(array));