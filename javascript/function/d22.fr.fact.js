
// function fact(){
//     num1=5
//     fact=1
//     for(;num1>0;num1--) {
//         fact *=num1
//     }
//     console.log(fact);
// }

// fact()

function fact(num) {
    fact=1
    for(;num>0;num--) {
        fact *=num
    }
    return fact
}

console.log(fact(6));