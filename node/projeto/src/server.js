const porta = 3003;
const express = require("express");
const app = express();
const dataBase = require("./dataBase");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/produtos", (request, response, next) => {
  response.send(dataBase.getProdutos());
});

app.get("/produtos/:id", (request, response, next) => {
  response.send(dataBase.getProduto(request.params.id));
});

app.post("/produtos", (request, response, next) => {
  const produto = dataBase.salvarProduto({
    nome: request.body.nome,
    preco: request.body.preco,
  });
  response.send(produto);
});

app.listen(porta, () => {
  console.log(`rodando na porta ${porta}`);
});
