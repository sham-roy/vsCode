
function greatest(num1, num2){

    if(num1>num2){
        console.log(num1, "is greatest");
    }
    else if (num1==num2){
        console.log(num1 ,"&",num2,"both same");
    }
    else {
        console.log(num2,"is greatest");
    }
}

greatest(300,500)
greatest(100,100)
greatest(1000,500)
