// count digits in number


function countDigitNumber(n){
    if (n===0){
        return 0;  // Base Case
    }
    return 1 + countDigitNumber(Math.floor(n/10));
}
console.log(countDigitNumber(12345));
    