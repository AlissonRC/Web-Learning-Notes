const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 5.1,
      },
    ],
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Carlos",
        nota: 6.2,
      },
      {
        nome: "José",
        nota: 8.9,
      },
    ],
  },
];

const getNotasAluno = (aluno) => aluno.nota;
const getAlunosTurma = (turma) => turma.alunos;

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

console.log(escola.flatMap(getAlunosTurma));

const alunos = escola.flatMap(getAlunosTurma);
const notas = alunos.flatMap(getNotasAluno);
console.log(notas);

const teste = Array.prototype.concat.apply(
  [],
  [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ]
);
console.log(teste);

console.log(typeof [], typeof {});
