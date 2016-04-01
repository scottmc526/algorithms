function newStuff (num){
 var arr = []
 for (var i = 1; i <= num; i++) {
   arr.push(i)
 }
 return arr
}

function sumSquares(n) {
  var total = 0;
  newStuff(n).reduce(function (a, a) {total += a * a}, 0)
  return total;
}

console.log(sumSquares(100000000));
