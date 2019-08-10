this.c = 456
this.d = false
this.e = 'teste'

console.log(this.c)
console.log(module.exports.c)
console.log(module.exports)

module.exports = {a: 123}
console.log(module.exports)