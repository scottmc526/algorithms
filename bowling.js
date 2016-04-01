var score = ['X', '9/', 'X', '8']


function calcScore (input) {
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] === 'X') {
      total += 10
    }
  }
}
