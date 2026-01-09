// Ye function recursion ka use karke har element ko uske next element se compare karta hai;
//  jaise hi order break hota hai false return karta hai,
//  warna last index par pahunch kar true return karta hai.*/

function isSorted(arr, i) {
  if (i === arr.length - 1) return true;
  if (arr[i] > arr[i + 1]) return false;
  return isSorted(arr, i + 1);
}

console.log(isSorted([1,2,3,4], 0)); 
