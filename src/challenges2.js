// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(a, b, c) {
  let resultado = true;

  if(a < b + c && a > Math.abs((a-b) - (a-c))) {
    resultado = true
  } else if (b < a + c && b > Math.abs((b-a) - (b-c))){
    resultado = true
  } else if (c < a + b && c > Math.abs((c-a) - (c-b))){
    resultado = true
  } else {
    resultado = false
  }
  return resultado

}
console.log(triangleCheck(20, 14, 8))

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
