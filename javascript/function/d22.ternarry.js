

// age=100
// age>=18?console.log("eligiable"):console.log("not eligibale")

// function posneg(n) {
//     return n>0?"pos":n<0?"neg":"zero"
// }
// console.log(posneg(-1))

posneg=(n,n1)=> {
    return n>n1?"greatest number is "+n:n<n1?"greatest num is"+n1:"equal numbers"
}
console.log(posneg(20,20))

