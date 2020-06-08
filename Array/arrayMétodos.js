const produtos = ["notebook", "xbox", "ps4", "mouse", "teclado"];
console.log(produtos);

produtos.pop(); // remove último elemento array
console.log(produtos);

produtos.push("teclado"); //adiciona última posição
console.log(produtos);

produtos.shift(); //remove na primeira posição
console.log(produtos);

produtos.unshift("notebook"); // adiciona primeira posição
console.log(produtos);

produtos.splice(2, 0, "fone", "celular"); // remover e adicionar elementos
console.log(produtos);

produtos.splice(2, 2);
console.log(produtos);

const algunsProdutos = produtos.slice(2); // retorna um novo array a partir da posição passada para o parâmetro
console.log(algunsProdutos);

const algunsProdutos2 = produtos.slice(1, 4); // não retornar até o última posição
console.log(algunsProdutos2);
