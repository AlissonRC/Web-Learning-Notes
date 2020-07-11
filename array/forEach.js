const aprovados = ["Jose", "Alisson", "Carlos", "João", "Miguel"];
const produtos = ["carro", "moto", "ps4", "xbox", "pc"];
aprovados.forEach(function (nome, indice, array) {
  console.log(`Indice${indice + 1}: nome: ${nome}`);
  console.log(array);
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (nome) => console.log(nome);

aprovados.forEach(exibirAprovados);

// Callback e array
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(array[i], i, this);
  }
};

console.log(typeof Array);
produtos.forEach2((nome, indice) => console.log(`${indice} ${nome}`));
