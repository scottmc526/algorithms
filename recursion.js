var fruits = {
  1:'kiwi',
  2:'pear',
  3:'kiwi',
  4:'banana',
  5:'melon',
  6:'banana',
  7:'melon',
  8:'pineapple',
  9:'apple',
  10:'pineapple'
}

function SubtractSum(n){
  var total = 0;
  var arr = n.toString().split('');
  for (var i = 0 ; i < arr.length; i++) {
    total += +arr[i]
  }
  var newNum = n - total;
  console.log(newNum);
  if (newNum < 11) {
   return fruits[newNum]
  } else {
    SubtractSum(newNum)
  }
}

console.log(SubtractSum(1000000))
