// a=[1,6,87,2,8,4,2,9,5]
// a.sort((n1,n2)=>n1-n2)

// console.log(a);

a=[10,20,30,40,50,60,70,80,90]
e=2000
a.sort((n1,n2)=>n1-n2)
flag=0
low=0
upper=a.length-1
count=0

while (low<upper){
    count++
    middIndex=Math.floor((low+upper)/2)
    if(a[middIndex]==e) {
        flag=1
        break
    }
    else if (e>a[middIndex]){
        low=middIndex+1
    }
    else if (e<a[middIndex]) {
        upper=middIndex-1
    }
}
if(flag==1) {
    console.log("element foount ");
}
else {
    console.log("not found");
}