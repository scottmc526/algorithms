//function accepts a string and removes all non aplha numeric characters and spaces and then checks if the string is a palindrome. 

function palindrome(str) {
  var regex = /([A-Za-z0-9])+/g;
  var nonAlphaCharsRemoved = str.match(regex).join('').toLowerCase();
  var spacesRemoved = nonAlphaCharsRemoved.replace(/ /g,'');
  var reversed = spacesRemoved.split('').reverse().join('');
  return spacesRemoved === reversed;
}

palindrome("A man, a plan, a canal. Panama")
