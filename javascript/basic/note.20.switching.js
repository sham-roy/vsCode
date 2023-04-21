// switch

// break 
// contiue

// for(i=1;i<=5;i++){
//     console.log(i);
//     if(i==3){
//         break
//     }
// }

// for(i=1;i<=5;i++){
//     if(i==3){
//          continue
//     }
//     console.log(i);
// }

// ==================================================================================================================================

// num=11
// f=0
// for(i=2;i<num;i++) {
//     if(num%i==0){
//         f=1
//         break 
//     }
// }
// if(f==1){
//     console.log("not prime",num);
// }
// else{
//     console.log("prime", num);
// }

// num=11
// for(i=2;i<num;i++) {
//     if(num%i==0){
//         break 
//     }
// }
// if(i==num){
//     console.log("prime",num);
// }
// else{
//     console.log("not prime", num);
// }

// ==========================================================================================================================

// r1 = 5
// r2 = 15
// for (;r1<=r2;r1++) {

//     for(i=2;i<r1;i++) {
//         if (r1%i==0){
//             break
//         }
//     }
//     if (r1==i) {
//         console.log(r1);
//     }
// }

// =====================================================================================

r1 = 5
r2 = 15
sum=0
for (;r1<=r2;r1++) {

    for(i=2;i<r1;i++) {
        if (r1%i==0){
            break
        }
    }
    if (r1==i) {
        sum=sum+r1
    }
}
console.log("sum of prime numbers",sum);

// ==============================================================

r1 = 5
r2 = 15
sum=0
for (;r1<=r2;r1++) {

    for(i=2;i<r1;i++) {
        if (r1%i==0){
            break
        }
    }
    if (r1!=i) {
        sum=sum+r1
    }
}
console.log("sum of non-prime numbers", sum);








