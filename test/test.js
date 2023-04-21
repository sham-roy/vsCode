var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
 
      ]
    },
 
  ]
//   var accounts = [
//     {
//       acno: 1000, ac_type: "savings", balance: 5000, transactions: [
//         { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
//         { to: 1002, amount: 600, note: "geto", method: "neft" },
//         { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
//       ]
//     }
// ]
//   1.Print all gpay transactions?
// console.log(accounts.map(n=>n.transactions).flat().filter(n=>n.methode=="g-pay"));
// console.log(accounts.map(n=>n.transactions).flat().filter(n=>n.method=='g-pay'));
// console.log(accounts.map(n=>n.transactions).flat().filter(n=>n.amount>5000));
// console.log(accounts.filter(n1=>n1["acno"]==1002).map(n2=>n2["transactions"]));


// console.log(accounts.filter(n=>n.acno==1002).map(n=>n.transactions))
// console.log(accounts.map(n=>n.transactions).flat().filter(n=>n.to==1002));
console.log(accounts.reduce((n1,n2)=>n1>n2?n1:n2));