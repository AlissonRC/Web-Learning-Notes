const aprovados = ["Jose", "Alisson", "Carlos", "João", "Miguel"];
aprovados.forEach(function (nome, indice, array) {
  console.log(`Indice${indice + 1}: nome: ${nome}`);
  console.log(array);
});

aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (nome) => console.log(nome);

aprovados.forEach(exibirAprovados);
