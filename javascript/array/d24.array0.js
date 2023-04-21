// n1=[10,20,30,"hi",9.35,false,"hi",a=[10,20]]

// array - linear data structure

// console.log(n1);
// console.log(n1.length);
// console.log(n1[0]);

// homogeneous
// hetrogeneous - different datas are accepted
// supports duplication
// supports nesting

// n1=[10,20,30,"hi",9.35,false,"hi",a=[10,20]]

// for(i in n1){
//     console.log(i);
// }

// n1=[10,20,30,"hi",9.35,false,"hi",a=[10,20]]

// for(i in n1) {
//     console.log(n1[i]);
// }

// n1=[10,20,30,"hi",9.35,false,"hi",a=[10,20]]
// n1.push(100,200)
// for(i in n1) {
//     console.log(n1[i]);
// }

n1=[10,20,30,"hi",9.35,false,"hi",a=[10,20]]
n1[0]=30000
for(i in n1) {
    console.log(n1[i]);
}
