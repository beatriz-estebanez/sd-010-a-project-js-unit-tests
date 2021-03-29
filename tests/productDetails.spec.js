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
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true, 'O retorno deve ser true para array');
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    assert.strictEqual(typeof (productDetails('Alcool Gel', 'Máscara')), 'object');
    assert.strictEqual(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1], true);

    const firstProductId = Number(productDetails('Alcool gel', 'Máscara')[0].details.productId.slice(-3));
    const secondProductId = Number(productDetails('Alcool gel', 'Máscara')[1].details.productId.slice(-3));
    assert.deepStrictEqual(firstProductId && secondProductId, 123);
  });
});
