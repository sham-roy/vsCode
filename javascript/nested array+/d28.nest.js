a = [
    [1, 67],
    [98, 78],
    [90, 6],
    [34, 21],
    [3, 7],
    [9, 76]

]
a.sort((n1, n2) => n1 - n2)
console.log(a);
for (i of a) {
    for (j of i) {
        j<10?console.log(j):""

    }
}