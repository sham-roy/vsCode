// employees= [
//     ["anu",'devop',32658,1,"calicut"],
//     ["amal",'tester',40000,3,"kochi"],
//     ["arun",'dev',34000,2,"thrissur"],
//     ["anu",'tester',14000,5,"calilcut"]
// ]

// to print emp names

// len=employees.length 
// console.log(len);
// for(i of employees) {
//         console.log(i[0]);
//     }


// to print dev location


// for(i of employees) {
//     if(i[1]=="dev") {
//         console.log(i[4]);
//     }
//   }

// sorting based on experiance
// employees= [
//     ["anu",'devop',32658,1,"calicut"],
//     ["amal",'tester',40000,3,"kochi"],
//     ["arun",'dev',34000,2,"thrissur"],
//     ["anu",'tester',14000,5,"calilcut"]
// ]

//   employees.sort((n1,n2)=>n1[3]-n2[3])
//   console.log(employees);


// employees= [
//     ["anu",'devop',32658,1,"calicut"],
//     ["amal",'tester',40000,3,"kochi"],
//     ["arun",'dev',34000,2,"thrissur"],
//     ["anu",'tester',14000,5,"calilcut"]
// ]
// // employe with heigh salery
// employees.sort((n1,n2)=>n2[2]-n1[2])
//  console.log(employees[0][0]);

 employees= [
    ["anu",'devop',1000,10,"calicut"],
    ["amal",'tester',40000,3,"kochi"],
    ["arun",'dev',34000,2,"thrissur"],
    ["anu",'tester',14000,5,"calilcut"]
]
// emp with less exp salary and position
employees.sort((n1,n2)=>n1[3]-n2[3])
 console.log(employees[0][0],employees[0][1], employees[0][2]);