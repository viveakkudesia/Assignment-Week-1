/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let normalizedString = str.toLowerCase();
  
  // Remove non-alphanumeric characters
   normalizedString = normalizedString.replace(/[^a-z0-9]/g, '');
  
  // Reverse the string
  let reversedString = normalizedString.split('').reverse().join('');
  
  // Check if the original and reversed strings are the same
  return normalizedString === reversedString;
  return true;
}

module.exports = isPalindrome;
