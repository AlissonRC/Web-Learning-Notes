console.log(Math.ceil(5.3))

const obj = {}

obj.nome = 'Bola'

console.log(obj.nome)

function Obj(nome){
    this.nome = nome //this torna variável acessivel fora
    this.exec = function () {

        console.log('Exec....')

    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()