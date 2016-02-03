function semicolonSeparationToCommaSeparation(input) {
  var str_split = input.split(';');
  var new_str = '';
  
  for(var i of str_split) {
    
   if (i === str_split[str_split.length - 1]) {
     new_str += i;
   } else {
     new_str =  new_str + i + ",";
   }
   
  }
  
  return new_str;
}

console.log(semicolonSeparationToCommaSeparation('1;2;3'));