function time_difference(str) {

  var data_scrub = str.split("-");
  var military_time = [to_milit_time(data_scrub[0]),to_milit_time(data_scrub[1])];

  return difference_in_mins = str_difference(military_time[0],military_time[1]);



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

function str_difference (str1,str2) { debugger;
  var str1_split = str1.split(":");
  var str2_split = str2.split(":");
  if ((str2_split[0] - str1_split[0]) < 0) {
    var diff_in_hours = str1_split[0] - str2_split[0] + 24;
    return ((diff_in_hours * 60) + (str1_split[1] - str2_split[1]));
  }
  return ((str1_split[0] - str2_split[0]) * 60 + (str1_split[1] - str2_split[1]));


}


//console.log(to_milit_time("1:00pm"));
//console.log(to_milit_time("10:00am"));
console.log(str_difference("13:00","12:00"));
