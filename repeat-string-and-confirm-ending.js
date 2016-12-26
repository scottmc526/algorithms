//function that repeats a string a certian amount of times as long as num is positive
function repeatStringNumTimes(str, num) {
  return num < 0 ? '' : str.repeat(num);
}

repeatStringNumTimes("abc", 3);

//function returns a boolean which determines whether or not a string ends with the target argument

function confirmEnding(str, target) {
  return str.substring(str.length, str.length - target.length) === target;
}

confirmEnding("Bastian", "ian");
