'use strict';

let stockProfit = arr => {
  let max_profit = -1;
  let buy_price = 0;
  let sell_price = 0;
  let change_buy_index = true;
  for(let i = 0; i < arr.length; i++) {
    sell_price = arr[i + 1];
    if (change_buy_index) buy_price = arr[i];
    if (buy_price > sell_price) {
      change_buy_index = true;
      continue;
    } else {
      max_profit = sell_price - buy_price > max_profit ? sell_price - buy_price : max_profit;
      change_buy_index = false;
    }
  }
  return max_profit;
}

module.exports = stockProfit;