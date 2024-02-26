/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function getAlphabets(str) {
  // Create a regular expression to match only alphabets
  const regex = /^[a-zA-Z]+$/;

  // Use the match() method to find all the alphabets in the string
  const matches = str.match(regex);

  // If there are no matches, return an empty string
  if (!matches) {
    return "";
  }

  // Otherwise, return the string of all the alphabets
  return matches.join("");
}

function isPalindrome(str) {
  if (!str) return true;

  const sanitisedString = getAlphabets(str);

  if (
    sanitisedString.toLowerCase() ==
    sanitisedString.toLowerCase().split("").reverse().join("")
  )
    return true;

  return false;
}

module.exports = isPalindrome;
