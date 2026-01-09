// “Har step par last element ko baaki array ke maximum se compare karte jao, jab tak sirf ek element na bach jaye.”

function findMax(arr, n) {
  if (n === 1) return arr[0];   // base case
  return Math.max(arr[n - 1], findMax(arr, n - 1)); // recursive case
}

console.log(findMax([2, 5, 1, 9, 3], 5));
