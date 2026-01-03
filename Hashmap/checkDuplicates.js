/* 
Check Duplicates
LOGIC : Ek object (map) banaya jisme hum already-seen elements store karte hain.
        Array ko traverse karte hain:
        Agar current number pehle se map me hai → duplicate mil gaya → true
        Warna us number ko map me mark kar do (true)
        Loop khatam ho jaye aur duplicate na mile → false
*/

function hasDuplicate(arr) {   // Ye function ek array leta hai
  let map = {};                /* Empty object banaya
                                  Ye yaad rakhega ki kaunsa element pehle aa chuka hai */
  for (let num of arr) {       /* Array ke har element ko ek-ek karke uthate hain
                                  num = current element */
    if (map[num]) return true; /* Agar map me already num present hai
                                  Matlab duplicate mil gaya
                                  Turant true return */
    map[num] = true;           // agar phli baar aya hai to map mai store kr diya
  } 
  return false;                // pura loop chal gaya duplicate nahi to false return
}
