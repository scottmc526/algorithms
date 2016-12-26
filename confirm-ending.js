//function returns a boolean which determines whether or not a string ends with the target argument

function confirmEnding(str, target) {
  return str.substring(str.length, str.length - target.length) === target;
}

confirmEnding("Bastian", "ian");
