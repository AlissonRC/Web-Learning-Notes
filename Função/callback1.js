const fabricantes = ["BMW", "Mercedes", "Audi"];

function imprimir(nome, indice) {
  console.log(`${indice}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(function (a, b, c) {
  console.log(a, b, c);
});

fabricantes.forEach((a, b, c) => console.log(a, b, c));
