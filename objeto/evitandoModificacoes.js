// Object.preventExtensions
//pode excluir e alterar atributos mas não pode adicionar novos
const prod = Object.preventExtensions({
  nome: "teste",
  preco: 123,
  tag: "teste2",
});

console.log("Extensível:", Object.isExtensible(prod));
prod.nome = "borracha";
prod.descricao = "testedescricao";
delete prod.tag;
console.log(prod);

//Object.seal
//não adiciona valores novos, não exclui, mas pode alterar valores
const pessoa = {
  nome: "teste",
  idade: 35,
};
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));
pessoa.sobrenome = "silva";
pessoa.idade = 29;
delete pessoa.nome;
console.log(pessoa);

// Object.freeze
//não adiciona, não exclui, e não pode alterar os valores
Object.freeze(pessoa);
