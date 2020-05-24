const pessoa = {
    nome: 'teste',
    idade: 14,
    endereco: {
        logradouro: ' teste',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)


//destructuring mudando o nome da variável
const { nome: n, idade: i } = pessoa
console.log(n, i)


//valor padrão
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)


//destructuring obj dentro de obj
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)