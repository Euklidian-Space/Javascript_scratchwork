function *factorial(n) {
  var product = 1;
  for(var i = 1; i <=n ; i++) {
    product *= i;
    yield product;
  }
}

for (var n of factorial(5)) {
  console.log(n);
}