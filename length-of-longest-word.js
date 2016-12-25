//function that takes a string and returns the length of the longest word
function findLongestWord(str) {
  var longest = 0;
  var arr = str.split(' ');
  arr.forEach((word) => {
    if(word.length > longest) {
      longest = word.length;
    }
  })
  return longest
}

findLongestWord("The quick brown fox jumped over the lazy dog");
