let arr = [1,2,2,3,1,4,2];
let freq = {};

for(leti=0,i<arr.length,i++) {
    let key = arr[i];

    if(freq[key]===undefined){
        freq[key]=1;
    }else{
        freq[key]++;
    }
}
console.log(freq);