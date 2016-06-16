//write a function to determine if the input is a palindrome

function isPalindrome (str) {
  var revStr  = str.split('').reverse().join('')
  return str === revStr ? true : false
}

console.log(isPalindrome('opopopopopopopopopopo'));
