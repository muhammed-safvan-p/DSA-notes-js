/*
===========================================
Concept:
Recursion
===========================================

Recursion is a technique where a function calls itself
to solve a problem.
its a process of solving a problem by dividing into a smaller parts

Key Points:
- Base Case → stops the function
- Recursive Case → calls function with smaller input

Pattern:
function fn(input) {
  if (base case) return result;
  return fn(smaller input);
}
*/


/*
===========================================
Question:
Reverse a string using recursion.
===========================================
*/

function reverseString(string, index, result = "") {
  if (index < 0) return result;

  result += string[index];
  return reverseString(string, index - 1, result);
}

// Example
let word = "safvan";
// console.log(reverseString(word, word.length - 1));



/*
===========================================
Question:
Find the sum of first n natural numbers using recursion.
===========================================
*/

function sum(n, total = 0) {
  if (n < 1) return total;

  total += n;
  return sum(n - 1, total);
}

// Example
// console.log(sum(10));

function sum2(n) {
  if (n === 0) return 0;

  return n + sum2(n - 1);
}

// Example
// console.log(sum2(10));


/*
===========================================
Question:
Find the factorial of a number using recursion.
===========================================

Factorial:
- Factorial of n (n!) is the product of all positive integers from 1 to n
- Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
*/

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

// Example
console.log(factorial(5));