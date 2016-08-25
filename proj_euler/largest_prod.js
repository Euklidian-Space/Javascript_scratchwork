'use strict';



let largest_prod = arr => {
  let max_prod = 1, length = 2;
  for (let i in range(0, arr.length)) {
    let w = i, w_prod = 1, counter = 0;
    let e = i, e_prod = 1;
    while (true) {
      if (w >= 0 && counter < length) w_prod *= arr[w];
      if (e < arr.length && counter <= length) e_prod *= arr[e];
      if (w < 0 && e >= arr.length || counter > length) break;
      w -= 1; e += 1; counter += 1;
    }
    let candidate = w_prod > e_prod ? w_prod : e_prod;
    max_prod = max_prod < candidate ? candidate : max_prod;
  }
  return max_prod;
};

function *range(min, max) { //[min,max)
  while (min < max) {
    yield min;
    min += 1;
  }
}



module.exports = largest_prod;