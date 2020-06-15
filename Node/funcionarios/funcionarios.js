const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const filterCountry = (e, country) => {
  const c = this.country;
  return e.pais === c;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const funcionariosChineses = funcionarios.filter(filterCountry("China"));
  console.log(funcionariosChineses);
});
