function second_high_low(array){
  var sorted_arr = array.sort(function(a,b){
    return a - b;
  });

  var second_highest = sorted_arr[sorted_arr.length - 2];
  var second_lowest = sorted_arr[1];
  return [second_highest,second_lowest];

}

console.log(second_high_low([5,3,4,2,1,6,9,7,10]));
