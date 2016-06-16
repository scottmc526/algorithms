//Write a function arrayToList that builds up a data structure when given [1, 2, 3] as argument

function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    }
  }
  return list
}

console.log(arrayToList([50,23,34]));
