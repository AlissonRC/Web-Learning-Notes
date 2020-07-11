const notas = [0,1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i in notas) {
    if (notas[i] == 5) break
    console.log(i, notas[i])
}
for (let i in notas) {
    if (notas[i] == 5) continue
    console.log(i, notas[i])
}

externo: for (let i in notas) {
    for (let x in notas) {
        if (i == 2 && x == 2) break externo
        console.log("par" + notas[i], notas[x])
    }
}