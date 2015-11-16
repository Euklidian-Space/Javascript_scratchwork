function time_difference(str) { //debugger;

  var data_scrub = str.split("-");
  var military_time = [to_milit_time(data_scrub[0]),to_milit_time(data_scrub[1])];

  return difference_in_mins = str_difference(military_time[0],military_time[1]);



}

function to_milit_time(str) { //debugger;
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

/*need to add case for negative minutes*/
function str_difference (str1,str2) { debugger;
  var str1_split = str1.split(":");
  var str2_split = str2.split(":");
  var time1 = parseInt(str1_split[0]) + parseInt(str1_split[1]) / 60;
  var time2 = parseInt(str2_split[0]) + parseInt(str2_split[1]) / 60;

  if((time2 - time1) < 0) return (time2 - time1 + 24) * 60;

  return (time2 - time1) * 60;


}


//console.log(to_milit_time("1:00pm"));
//console.log(to_milit_time("10:00am"));
//console.log(str_difference("13:00","12:00"));
//console.log(time_difference("12:30pm-12:00am"));
//console.log(time_difference("1:23am-1:08am"));
//console.log(time_difference("2:00pm-3:00pm"));
//console.log(time_difference("11:00am-2:10pm"));
