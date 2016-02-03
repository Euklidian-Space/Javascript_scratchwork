var adjust = function (coin,price) {
  // if (price % coin === 0){
  //   return price;
  // } else if (price < coin) {
  //   price = coin;
  //   return adjust(coin,price);
  // } else {
  //   return adjust(coin, price + 1);
  // }
  
  while (1) {
    if(price % coin === 0) {
      return price;
    } else {
      price++;
    }
  }
  
}


//console.log(adjust())

module.exports = adjust;
