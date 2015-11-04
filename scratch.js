obj = {"a":1,"b":2,"c":3};
var keys = Object.keys(obj);

//console.log(keys);
var largest = "";
for(var i = 0; i < keys.length - 1; i++) {
  //debugger;
  if(obj[keys[i]] >= obj[keys[i + 1]]) {
      largest = keys[i]
  } else {
  	largest = keys[i + 1];
  }


}

//console.log(largest);
console.log(largest);
console.log(typeof(largest));
console.log(letter_count("hello"));



function letter_count(str){ debugger;
  var chk_str = [];
  var count = 0;

  for(var i = 0; i < str.length; i++){

    for(var j = 0; j < chk_str.length + 1; j++){
      if(chk_str[j] === str[i]) count++;
      chk_str.push(str[i]);
    }


  }
  return count;
}
