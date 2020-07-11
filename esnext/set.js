// não aceita repetição / não indexada

const times = new Set();
times.add("Vasco");
times.add("São Paulo");
times.add("Flamengo").add("Inter");

console.log(times);

times.delete("Vasco");
console.log(times);
console.log(times.has("Vasco"));
console.log(times.size);

const nomes = ["Alisson", "Ramos", "Cruz"];

const nomesSet = new Set(nomes);
console.log(nomesSet);
