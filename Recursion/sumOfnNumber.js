// Sum of N number = n + sum of (n-1) 

function sumOfNumber(n){
    if(n===0){
        return 0;   // Base Case
    }  
    return n + sumOfNumber(n-1);  // Recursive Case
}
console.log(sumOfNumber(5));