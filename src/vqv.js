/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  let parametroNome = typeof (nome);
  let parametroIdade = typeof (idade);
  if (parametroNome === undefined && parametroIdade === undefined) {
    return parametroIdade;
  }
  return `Oi, meu nome é ${nome}!\ntenho ${idade} anos,\n
  trabalho na Trybe e mando muito em programação!\n#VQV!`;
};
console.log(vqv('Tunico', 29));

module.exports = vqv;
