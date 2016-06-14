//write a function to determine if the input is a palindrome

function isPalindrome (str) {
  var arr  = str.split('')
  var rev = []
  for (var i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i])
  }
  rev = rev.join('')
  if (rev === str) {
    return true
  } else {
    return false
  }

}

console.log(isPalindrome('helleh'));
