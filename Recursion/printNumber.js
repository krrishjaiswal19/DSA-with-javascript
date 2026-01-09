// Recursion : Function apne app ko hi call karta hai, jab tk base coindition meet na ho jaye

function printNumber(n){
    if(n===0){
        return;   // Base Condition
    }
    printNumber(n-1);  // Recursive Call
    console.log(n);
}
printNumber(5);