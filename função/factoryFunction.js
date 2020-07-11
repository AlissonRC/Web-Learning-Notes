const criarProduto = (nome, preco) => {
  return {
    nome: nome,
    preco: preco,
  };
};

const prod1 = criarProduto("Carro", 2000.99);
console.log(prod1);
