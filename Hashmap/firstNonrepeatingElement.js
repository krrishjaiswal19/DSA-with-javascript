let arr = [1,2,2,3,1,4];
let freq = { };

for(let num of arr){
    freq[num] = (freq[num] || 0) + 1;
}

for(let num of arr){
    if(freq[num] === 1){
        console.log(num);
        break;
    }
}