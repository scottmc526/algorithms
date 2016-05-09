//The goal of this problem was to take multiple arrays and return a single array with all duplicates removed

//make an array of arguments
function makeArray (x) {
  var arr = [];
  for (var i = 0; i < x.length; i++) {
    arr.push(x[i]);
   }
   return arr;
}

//make single array out of array of arrays and remove dupes
function uniteUnique() {
 var arrays = makeArray(arguments);;
 var merged = [].concat.apply([], arrays);
 uniqueArray = merged.filter(function(item, pos) {
    return merged.indexOf(item) == pos;
  })
  return uniqueArray
}

console.log(uniteUnique([1,2,4,5], [1,3,5], ['a', 'b', 2, 2]));
