
// sum=9
// a=[1,2,3,4,5,6]
// for(i of a) {
//     for(j of a)
//     if(i+j==9) {
//         console.log(i,"+",j,"=",i+j);
//     }
// }


// // middle Element

// function middleElement(a) {
//     middle = Math.floor(a.length / 2);
//     result = [middle];
//     console.log(a[result]);
// }
// middleElement([10, 50, 90])


// // middle Element

// function middleElement(a) {
//     middle = Math.floor(a.length / 2);
//     return a[middle]
// }
// console.log(middleElement([10, 50, 90]));


// // find element

// a=[10,20,30,40,50,60,70,80,90]
// n=50
// flag=0
// for(i of a) {
//     if(i==n){
//         flag=1
//         break
//     }
// }
// flag==1?console.log("present"):console.log("not present");


// find element

function find(e){
a=[10,20,30,40,50,60,70,80,90]
flag=0
count=0
for(i of a) {
    count++
    if(i==e){
        flag=1
        break
    }
}
console.log(count); // count = 9
return flag==1?"present":"not present"
}
console.log(find(2000));