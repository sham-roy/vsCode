range1=10
range2=30

// for(i=range1;i<=range2;i++) {
//     console.log(i);
// }

// for(range1;range1<=range2;range1++) {
//     console.log(range1);
// }

// for(;range1<=range2;range1++) {
//     console.log(range1);
// }

// for(;range1<=range2;range1++) {
//     if(range1%2==0){
//         console.log(range1);
//     }
// }

for(range1;range1<=range2;range1++) {
    if(range1%2!=0 && range1%5==0){
        console.log(range1);
    }
}