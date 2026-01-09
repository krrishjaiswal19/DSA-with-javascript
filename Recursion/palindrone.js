

function isPalindrome(str, start, end) {
  if (start >= end) return true;   // base case

  if (str[start] !== str[end]) return false;

  return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("madam", 0, 4));
