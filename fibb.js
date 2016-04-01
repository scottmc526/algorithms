//DESIGN A PROGRAM THAT WILL OUTPUT THE FIBONACCI SEQUENCE OF THE INDEX PROVIDED

//Indicies
// 1 1 2 3 5 8 13 21 34

function fibb(n) {
  var arr = [0,1]
  if (n < 2) {
    return n
  } else {
    for (var i = 0; i < n - 1; i++) {
    arr.push(arr[i] + arr[i+1])
    }
  }
  return arr[arr.length - 1]
}

function fibb_recursion(n) {
  if (n < 2) {
    return n
  } else {
    return fibb_recursion(n - 2) + fibb_recursion(n - 1)
  }
}


console.log(fibb(50));
// console.log(fibb_recursion(5));
function xor(a, b) {
  if(a == false && b == false) {
  return false
  } else if (a == true && b == true) {
  return false;
  } else if (a == true || b == true) {
  return true;
  }
}
