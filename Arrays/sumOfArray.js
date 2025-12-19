// Adding of all numbers of array is called sum of array

// Method-1 Normal for-loop
let arr = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);  // 100

// Method-2 for-of-loop
let sum2 = 0;

for (let num of arr) {
  sum += num;
}

console.log(sum2); // 100

// Method-3 reduce() method (Best and Modern way)
let sum3 = arr.reduce((total, value) => total + value, 0);

console.log(sum); // 100



