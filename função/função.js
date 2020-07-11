// forma literal
function fun1() {

}
//aramazenar em constante
const fun2 = function () { }

// armazenar em um array
const array = [fun1, fun2, function (a, b) { return a + b }]
console.log(array[2](2, 3))

//armazenar em objeto 
const obj = {}
obj.falar = function () { return "opa" }
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('executando') })

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
//loco
soma(2, 3)(3)

const resultado = soma(2, 3)
resultado(5)