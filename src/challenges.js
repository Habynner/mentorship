// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
  // seu código aqui
}
// console.log(compareTrue(true, true));
// console.log(compareTrue(true, false));
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, false));


// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
  // seu código aqui
}
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  const listaPalavras = [];
  let palavra = '';

  for (let x = 0; x < frase.length; x++){
    const letra = frase[x];

    if (letra !== ' '){
      palavra += letra;
    } else {
      if(palavra !== ''){
        listaPalavras.push(palavra);
        palavra = '';
      }
    }
  }
  if(palavra !== ''){
    listaPalavras.push(palavra);
  }
  return listaPalavras;
  // seu código aqui
}
// console.log(splitSentence("Drummond Advisors"));
// console.log(splitSentence("Drummond Advisors Tech"));
// console.log(splitSentence("Foguete"));

// Desafio 4
function concatName(array) {
  return array[array.length -1] + ', '+ array[0];
  // seu código aqui
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));
// // Desafio 5
function footballPoints(wins, ties) {
  const pontos = wins * 3 + ties * 1;
  return pontos;
  // seu código aqui
}
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let num = 0;
  let MaiorAtual = array[0];
  for (let x = 0; x < array.length; x++) {
    const numDaVez = array[x];
    if(numDaVez === MaiorAtual){
      num = num +1;
    }else if(numDaVez > MaiorAtual){
      MaiorAtual = numDaVez;
      num = 1;
    }

  };
  return num;
  // seu código aqui
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distancia1 = Math.abs(mouse - cat1);
  const distancia2 = Math.abs(mouse - cat2);
  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia2 < distancia1) {
    return 'cat2'
  }else{
    return 'os gatos trombam e o rato foge'
  }

  // seu código aqui
}
// console.log(catAndMouse(0, 3, 2));
// console.log(catAndMouse(10, 4, 22));
// console.log(catAndMouse(1, 2, 2));

// Desafio 8
function fizzBuzz(array) {
  const novoArray = [];
  for(const x of array) {
    if (x % 3 === 0 && x % 5 === 0) {
      novoArray.push('fizzBuzz');
    }
    else if (x % 3 === 0) {
      novoArray.push('fizz');
    }
    else if (x % 5 === 0) {
      novoArray.push('buzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
  // seu código aqui
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(frase) {
  const vogais = { 'a': '1', 'e': '2', 'i': '3', 'o': '4', 'u': '5' };
  let encodFrase = '';

  for (let x = 0; x < frase.length; x++) {
    const letra = frase[x];
    if (vogais[letra]) {
      encodFrase += vogais[letra];
    } else {
      encodFrase += letra;
    }
  };

  return encodFrase;
  // seu código aqui
}
console.log(encode("hi there!"));

function decode(frase) {
  const vogais = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' };
  let decodeFrase = '';

  for (let x = 0; x < frase.length; x++) {
    const letra = frase[x];
    if (vogais[letra]) {
      decodeFrase += vogais[letra];
    } else {
      decodeFrase += letra;
    }
  };

  return decodeFrase;
  // seu código aqui
}
console.log(decode("h3 th2r2!"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
