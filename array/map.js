const nums = [1, 2, 3, 4, 5];

//

const nums2 = nums.map(function (e) {
  return e * 2;
});

console.log(nums, nums2);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `${parseFloat(e).toFixed(2).replace(".", ",")}.`;

const numsEmDinheiro = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(numsEmDinheiro);

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 23.45}',
  '{"nome": "Lapis", "preco": 10.45}',
];

const jsonObject = carrinho.map(function (e) {
  let object = JSON.parse(e);
  return object.preco;
});
console.log(jsonObject);

Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
