'use strict';

let consecutive = arr => {
  let result = [];
  let min = arr.reduce((prev, next) => prev < next ? prev : next);
  let max = arr.reduce((prev, next) => prev > next ? prev : next);
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

module.exports = consecutive;