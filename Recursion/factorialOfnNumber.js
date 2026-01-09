// factorial : n! = n*(n-1)*(n-2)*.....*1

function factorialOfNumber(n){
    if(n===0 || n===1){
        return 1;   // Base Case
    }
    return n * factorialOfNumber(n-1);  // Recursive Base
    }

console.log(factorialOfNumber(5));