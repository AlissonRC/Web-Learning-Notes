var numero = 1
{
    var numero = 2
    console.log('dentro', numero)
}
console.log('fora' , numero)
//
var numero = 1
{
    let numero = 2
    console.log('dentro', numero)
}
console.log('fora' , numero)