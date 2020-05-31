//Função construtura - Igual constructor do Java
function Aula(nome, videoID) {
  (this.nome = nome), (this.videoID = videoID);
}

const aula1 = new Aula("aula1", 123);

function novo(f, ...params) {
  const obj = {
    nome: "",
    videoID: 2,
    coco: "eu",
  };
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  console.log(f.prototype);
  console.log(`objeto: ${obj.nome}${obj.videoID}`);
  return obj;
}

const aula2 = novo(Aula, "teste", 456);

console.log(aula1, aula2);

const test1 = "alisson";
const test2 = 1012;
const obj10 = {};

function criaObj(a, b) {
  (this.a = a), (this.b = b);
}
criaObj.apply(obj10, [test1, test2]);
console.log(obj10);
