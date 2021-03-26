/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  const isNumber = e => typeof (e) === 'number';
  const checkType = array.every(isNumber);
  const checkLength = array.length !== 0;
  if (checkType === false || checkLength === false) return undefined;

  let sum = 0;
  for (let index = 0; index < array.length; index += 1) sum += array[index];
  const average = Math.round(sum / array.length);

  return average;
};

module.exports = average;