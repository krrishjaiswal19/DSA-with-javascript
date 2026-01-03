/*
Pair sum problem
LOGIC: left = start, right = end , SUM: edual -> found, small -> left++, big -> right--
Condition: two pointer always use in sorted array 
 */



function pairSum(arr, target) {       // array , required sum
  let left = 0;                       // start from staring of array 
  let right = arr.length - 1;         // start from end of array

  while (left < right) {              // jab tk both pointer not cross each other tab tk loop chalega
    let sum = arr[left] + arr[right]; // sum of left and right pointer

    if (sum === target) return true;  // aisa pair mil gya jiska sum target ho to retuen true
    else if (sum < target) left++;   // sum kam hai hai to left badhao
    else right--;                    // sum jyada hai right badhao
  }
  return false;                      // if loop finish and dont get the pair then return false
}

pairSum([1, 2, 3, 4, 6], 6);         // true