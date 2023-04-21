
function num1(num) {

for(i in num) {
    if(num[i]%5==0) {
        console.log(num[i]);
    }
    else{
        console.log("sorry");
    }
}

}

num1(m=[10,2,20,3,30,40,4,50,6])