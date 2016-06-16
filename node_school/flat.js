function *element_gen(arr) {
  for(var i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

function *flat(arr) {
  for(var elem in element_gen(arr)) {
    if (Array.isArray(elem)) {
      yield *flat(elem);
    } else {
      yield elem;
    }
  }
}

var A = [1, [2, [3, 4], 5], 6];

for (var f of flat(A)) {
  console.log( f );
}

