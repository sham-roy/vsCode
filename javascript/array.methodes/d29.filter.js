// a=[1,2,3,4,5,6,7,8,9]
// console.log(a.filter(i=>i%2==0));
// console.log(a.filter(i=>i%2!=0));


emp= [
    ["anu",'dev',32658,1,"calicut"],
    ["amal",'tester',40000,3,"kochi"],
    ["arun",'dev',34000,2,"thrissur"],
    ["anu",'tester',14000,5,"calilcut"]
]
console.log(emp.filter(i=>i[1]=="dev").map(n=>n[4]));

console.log(emp.filter(i=>i[1]=="dev"?i[4]:""));