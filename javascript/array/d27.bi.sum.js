a=[10,20,30,40,50,60]
a.sort((n1,n2)=>n1-n2)
sum=30
lower=0
value=a[a.length-1]
upper=value
while(a[lower]<upper) {
    if(a[lower]+upper==sum) {
        console.log(a[lower],"+",upper,'=',sum);
        lower++ 
        upper--
    }
    else if (a[lower]+upper<sum) {
        lower++
    }
    
    else  if (a[lower]+upper>sum) {
        upper--
    }
}