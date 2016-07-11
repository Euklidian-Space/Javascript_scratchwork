function evenChars(string) { debugger;
  if (string.length < 2 || string.length > 100)
    return 'invalid string';
  var str_arr = string.split("");
  
  var even_elem = [];
  
  for(var i = 0; i < str_arr.length; i++) {
    if ((i + 1) % 2 === 0)
      even_elem.push(str_arr[i]);
  }
  
  return even_elem;
//keep coding!
}

console.log(evenChars("abcdefghijklm"));