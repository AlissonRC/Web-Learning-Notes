function Carro(velocidadeMaxima = 200, aceleracao = 5) {
    //atributos privados
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + aceleracao <= velocidadeMaxima) {
            velocidadeAtual += aceleracao
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
const ferrari = new Carro (400,50)
ferrari.acelerar()
console.log(uno.getVelocidadeAtual(), ferrari.getVelocidadeAtual())