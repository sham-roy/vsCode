emp = [
    ["anyu", 'devop', 1000, 10, "calicut"],
    ["amal", 'tester', 45000, 3, "kochi"],
    ["arun", 'dev', 34000, 2, "thrissur"],
    ["anu", 'tester', 14000, 2, "calilcut"]
]

// console.log(emp.some(n=>n[3]==3));
console.log(emp.some(n=>n[2]>=40000 && n[2]<=50000));