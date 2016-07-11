function countWords(inputwords) {
  return inputwords.reduce(function(dict, word){
    dict[word] = (dict[word] || 0) + 1;
    return dict;
  }, {});
}

module.exports = countWords;