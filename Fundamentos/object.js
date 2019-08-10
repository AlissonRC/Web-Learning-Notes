const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 5000
prod1['Desconto'] = 0.40 // evitar essa notação
console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90 
}
console.log(prod2)

const prod3 = {
    nome: 'tênis',
    preco: 119.90,
    desconto: {
        valor:0.20
    } 
}
console.log(prod3)