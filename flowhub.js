//function that results in pyramid of h height
function pyramid (h) {

  for (var i = 1; i <= h; i++) {
    var row = '';

    for (var j = 1; j <= (h - i); j++) {
      row += ' ';
    }

    for (var k = 1; k <= i*2-1; k++) {
      row += '#';
    }

    console.log(row);
  }
}

pyramid(5);
