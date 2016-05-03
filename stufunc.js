Array.prototype.backwardsForEach = function(callback){
//callback accepts four variables item, index, previous sum, previous 3 sums
  var previousItem;
  var previousThree = [0, 0, 0];
  for(var i = this.length - 1; i > -1; i--){
    if(i ===this.length - 1){
      previousItem = 0;
    }else{
      previousItem = this[i+1];
    }
    var threeSums = previousThree.reduce(function(prev, curr){
      return prev + curr;
    })
    previousThree.unshift(this[i]);
    previousThree.pop()
    callback(this[i], i, previousItem, threeSums)
  }
}


var arr = [7, 2, 8, 1];


console.log(arr);

arr.backwardsForEach(function(item, i, previousSum, threeSums){
  console.log(item, " ", i, " ", previousSum, " ", threeSums);
})
