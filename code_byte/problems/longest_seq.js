'use strict';

exports.longestSeq = function (arr) { console.log(arr);
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    let temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (temp < arr[j]) {
        count += 1;
        temp = arr[j];
      }
    }
    lengths.push(count);
  } 
  return Math.max.apply(null, lengths);
};
  