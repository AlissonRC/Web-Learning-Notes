const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao) //Sem this gera erro
    }
}

pessoa.falar()//Sem this gera erro
const falar = pessoa.falar
falar() //conflito entre paradigmas

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

