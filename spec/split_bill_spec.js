describe('SplitTheBill',function(){
  
  var Split = require("../Code_wars/splitBill");
  
  it('should pass the following cases', function(){
    expect(Split({A: 20, B: 15, C: 10})).toEqual({A: 5, B: 0, C: -5});
    expect(Split({A: 40, B: 25, X: 10})).toEqual({A: 15, B: 0, X: -15});
  });

});


