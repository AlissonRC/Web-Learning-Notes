const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");
const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();

contadorA.cont();
contadorA.cont();
console.log(contadorB.valor);

contadorC.cont();
contadorC.cont();
console.log(contadorD.valor);
