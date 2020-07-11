const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'falaaa'// contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 50,
    endereco: {
        logradouro: 'rua',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)