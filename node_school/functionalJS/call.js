function duckCount() {
  var arg_arr = Array.prototype.slice(arguments);
  if (arg_arr.length === 0) return 0;
  return (Object.prototype.hasOwnProperty.call(arg_arr[0], 'quack') ? 1 + duckCount(arg_arr.slice(1, arg_arr.length - 1))
    : 0 + duckCount(arg_arr.slice(1, arg_arr.length - 1)));
    
}

module.exports = duckCount;