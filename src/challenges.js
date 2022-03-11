// Desafio 1 - Iniciando
function compareTrue(a, b){

  if (a === true && b === true) {
    return true;
  } else {
    return false
  }

};
/* console.log(compareTrue(true, true)) */

// Desafio 2

function calcArea(base, heigth) {

  if (base > 0 && heigth > 0) {
    return (base * heigth) / 2
  }
}

/* console.log(calcArea(5, 2)) */

// Desafio 3
var resultado = []

function splitSentence(algo) {
  for (palavra in algo) {
    resultado = algo.split(" ")

  }
  return resultado
}
/* console.log(splitSentence('Caio Pereira Antunes'))
console.log(splitSentence('go trybe')) */


// Desafio 4

function concatName(array) {
  for (let i = 0; i < array.length; i += 1) {

    return array[array.length - 1] + ", " + array[0]

  }
}
/* console.log(concatName(['Caio', 'Pereira', 'Antunes', 'Elaine'])) */



// Desafio 5
function footballPoints(wins, empates) {
  if (wins > 0 || empates > 0) {
    return wins * 3 + empates * 1
  } else if (wins === 0 && empates === 0) {
    return 0
  } else {
    return 'error de valor'
  }
}

/* console.log(footballPoints(1, 2)) */

// Desafio 6



function highestCount(numeros) {
let maiorNumero = numeros[0];
let repete = 0;

  for(let i = 0; i < numeros.length; i+=1){
    if(maiorNumero < numeros[i]){
      maiorNumero = numeros[i]
    }
  }

  for(let i = 0; i < numeros.length; i+=1){
    var valorAtual = numeros[i]
    if (valorAtual === maiorNumero){
      repete+=1
    }
  }
  return repete
}
    
console.log(highestCount([0, 9, 2, 3, 9, 5, 7, 9, 9]))
console.log(highestCount([0, 0, 0]))
console.log(highestCount([0, 10, 2, 3, 9, 5, 7, 9, 9]))
console.log(highestCount([10, 10, 2, 3, 9, 5, 7, 9, 9]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
 
function fizzBuzz(arrayNumeros) {
}
// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

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
