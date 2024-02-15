// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Los datos de entrada no son adecuados";
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number' || n < 0 || Math.floor(n) !== n) {
    return "Los datos de entrada no son adecuados";
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Los datos de entrada no son adecuados";
  }
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados";
  }
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || n <= 1 || Math.floor(n) !== n) {
    return "Los datos de entrada no son adecuados";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
