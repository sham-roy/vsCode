p = [
    [1,"hidenseek",30,8],
    [3,"oreo",35,21],
    [5,'tiger',20,11],
    [2,'parle-g',10,35],
    [4,'dsrk fantacy',45,5]
]

// all products name
console.log(p.map(i=>i[1]));

// products detsils price above 30
console.log(p.filter(n=>n[2]>30));

// details of oreo
console.log(p.filter(n=>n[1]=="oreo"));

// products detsils price below 30
console.log(p.filter(n=>n[2]<30).map(n=>n[0]));

// arranging according to id
console.log(p.sort((m1,m2)=>m1[0]-m2[0]));