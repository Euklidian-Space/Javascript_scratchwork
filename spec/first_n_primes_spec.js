describe('FirstNPrimes', function(){
  
  it('should pass the following cases', function(){
    
    var firstNPrimes = require("../Code_wars/FirstNPrimes");
    
    expect(firstNPrimes.first(1)).toEqual([2]);
    expect(firstNPrimes.first(2)).toEqual([2,3]);
    expect(firstNPrimes.first(5)).toEqual([2, 3, 5, 7, 11]);
    expect(firstNPrimes.first(20).slice(15,20)).toEqual([53, 59, 61, 67, 71]);
    expect(firstNPrimes.first(100)[99]).toEqual(541);
    expect(firstNPrimes.first(80)[79]).toEqual(409);
    
  });
  
});