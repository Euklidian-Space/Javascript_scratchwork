'use strict';

exports.range = function(start, end, step) {
  let result = [];
  let dflt = arguments.length === 1;
  step = typeof step === 'undefined' ? 1 : step;
  for(let elem of _range((dflt ? 0 : start), (dflt ? arguments[0] : end), (dflt ? 1 : step))) {
    result.push(elem);
  }
  return result;
};
// let range = function(start, end, step) {
//   let result = [];
//   let dflt = arguments.length === 1;
//   step = typeof step === 'undefined' ? 1 : step;
//   console.log(step);
//   for(let elem of _range((dflt ? 0 : start), (dflt ? arguments[0] : end), (dflt ? 1 : step))) {
//     result.push(elem);
//   }
//   return result;
// };

function *_range(start, end, step) {
  if (step > 0) {
    let i = start;
    while (i < end) {
      yield i;
      i += step;
    }
  } else if(step === 0) {
    let temp = end - start;
    while (temp > 0) {
      yield start;
      temp -= 1;
    }
  }
}
