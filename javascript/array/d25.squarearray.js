

// function squareArray(a) {
//     square = []
//     for(i of a) {
//        square.push(i**2);
//     }
//     console.log(square);
// }


// square value of array
// squareArray([2,3,4,5,6,7,8])
// array([1,2,3,4,5,6,7,8,9,10])
// function array (a){
//     newa=[]
//     for(i of a) {
//         i<5?newa.push(i-1):newa.push(i+1)
//     }
//     console.log(newa);
// }


// positive and negative of array
// a=[1,2,3,4,5,-1,-2,-3,-4,-5,-6]
// pos= []
// neg= []
// for(i of a){
//     i>0?pos.push(i):neg.push(i)
// }
// console.log(pos,neg);


// cube value of array 
// function arrayr(a) {
// cube=[]
// for(i of a){
//     cube.push(i**3)
// }
// console.log(cube);
// }
// arrayr([1,2,3,4,5])


// print commen elements
// a1=[1,2,3,5,6,8,9,0,100]
// a2=[9,5,63,42,75,2,3,7]
// sim=[]
// for(i of a1) {
//     for(u of a2){
//         if(i==u){
//             sim.push(i)
//         }
//     }
// }
// console.log(sim);


//total expenses 
// exp=[1,2,3,4,5]
// sum=0
// for(i of exp){
//     sum=sum+i
// }
// console.log(sum);


//max expenses 
// exp=[1,2666,3,4,510]
// max=0
// for(i of exp){
//     if(max<i){
//         max=i
//     }
// }
// console.log(max);.


// exp=[1,2666,3,4,510]
// min=exp[0]
// for(i of exp){
//     if(i<min){
//         min=i
//     }
// }
// console.log(min);

a=[1,2,3,4,5,6,7]
prime=[]
nonprime=[]
for(i of a) {
    for(j=2;j<i;j++) {
    if(i%j==0) {
        break
    }
}
if(i==j){
    prime.push(i)
}
else {
    nonprime.push(i)
}
}
console.log(prime);
console.log(nonprime);