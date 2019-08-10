const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Ramos",
    idade: 50,
    peso: 60
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}