const alunos = [
  { nome: "Carlos", nota: 2, bolsistas: true },
  { nome: "Jose", nota: 9, bolsistas: true },
  { nome: "Roberto", nota: 8, bolsistas: false },
  { nome: "Augusto", nota: 7, bolsistas: true },
];

console.log(alunos.map((a) => a.nota));
console.log(
  alunos
    .map((a) => a.nota)
    .reduce(function (acumulador, valorAtual) {
      console.log(acumulador, valorAtual);
      return acumulador + valorAtual;
    })
);

console.log(
  `Todos os alunos são bolsistas? ` +
    alunos
      .map((a) => a.bolsistas)
      .reduce(function (acumulador, valorInicial) {
        console.log(acumulador, valorInicial);
        return acumulador && valorInicial;
      })
);

console.log(
  `Algum aluno é bolsistas? ` +
    alunos
      .map((a) => a.bolsistas)
      .reduce(function (acumulador, valorInicial) {
        console.log(acumulador, valorInicial);
        return acumulador || valorInicial;
      })
);

Array.prototype.reduce2 = function (callback) {
  let acumulador = this[0];
  for (let i = 1; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums.reduce2(soma));
