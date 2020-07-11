//coleção dinamicas de pares chave/valor

const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log (produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    Proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },{
            nome: 'Ana',
            idade: 42
        }],
        calcularValorSeguro: function(){
            //...
        }
}

carro.Proprietario.endereco.numero = 1000
carro['Proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)


delete carro.Proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)