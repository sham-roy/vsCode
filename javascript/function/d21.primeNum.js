
function prime(num1){
    for(i=2;i<=num1;i++) {
        if(num1%i==0) {
            break
        }
    }
    if(num1==i){
        console.log("prime");
    }
    else {
        console.log("not prime");
    }
}
prime(10)