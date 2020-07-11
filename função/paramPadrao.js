//estratégia 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(2, 3))
console.log(soma1())

//estratégia 2
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(2, 2, 3))

//valor padrão Es2015 - Melhor forma
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())