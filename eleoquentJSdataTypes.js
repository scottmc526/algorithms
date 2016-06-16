//Write a function arrayToList that builds up a data structure when given [1, 2, 3] as argument

function arrayToList(arr) {
  var list = {
    value : arr[0],
    rest: {
      value: arr[1],
      rest: {
        value: arr[2],
        rest: null
      }
    }
  }
  return list
}

console.log(arrayToList([50,23,34]));
