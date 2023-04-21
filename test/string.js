s="ABCDABFGDH"
obj={}
r1=[]
for(i of s){
    if(i in obj){
        r1.push(i)
    }
    else{
    obj[i]=1
    }
}
console.log(r1[0],r1[r1.length-1]);