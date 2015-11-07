function time_difference(str) {
  var num_str = "0123456789";
  /*var data_scrub = str.split("").filter(function(elem) {
    return num_str.indexOf(elem) >= 0;
  });*/

  var data_scrub = str.split("-");
  var military_time = [to_milit_time(data_scrub[0]),to_milit_time(data_scrub[1])];
  var difference_in_mins = military_time.map(function(elem){
    
  });



}

function to_milit_time(str) { debugger;
  var looper = str.indexOf(":");
  var colon_split = str.split(":");
  var calc_str = [];
  if (str.indexOf("p") >= 0) {
    for(var i = 0; i < looper; i++) {
      calc_str.push(str[i]);
    }
    calc_str = calc_str.join("");

    var militarized = parseInt(calc_str) + 12;
    var colon_split_scrub = colon_split[1].toString();
    var last_two_char_pop = colon_split_scrub.substring(0, colon_split[1].length - 2);
    return militarized + ":" + last_two_char_pop;

  } else {
    return str.substring(0,str.length - 2);
  }

}

console.log(to_milit_time("1:00pm"));
console.log(to_milit_time("10:00am"));
