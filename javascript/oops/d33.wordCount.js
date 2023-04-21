s="hello hi hello"
words=s.split(" ")
count={}
// for (i of w){
//     if(i in count){
//         count[i]=count[i]+1
//     }
//     else {
//         count[i]=1

//     }
// }
// console.log(count);
words.map(word=>word in count?count[word+=1]:count[word]=1);
console.log(count);