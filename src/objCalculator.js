/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/
// O idéia de como montar o objeto é do repositório da Ana Ventura.
const calculator = {
  add(numb1, numb2) {
    return Math.trunc(numb1 + numb2);
  },
  mult(numb1, numb2) {
    return Math.trunc(numb1 * numb2);
  },
  div(numb1, numb2) {
    return Math.trunc(numb1 / numb2);
  },
  sub(numb1, numb2) {
    return Math.trunc(numb1 - numb2);
  },
};
module.exports = calculator;
