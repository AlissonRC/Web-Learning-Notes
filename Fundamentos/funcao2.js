//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4)
imprimirSoma()

//função com retorno
// b = 0 -> Valor padrão setado
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2,10))
console.log(soma(2))