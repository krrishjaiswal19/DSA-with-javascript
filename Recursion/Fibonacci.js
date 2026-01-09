// Fibonacci Series: Every Digits is sum of last two digits 
// Ex : 0,1,1,2,3,5.....

function fibonacci(n) {
  if (n === 0) return 0;   // base case
  if (n === 1) return 1;   // base case

  return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive Case
}

console.log(fibonacci(6)); // 8
