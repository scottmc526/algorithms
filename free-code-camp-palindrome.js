//function accepts a string and removes all non aplha numeric characters and spaces and then checks if the string is a palindrome.

function palindrome(str) {
  var regex = /([A-Za-z0-9])+/g;
  var correctedString = str.match(regex).join('').toLowerCase().replace(/ /g, '');
  var reversed = correctedString.split('').reverse().join('');
  return correctedString === reversed;
}

palindrome("A man, a plan, a canal. Panama")
