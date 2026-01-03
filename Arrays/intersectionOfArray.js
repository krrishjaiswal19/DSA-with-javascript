/*
Intersection of Array
LOGIC: Pehle array a ke elements ko Set me store karte hain (fast lookup).
Phir array b traverse karke jo element Set me mil jata hai, usko result me add kar dete hain.
*/


function intersection(a, b) {  //  two array input le rhe hai
    let set = new Set(a);      // array a ko set mai convert kr diya (set Duplicate remove krta hai or fast search deta hai)
    let result = [];           // empty array for storing common array
    for (let num of b) {       // traverse array b
        if (set.has(num)) {    // kya num, array a mai present hai
             result.push(num); // if yes then add in result
             set.delete(num);  // avoiding duplicate krne ke liye set se remove
            } 
        } 
        return result;         // final common element return
    }
