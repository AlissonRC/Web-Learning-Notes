const produtos = [
  { nome: "notebook", preco: 5499, fragil: true },
  { nome: "computador", preco: 10499, fragil: true },
  { nome: "ps4", preco: 2199, fragil: false },
  { nome: "xbox", preco: 2300, fragil: true },
];

console.log(
  produtos.filter(function (e) {
    return e.fragil === true && e.preco >= 4000;
  })
);

const caro = (produto) => produto.preco >= 4400;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));

Array.prototype.filter2 = function (callback) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
};
console.log(produtos.filter2(caro));
