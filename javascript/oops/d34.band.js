

products= [
    {pid:100,pname:"nokia",nw:"4g",price:20000,display:"lcd"},
    {pid:102,pname:"oppo",nw:"4g",price:25000,display:"lcd"},
    {pid:103,pname:"mi",nw:"5g",price:26000,display:"led"},
    {pid:104,pname:"vivo",nw:"4g",price:15000,display:"lcd"},
    {pid:105,pname:"apple",nw:"5g",price:60000,display:"led"},
    {pid:106,pname:"nothing",nw:"5g",price:30000,display:"led"},
]
// console.log(products);

// all products name
// console.log(products.map(n=>n.pname));
// products.forEach(n=>console.log(n.pname));

// find names of mobile with lcd display
// console.log(products.filter(n=>n.display=="lcd").map(n=>n.pname))

// find ids of 5g mobiles
// console.log(products.filter(n=>n.nw=="5g").map(n=>n.pid));

// sort the mobiles based on the price
// console.log(products.sort((n,n1)=>n.price-n1.price));

// find the name of costly phone
console.log(products.reduce((n1,n2)=>n1.price>n2.price?n1:n2).pname);
