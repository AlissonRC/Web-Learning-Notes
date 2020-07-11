console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("teste", "teste1", "teste2");
console.log(aprovados);

aprovados = ["teste4", "teste5", "teste6"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Alisson";
console.log(aprovados[3]);
aprovados.push("push");
console.log(aprovados.length);
aprovados[10] = "rafael";
console.log(aprovados.length);

aprovados.sort();
console.log(aprovados);
console.log(aprovados.length);
