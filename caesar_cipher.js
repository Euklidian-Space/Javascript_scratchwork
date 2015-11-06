function CaesarCipher(str,num) { debugger;

  var alph = "abcdefghijklmnopqrstuvwxyz";
  var cap_alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cipher = "";
  for(var i = 0; i < str.length; i++){
  	if(alph.indexOf(str[i]) >= 0) {
      cipher += alph[alph.indexOf(str[i]) + num];
    } else {
      cipher += str[i];
    }
  }

  return cipher;

}

//console.log(CaesarCipher("Hello", 4));
