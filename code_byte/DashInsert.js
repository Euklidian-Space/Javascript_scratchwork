function DashInsert(str) { debugger;
  var to_str = str.toString();
  var array_str = to_str.split("");

  var i = 0;
  while i < to_str.length{
    if((to_str[i] % 2 != 0) && (to_str[i + 1] % 2 != 0)) {
      array_str.splice(i+1,0,"-");
      i += 2;
    } else {
      i++;
    }
  }
  return array_str.join("");
  //return str;
}

console.log(DashInsert(99946));
console.log(DashInsert(56730))
