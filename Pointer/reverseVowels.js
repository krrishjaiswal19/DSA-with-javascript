/* 
Reverse Vowels in string
Logic-
Left pointer start se
Right pointer end se
Dono vowels mile → swap
Nahi mile → move pointer */

function reverseVowels(s) {
  let arr = s.split('');                                // string ko array mai convert kr rha hai REASON: JavaScript me string immutable hoti hai Swap karne ke liye array chahiye


  let vowels = "aeiouAEIOU";                            // defining the vowels
  let left = 0, right = arr.length - 1;                 // intializing of two pointer

  while (left < right) {                                // jab tk pointer cross nahi krte
    if (!vowels.includes(arr[left])) left++;            // vowels check and left++
    else if (!vowels.includes(arr[right])) right--;     // vowels check and right++
    else {
      [arr[left], arr[right]] = [arr[right], arr[left]]; // swap when both are vowels
      left++;                                            // go ahead
      right--;                                           // go ahead
    }
  }
  return arr.join('');                                   // full array join
}

reverseVowels("hello");                                  // holle