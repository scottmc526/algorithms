//returns an array of length equal to num
function createArray (num){
 var arr = []
 for (var i = 1; i <= num; i++) {
   arr.push(i)
 }
 return arr
}


//squares each element in array and returns sum of those squares
function sumSquares(n) {
  var total = 0;
  createArray(n).reduce(function (x, x) {total += x * x}, 0)
  return total;
}

console.log(sumSquares(40));
