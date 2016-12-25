//funciton takes a string and capitalizes the first letter of each word and returns the rest of the world in lower case

function titleCase (str){
  var words = str.split(' ');
  return newWordArray = words.map((word) => {
    return word.slice(0,1).toUpperCase() + word.slice(1, word.length).toLowerCase();
  }).join(' ')
}


titleCase('sHoRt AnD sToUt')
