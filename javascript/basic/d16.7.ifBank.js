fixedAmount=1000000
withdraw=20000000000

if(withdraw>fixedAmount){
    console.log("insufficient balance");
}
else{
    console.log("balance =",fixedAmount-withdraw);
    console.log("withdradn =",withdraw);
}
