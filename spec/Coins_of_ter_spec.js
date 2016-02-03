describe('CoinsOfTer', function(){
  var Coins = require('../Code_wars/CoinsOfTer');
  
  it('Should pass following cases', function(){
    expect(Coins(3,0)).toEqual(0);
    expect(Coins(3,1)).toEqual(3);
    expect(Coins(3,3)).toEqual(3);
    expect(Coins(3,6)).toEqual(6);
    expect(Coins(3,7)).toEqual(9);
    expect(Coins(3,-2)).toEqual(0);
    expect(Coins(3,-4)).toEqual(-3);
    
  });
  
  // it('Should return a number divisible by the coin', function() {
  //     for(var i = 0; i < 20; i++) {
  //       const coin = Math.max(1,Math.random());
  //       const price = Math.random();
        
  //       expect(Coins(coin,price) % coin).toEqual(0);
  //     }
  // });

  
});