// Escribir una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en una matriz
// Consejo: es posible que desee cambiar el tipo de número para la división
function splitDigits(a) {
  return String(a).split('');
}
console.log(splitDigits(193278));

// [1,2,3,4].map(item => item * 2)  ====> 2,4,6,8
