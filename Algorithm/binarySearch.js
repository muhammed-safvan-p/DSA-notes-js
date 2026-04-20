/*
===========================================
Concept:
Binary Search
===========================================

Binary Search is an efficient searching algorithm
that works on sorted arrays.

Key Points:
- Works only on sorted data
- Compare target with middle element
- If target is smaller → search left half
- If target is larger → search right half
- Repeat until found or range ends

Time Complexity:
- O(log n)
*/

/*
===========================================
Question:
Implement Binary Search (Iterative)
===========================================
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return true;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

// Example
let arr = [2, 5, 8, 12, 16, 23, 38, 91];
// console.log(binarySearch(arr, 9));



/*
===========================================
Question:
Implement Binary Search (Recursive)
===========================================
*/

function binarySearchRecursive(arr, target) {
  function search(left = 0, right = arr.length - 1) {
    if (left > right) return false;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return true;

    if (arr[mid] > target) {
      return search(left, mid - 1);
    } else {
      return search(mid + 1, right);
    }
  }

  return search();
}

// Example
// console.log(binarySearchRecursive(arr, 8));