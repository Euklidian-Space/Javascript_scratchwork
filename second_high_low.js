function second_high_low(array){ debugger;
  var sorted_arr = array.sort(function(a,b){
    return a - b;
  });

  var max = sorted_arr[sorted_arr.length - 1];
  var min = sorted_arr[0];

  for(var i = sorted_arr.length - 2; i >= 0; i--) {
    if(sorted_arr[i] < max) {
      var second_max = sorted_arr[i];
      break;
    }
  }

  for(var j = 1; j < sorted_arr.length; j++) {
    if(sorted_arr[j] > min) {
      var second_min = sorted_arr[j];
      break;
    }
  }

  return second_min.toString() + " " + second_max.toString();

}

//console.log(second_high_low([7, 7, 12, 98, 106]));
console.log([4,90]);
