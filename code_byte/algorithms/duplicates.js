'use strict';

let dup = arr => {
  let hash = arr.reduce((prev,next) => {
    if (prev.hasOwnProperty(next)) {
      prev[next] += 1;
    } else {
      prev[next] = 1;
    }
    return prev;
  }, {});
  
  for (let key in hash) {
    if(hash[key] > 1) return parseInt(key);
  }
  return null;
}

module.exports = dup;
