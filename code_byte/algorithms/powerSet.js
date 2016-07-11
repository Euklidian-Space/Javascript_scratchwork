'use strict';

// let powerSet = (arr) => {
//   let res = [[]];
//   for (let x of arr) {
//     res.forEach(elem => res.push(elem.push(x)));
//   }
//   return res;
// };

let powerSet = arr => {
  return arr.reduceRight((prev, next) => {
          return prev.concat(prev.map(elem => [next].concat(elem)));   
         }, [[]]);  
};

module.exports = powerSet;