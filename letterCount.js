function letter_repeat_counter(str){ //debugger;
  var chk_str = [];
  var count = 0;

  for(var i = 0; i < str.length; i++){
    chk_str.push(str[i]);
    for(var j = i + 1; j < str.length; j++){
      if(chk_str[i] === str[j]) count++;

    }


  }
  return count;
}


function LetterCountI(str) { debugger;

  // code goes here
  var data_scrubbed_str = str.split(" ");
  var repeat_count = {};


  for(var i = 0; i < data_scrubbed_str.length; i++){
  	repeat_count[data_scrubbed_str[i]] = letter_repeat_counter(data_scrubbed_str[i]);
  }

  var keys = Object.keys(repeat_count);
  var largest = keys[0];

  for(var j = 1; j < keys.length; j++) {
    if(repeat_count[keys[j]] > repeat_count[largest]) largest = keys[j];
  }

  if(repeat_count[largest] === 0) return -1;
  return largest;


}

//console.log(LetterCountI("Hello apple pie"));
//console.log(LetterCountI("No words"))
