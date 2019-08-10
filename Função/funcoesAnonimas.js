const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao){
    console.log(operacao(a, b))
}

imprimirResultado(2,5, function(a, b){
    return a+b
})

const pessoa = {
    falar: function(){
        console.log('falar')
    }
}
pessoa.falar()