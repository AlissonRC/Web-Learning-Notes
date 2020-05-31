const pai = {
  nome: "Pedro",
  corCabelo: "preto",
};

const filha1 = Object.create(pai);
console.log(filha1);
filha1.nome = "Ana";
console.log(filha1.nome, filha1.corCabelo);

const filha2 = Object.create(pai);

filha2.nome = "Carla";

for (let keys in filha2) {
  filha2.hasOwnProperty(keys)
    ? console.log(keys)
    : console.log(`por herança ${keys}`);
}
