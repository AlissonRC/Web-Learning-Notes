const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' 
//ou const resultado = nota => {return nota >= 7 ? 'Aprovado' : 'Reprovado'}

console.log(resultado(7))
console.log(resultado(5))