


// function fib(num) { 
//     n1=0
//     n2=1
//     n3=0

//         for(i=0;i<=num;i++) {
//             console.log(n1);
//             n3=n1+n2
//             n1=n2
//             n2=n3
            
//         }
// }
// fib(5)

function fib(num) { 
    n1=0
    n2=1
        for(;num>0;num--) {
            console.log(n1);
            n3=n1+n2
            n1=n2
            n2=n3
            
        }
}
fib(5)