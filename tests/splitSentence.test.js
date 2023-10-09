const { splitSentence } = require('../src/challenges');

describe('3 - Crie uma função que divida a frase', () => {
  it('Retorne o valor [\'Drummond\', \'Advisors\'] se a função receber a string \'Drummond Advisors\'', () => {
    expect(splitSentence('Drummond Advisors')).toEqual(['Drummond', 'Advisors']);
  });

  it('Retorne o valor [\'Drummond\', \'Advisors\', \'Tech\']. se a função receber a string \'Drummond Advisors Tech\'', () => {
    expect(splitSentence('Drummond Advisors Tech')).toEqual(['Drummond', 'Advisors', 'Tech']);
  });

  it('Retorne o valor [\'foguete\'] se a função receber a string \'foguete\'', () => {
    expect(splitSentence('foguete')).toEqual(['foguete']);
  });
});
