//funciton takes a string and capitalizes the first letter of each word and returns the rest of the world in lower case

function titleCase (str){
  var word = str.split(' ');
  var newWordArray = [];
  var firstLetter;

  for (var i = 0; i < arr.length; i++) {
    firstLetter = word[i].slice(0,1).toUpperCase();
    newWordArray.push(firstLetter + word[i].slice(1,word[i].length).toLowerCase())
  }
  return newWordArray.join(' ');
}


titleCase('sHoRt AnD sToUt')
