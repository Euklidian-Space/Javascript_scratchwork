function foo() {
  var bar;
  quux = 'GLOBAL';
  function zip() {
    var quux;
    bar = true;
  }
  return zip;
}