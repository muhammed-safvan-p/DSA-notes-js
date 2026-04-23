/*
===========================================
Question:
Implement Merge Sort.
===========================================

Approach:
- Divide and Conquer
- Split array into halves
- Recursively sort each half
- Merge sorted halves

Advantages:
- Efficient for large datasets
- Stable sorting algorithm
- Time complexity always O(n log n)

Disadvantages:
- Requires extra space (not in-place)
- Slightly complex compared to simple sorts

===========================================
Time & Space Complexity
===========================================

| Case            | Complexity |
|-----------------|-----------|
| Best Case       | O(n log n)|
| Average Case    | O(n log n)|
| Worst Case      | O(n log n)|
| Space Complexity| O(n)      |
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let l = 0, r = 0;
  let result = [];

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  return [...result, ...left.slice(l), ...right.slice(r)];
}

// Example
let array = [5, 2, 9, 1, 5, 6];
console.log(mergeSort(array));