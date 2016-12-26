//function that repeats a string a certian amount of times as long as num is positive
function repeatStringNumTimes(str, num) {
  return num < 0 ? '' : str.repeat(num);
}

repeatStringNumTimes("abc", 3);
