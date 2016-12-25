//function takes an array of arrays that contain numbers. Returns one array containing the largest number from each subarray

function largestOfFour(input) {
  var temp = 0;
  var result = [];
  for (var outterArray = 0; outterArray < input.length; outterArray++) {
    for (var innerArray = 0; innerArray < input[outterArray].length; innerArray++) {
      if (input[outterArray][innerArray] > temp) {
        temp = input[outterArray][innerArray]
      }
    }
    result.push(temp);
    temp = 0;
  }
  return result;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
