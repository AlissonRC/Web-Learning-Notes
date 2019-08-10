let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
console.log()
isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)
console.log("verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!"teste")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = ''
console.log(nome || "vazio")
nome = 'Alisson'
console.log(nome || "vazio")