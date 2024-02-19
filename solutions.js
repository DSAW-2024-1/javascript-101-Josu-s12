function sum(a, b) {

  var resultado = a + b;


  return resultado;
}


var num1 = 6;
var num2 = 9;

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

var num = 5;

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

var staticArray = [5, 10, 3, 8, 20, 15];

console.log("El número más grande es:", findLargest(staticArray));


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

var staticString = "Hello World";

console.log("El número de vocales en la cadena es:", countVowels(staticString));


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


var num = 29;

console.log("El número ingresado es primo?", isPrime(num));



module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
