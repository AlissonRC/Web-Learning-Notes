for (let letra of "Teste") {
  console.log(letra);
}

const nomes = ["Alisson", "Ramos", "Cruz"];

for (let nome of nomes) {
  console.log(nome);
}

const assuntoMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let chaves of assuntoMap.keys()) {
  console.log(chaves);
}

for (let valor of assuntoMap.values()) {
  console.log(valor);
}
