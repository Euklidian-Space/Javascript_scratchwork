// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 are in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

function isMerge(s, part1, part2) {
  let h = (part1 + part2).split('').reduce((hash, char) => {
    if (hash.hasOwnProperty(char)) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
    return hash;
  }, {});
  
  let ordering = {};
  
  s.split('').forEach((char, index) => {
    if (!ordering.hasOwnProperty(char)) ordering[char] = index;
    if (h.hasOwnProperty(char)) {
      h[char] -= 1;
    } else {
      h[char] = 1;
    }
  });
  
  for(let key in h) {
    if (h[key] != 0) return false;
  }
  
  return isWellOrdered(ordering, part1) && isWellOrdered(ordering, part2);
}

function isWellOrdered(order_hash, str) {
  return str == str.sort((a, b) => {
    if (order_hash[a] < order_hash[b]) return -1;
    if (order_hash[a] > order_hash[b]) return 1;
    return 0;
  });
}