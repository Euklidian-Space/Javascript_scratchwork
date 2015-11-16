function mean_mode_equal(array) {
  /*
  var sorted_asc = array.sort(function(a,b){
    return a-b;
  });
  */

  var mean = array.reduce(function(prev,next){prev + next;})/array.length;


  var obj = objectify(array);

  var freq = frequency(obj,array);
  var mode = Object.keys(freq).reduce(function(prev,next){
    return freq[prev] > freq[next] ? prev:next;
  });

  if (mean === mode) return 1;
  return 0;

}

function objectify(array) {
  var histo = {};
  histo[array[0]] = 0;
  for (var i = 1; i < array.length; i++) {
    if (histo[array[i]] !== histo[array[i - 1]]) {
      histo[array[i]] = 0;
    }
  }

  return histo
}

function frequency(obj,array) {
  for(var i = 0; i < array.length; i++) {
    obj[array[i]] += 1;
  }

  return obj;
}

console.log(mean_mode_equal([1,2,3]));
