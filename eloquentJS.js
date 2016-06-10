//write a function that thakes two arguments and returns the minimum
function minimum (x,y){
  return x > y ? y : x;
}
// console.log(minimum(4.2,4.1));

// write a recursive function that takes a number and prints out whether it is even or odd (only works to 30000)
function isEven (num) {
 if (num == 0) {
   return 'Even'
 } else if (num == 1) {
   return 'Odd'
 } else if (num < 0) {
   return isEven(-num)
 } else {
   return isEven (num - 2)
 }
}
// same isEven function but less dumb

function Even (n) {
  return n % 2 === 0 ? 'Even' : 'Odd'
}

Even(9);

//Write a function countChar that takes a string and a character as arguments. The function should count the amount of specified characters in the string

function countChar (string, char) {
  var arr = string.split('')
  var counter = 0;
  arr.forEach(function(item) {
    if (item === char) {
      counter++
    }
  })
  return counter
}

console.log(countChar('Hello', 'l'));
