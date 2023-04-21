// a=[1,2,3,4,5,6,7]
// // sum
// console.log(a.reduce((a,b)=>a+b));
// // greatest
// console.log(a.reduce((n1,n2)=>n1>n2?n1:n2));
// // lowest
// console.log(a.reduce((n1,n2)=>n1<n2?n1:n2));

emp= [
    ["anyu",'devop',1000,10,"calicut"],
    ["amal",'tester',40000,3,"kochi"],
    ["arun",'dev',34000,2,"thrissur"],
    ["anu",'tester',14000,2,"calilcut"]
]

// console.log(emp.map(n=>n[2]).reduce((n1,n2)=>n1+n2));

console.log(emp.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)[0]);