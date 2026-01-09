// Reverse a String using Recurssion
/*
Logic (Simple) <br>
Pehla character hatao <br>
Baaki string reverse karo <br>
End mein pehla character add karo <br>
*/

function reverseString(str) {
  if (str.length === 0) {
    return ""; // base case
  }
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // olleh
