/*
===========================================
Question:
Find the maximum in every window of size k.
===========================================
*/

function slidingWindowMax(arr, k) {
  let result = [];
  let window = [];

  for (let i = 0; i < arr.length; i++) {
    window.push(arr[i]);

    if (window.length > k) {
      window.shift();
    }

    if (window.length === k) {
      result.push(Math.max(...window));
    }
  }

  return result;
}

/*
===========================================
Approach:
Optimized using Deque (O(n))
===========================================
*/

function slidingWindowMaxOptimized(arr, k) {
  let result = [];
  let deque = [];

  for (let i = 0; i < arr.length; i++) {
    // remove out of window indices
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // remove smaller elements
    while (deque.length && arr[deque[deque.length - 1]] < arr[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }

  return result;
}

// Example
let arr = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(slidingWindowMax(arr, 3));
console.log(slidingWindowMaxOptimized(arr, 3));