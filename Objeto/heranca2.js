// Cadeida de protótipos (Prototype chain)

const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };
console.log(filho.attr1);

Object.prototype.attr0 = "Z";
console.log(filho.attr0, filho.attr2, filho.attr1, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerar(aceleracao) {
    if (this.velAtual <= this.velMax) {
      this.velAtual += aceleracao;
    } else {
      this.velAtual = this.velMax;
    }
  },
  velocimetro() {
    return `velocidade: ${this.velAtual}KM/h de ${this.velMax}KM/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, //shadowing
};

const volvo = {
  modelo: "V40",
  velocimetro() {
    return `${this.modelo}, ${super.velocimetro()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
console.log(ferrari);
console.log(volvo);

volvo.acelerar(50);
console.log(volvo.velocimetro());
