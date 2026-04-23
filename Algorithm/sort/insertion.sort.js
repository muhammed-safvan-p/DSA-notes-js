/*
===========================================
Question:
Implement Insertion Sort.
===========================================

Applications:
- Efficient for small or nearly sorted datasets
- Used in hybrid sorting algorithms (like TimSort)
- Good for online sorting (data comes step by step)
- Simple and stable sorting algorithm

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

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example
let array = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(array));