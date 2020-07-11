const imprimeResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log("teste")
            break
        case 8:
        case 7:
            console.log("teste 2")
            break
        case 6:
        case 5:
            console.log("teste 3")
            break
        default:
            console.log("errado")
    }
}
imprimeResultado(11)