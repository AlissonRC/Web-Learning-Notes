//Class
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Meu nome é: ${this.nome} e minha idade é ${this.idade}`);
  }
}

const pessoa1 = new Pessoa("Alisson", 12);
pessoa1.falar();

//Factory Function

const criarPessoa = (nome, idade) => {
  return {
    nome,
    idade,
    falar() {
      console.log(`Meu nome é: ${nome} e minha idade é ${idade}`);
    },
  };
};

const pessoa2 = criarPessoa("Rute", 20);
pessoa2.falar();
