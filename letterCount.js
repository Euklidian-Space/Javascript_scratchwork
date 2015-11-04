function letter_count(str){ debugger;
  var chk_str = [];
  var count = 0;
  for(var i = 0; i < str.length; i++){

    for(var j = 0; j < chk_str.length; j++){
      if(chk_str[j] === array[i]) count++;
      chk_str.push(array[i]);
    }


  }
  return count;
}



function LetterCountI(str) { debugger;

  // code goes here
  var data_scrubbed_str = str.split(" ");
  var repeat_count = {};
  var largest = "";

  for(var i = 0; i < data_scrubbed_str.length; i++){
  	repeat_count[data_scrubbed_str[i]] = letter_count(data_scrubbed_str[i]);
  }

  var keys = Object.keys(repeat_count);

  for(var j = 0; j < keys.length; j++) {
    if(obj[keys[j]] >= obj[keys[j + 1]]) {
        largest = keys[j]
    } else {
    	largest = keys[j + 1];
    }

  }

  return largest;


}

LetterCountI("Hello apple pie");
