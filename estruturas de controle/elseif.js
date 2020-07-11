Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Passou")
    }
    else if (nota.entre(7, 8.99)) {
        console.log("aprovado")
    }
    else if (nota.entre(0, 5)) {
        console.log("reprovado")
    }
    else {
        console.log("nota inválida")
    }
}

imprimirResultado()