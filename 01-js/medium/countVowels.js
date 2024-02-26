/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let countOfVowels = 0;
  if (!str) return countOfVowels;

  for (let s of str.toLowerCase().split("")) {
    if (vowels.includes(s)) countOfVowels += 1;
  }
  return countOfVowels;
}

module.exports = countVowels;
