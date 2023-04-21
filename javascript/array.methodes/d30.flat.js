a = [[1, 67],[98, 78],[90, 6],[34, 21],[3, 7],[9, 76]]
// console.log(a.flat().filter(n=>n<10));
// console.log(a.flat());
console.log(a.flat().sort((n1,n2)=>n1-n2));
console.log(a.flat().reduce((n1,n2)=>n1>n2?n1:n2))