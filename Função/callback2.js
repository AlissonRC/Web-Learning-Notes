const notas = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 7.2, 9, 10]

const notasBaixasSemCallback = []
for(let i in notas){
    if (notas[i]<6){
        notasBaixasSemCallback.push(notas[i])
    }
}
console.log(notasBaixasSemCallback)

//com callback
const notasBaixas = notas.filter(function (notas) {
    return notas < 6
})

console.log(notasBaixas)

const notasBaixasArray = notas.filter(notas => notas <6)

console.log(notasBaixasArray)

//ou

const notasMenorQue6 = notas => notas < 6
const notas3 = notas.filter (notasMenorQue6)
console.log(notas3)