function pyramid (height) {

  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }

    for (var k = 1; k <= i*2-1; k++) {
      row += '#';
    }

    console.log(row);
  }
}

pyramid(3);
