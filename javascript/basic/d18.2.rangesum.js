sum=0
range1=1
range2=5

// for(;range1<=range2;range1++) {
//     if(range1%2==0){
//         sum=sum+range1
//     }
// }
// console.log(sum);

while(range1<=range2){
    if(range1%2!=0){
        sum=sum+range1
    }
    range1++
}
console.log(sum);
