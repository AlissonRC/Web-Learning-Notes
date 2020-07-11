const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const filterCountry = (country) => (e) => country === e.pais;
const filterGenre = (genre) => (e) => genre === e.genero;
const filterMenorSalario = (valorInicial, e) => {
  if (valorInicial.salario > e.salario) {
    return e;
  }
  return valorInicial;
};
axios.get(url).then((response) => {
  const funcionarios = response.data;
  const funcionariosChineses = funcionarios.filter(filterCountry("China"));
  const funcionariosChinesesMulheres = funcionariosChineses.filter(
    filterGenre("F")
  );
  const menorSalario = funcionariosChinesesMulheres.reduce(filterMenorSalario);
  console.log(menorSalario);
});
