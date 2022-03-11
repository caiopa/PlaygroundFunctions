// Desafio 1 - Iniciando
function compareTrue(a, b) {
  
    if(a === true && b === true){
      return true
    } else {
      return false
    }
    
}
console.log(compareTrue(true, true)) 

// Desafio 2

function calcArea(base, heigth) {

    if (base > 0 && heigth > 0) {
      return (base * heigth) / 2
    }
}

console.log(calcArea(5, 2))

// Desafio 3
var resultado = []
function splitSentence(algo) {
    for ( palavra in algo){
      resultado = algo.split(" ")
      
    }
    return resultado
  }
console.log(splitSentence('Caio Pereira Antunes'))
console.log(splitSentence('go trybe'))


// Desafio 4



function concatName(array) {
  for (let i = 0; i < array.length ; i += 1){
    
    return array[array.length - 1] + " " + array[0]

    } 
} 
console.log(concatName(['Caio', 'Pereira', 'Antunes', 'Elaine']))



// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
