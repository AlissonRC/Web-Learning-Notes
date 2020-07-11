const ferrari = {
  modelo: "F40",
  preco: 1000000,
};

const volvo = {
  modelo: "v40",
  preco: 200000,
};

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
function MeuObjeto() {}
console.log(typeof Object);
console.log(typeof MeuObjeto, typeof ferrari);
