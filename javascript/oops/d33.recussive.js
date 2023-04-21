s="abbabcd" //b a b
newarray=[]
o={}
for(i of s) {
    if (i in o) {
        newarray.push(i)
    }
    else{
        o[i]=1
    }
}
console.log(newarray);
console.log(o);