
e={name: "amal",id:1,desig:"dev",salary:200}
// console.log(e);
// console.log(e["id"]);
// console.log(e.salary);
// e["age"]=56
e.place="kochi"
e.age=30 //updation
// console.log(e);
// console.log("id" in e);
// console.log("idd" in e);
// e.salary+=1000
// console.log(e);
for (i in e) {
    console.log(i);
}
console.log("........................");
for (i in e) {
    console.log(e[i]);
}
console.log(".............................");
for (i in e) {
    console.log(i,e[i]);
}
// object


// e= {
//     m:{name: "amal",id:1,desig:"dev",salary:200},
//     n:{name: "amal",id:1,desig:"dev",salary:20000}
// }
// console.log(e.n);