// Desafio 1 - Iniciando

function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
/* console.log(compareTrue(true, true)) */

// Desafio 2

function calcArea(base, heigth) {
  if (base > 0 && heigth > 0) {
    return (base * heigth) / 2;
  }
}

/* console.log(calcArea(5, 2)) */

// Desafio 3
var resultado = [];

function splitSentence(algo) {
  for (i in algo) {
    resultado = algo.split(' ');
  }
  return resultado;
}
/* console.log(splitSentence('Caio Pereira Antunes'))
console.log(splitSentence('go trybe')) */

// Desafio 4

function concatName(array) {
  for (let i = 0; i < array.length; i += 1) {
    return array[array.length - 1] + ', ' + array[0];
  }
}
/* console.log(concatName(['Caio', 'Pereira', 'Antunes', 'Elaine'])) */

// Desafio 5
function footballPoints(wins, empates) {
  if (wins > 0 || empates > 0) {
    return wins * 3 + empates * 1;
  } else if (wins === 0 && empates === 0) {
    return 0;
  } else {
    return 'error de valor';
  }
}

/* console.log(footballPoints(1, 2)) */

// Desafio 6

function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let repete = 0;

  for (let i = 0; i < numeros.length; i += 1) {
    if (maiorNumero < numeros[i]) {
      maiorNumero = numeros[i];
    }
  }

  for (let i = 0; i < numeros.length; i += 1) {
    var valorAtual = numeros[i];
    if (valorAtual === maiorNumero) {
      repete += 1;
    }
  }
  return repete;
}

/* console.log(highestCount([0, 9, 2, 3, 9, 5, 7, 9, 9]))
console.log(highestCount([0, 0, 0]))
console.log(highestCount([0, 10, 2, 3, 9, 5, 7, 9, 9]))
console.log(highestCount([10, 10, 2, 3, 9, 5, 7, 9, 9]))
 */
// Desafio 7
//verificar posiçao de cada um
// ver distancia entre mouse e cat
function catAndMouse(mouse, cat1, cat2) {
  var resultado = '';
  if (Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)) {
    resultado = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}
/* 
console.log(catAndMouse(0, 3, 2)) // 2
console.log(catAndMouse(10, 4, 22)) // 1
console.log(catAndMouse(0, 6, 12)) // 1
console.log(catAndMouse(0, 6, 6)) // nd
console.log(catAndMouse(0, 5, 6)) // 1
console.log(catAndMouse(0, -6, 6)) // nd
console.log(catAndMouse(1, 0, 2)) */ //nd

// Desafio 8

function fizzBuzz(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

/* console.log(fizzBuzz([2, 5, 6, 10, 15]))
console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log(fizzBuzz([7, 9]))
console.log(fizzBuzz([9, 25])) */

// Desafio 9
function encode(string) {
  let resultado = string.split('')

  for (let i = 0; i < string.length; i += 1) {
    if (resultado[i] === 'a' || resultado[i] === 'A') {
      resultado[i] = 1
    } else if (resultado[i] === 'e' || resultado[i] === 'E') {
      resultado[i] = 2
    } else if (resultado[i] === 'i' || resultado[i] === 'I') {
      resultado[i] = 3
    } else if (resultado[i] === 'o' || resultado[i] === 'O') {
      resultado[i] = 4
    } else if (resultado[i] === 'u' || resultado[i] === 'U') {
      resultado[i] = 5
    }
  }
  return resultado.join('')
}

/* console.log(encode('he there'));
console.log(encode('Caio Pereira Antunes'));
 */
function decode(palavra) {
  let resposta = palavra.split('')

  for (i in palavra) {
    if (resposta[i] === '1') {
      resposta[i] = 'a'
    } else if (resposta[i] === '2') {
      resposta[i] = 'e'
    } else if (resposta[i] === '3') {
      resposta[i] = 'i'
    } else if (resposta[i] === '4') {
      resposta[i] = 'o'
    } else if (resposta[i] === '5') {
      resposta[i] = 'u'
    }
  }
  return resposta.join('')
}
/* 
console.log(decode('h2 th2r2'));
console.log(decode('C134 P2r23r1 1nt5n2s')); */




// Desafio 10

function techList(array, nome) {
let novoArray = array.sort()
let nomes = nome


  for(let i = 0; i < array.length; i += 1){
   var newObject = {
     tech: novoArray[i],
     nome: nomes,
   }
   return newObject
  }
  

}

console.log(techList(["java", "node", "seila"], "caio"))






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
  techList,
};
