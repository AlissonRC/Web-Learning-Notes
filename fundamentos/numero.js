const peso1 = 1.0
const peso2 = Number('2.0') // Função Number
const peso3 = 1.1

console.log(peso1, peso2)  
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1+peso2)

console.log(media)
console.log (media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) // Transformar em binário

console.log((10).toString(2))
console.log(typeof media)

console.log(7/0) // Infinity

console.log("10"/2) // Divide número string
console.log(typeof("10"/2)) // Continua number


const teste = "3"+2 // Com soma continua string
console.log(teste)
console.log(typeof(teste))

const teste2 = "3"-2 // Vira number
console.log(teste2)
console.log(typeof(teste2))