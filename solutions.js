function sum(a, b) {

  if (isNaN(a) || isNaN(b)) {
      return "Por favor, ingresa números válidos.";
  }

  var resultado = a + b;

  return resultado;
}

var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));

console.log(sum(num1, num2));


function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
      return "Por favor, ingresa un número entero no negativo.";
  }

  var resultado = 1;
  for (var i = 2; i <= n; i++) {
      resultado *= i;
  }

  return resultado;
}

var num = parseInt(prompt("Ingresa un número para calcular su factorial:"));

console.log(factorial(num));



function findLargest(arr) {

  if (!Array.isArray(arr) || arr.length === 0) {
      return "Por favor, ingresa un array válido.";
  }

  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          max = arr[i];
      }
  }

  return max;
}

var input = prompt("Ingresa los elementos del array separados por comas:");
var array = input.split(",").map(function (item) {
  return parseFloat(item);
});

console.log("El número más grande es:", findLargest(array));




function countVowels(str) {

  if (typeof str !== 'string') {
      return "Por favor, ingresa una cadena válida.";
  }

  str = str.toLowerCase();


  var vowels = 'aeiou';


  var count = 0;


  for (var i = 0; i < str.length; i++) {

      if (vowels.indexOf(str[i]) !== -1) {
          count++;
      }
  }


  return count;
}


var inputString = prompt("Ingresa una cadena para contar las vocales: ");


console.log("El número de vocales en la cadena es: ", countVowels(inputString));



function isPrime(n) {

  if (!Number.isInteger(n) || n <= 1) {
      return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false;
      }
  }

  return true;
}

var num = parseInt(prompt("Ingresa un número para verificar si es primo: "));

console.log("El número ingresado es primo? ", isPrime(num));


module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
