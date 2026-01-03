/*
Remove Duplicates from Sorted array
LOGIC:
(Slow-Fast Pointer)
i -> slow pointer(unique index)
j -> fast pointer (scan array)
*/ 

function removeDuplicates(arr) {         // Function start, array input lega
  let i = 0;                             /* i slow pointer
                                            First element hamesha unique hota hai
                                            Isliye i = 0 */

  for (let j = 1; j < arr.length; j++) { /* j fast pointer
                                            Second element se compare start */
    if (arr[i] !== arr[j]) {             /* Agar current unique element ≠ new element
                                            matlab naya unique mil gaya */
      i++;                               // i ko age badhao
      arr[i] = arr[j];                   // Naya unique element i position pr daal do
    }
  }
  return i + 1;                          //i last unique index par hota hai ,Count = index + 1
}

removeDuplicates([1,1,2,2,3]);           // 3