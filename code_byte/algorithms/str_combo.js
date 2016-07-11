'use strict';

let combo = function (str, all) {
  all = typeof all === 'undefined' ? [""] : all;
  console.log(all);
  if (str.length === 0) return all;
  
  if(str[0] === "?") {
    
    let n_all = [];
    
    all.forEach(elem => {
      n_all.push(elem + "0");
      n_all.push(elem + "1");
    });
    
    
    return combo(str.slice(1, str.length), n_all);
    
  } else {
    
    return combo(str.slice(1, str.length), all.map(elem => elem + str[0]));
    
  }
};

module.exports = combo;