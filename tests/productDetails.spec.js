/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:

    // Teste que o retorno da função é um array.
    const arrayProduct = productDetails('Alcool gel', 'Máscara');

    assert.strictEqual(Array.isArray(arrayProduct), true); // Aprendi essa function pelo MDN quando fui pesquisar mais sobre o typeof

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(arrayProduct.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const item1 = arrayProduct[0];
    const item2 = arrayProduct[1];

    assert.strictEqual(typeof item1, 'object');
    assert.strictEqual(typeof item2, 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(item1, item2);

    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.fail();
  });
});
