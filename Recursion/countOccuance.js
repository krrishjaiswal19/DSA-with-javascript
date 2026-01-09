// “Array ke har element ko check karo, jab bhi target mile, count badha do.”

function countOcc(arr, target) { 
    let count = 0; 
    for (let num of arr) { 
        if (num === target) 
            count++; 
        
    } return count; 
} 
console.log(countOcc([1,2,2,3,2], 2));