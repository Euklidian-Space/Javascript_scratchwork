describe('sigma1', function(){
  it('should pass the following cases', function(){
    var EqualSigma = require("../Code_wars/EqualSigma.js");
    
    expect(EqualSigma(100)).toEqual(0);
    expect(EqualSigma(738)).toEqual(528);
    expect(EqualSigma(917)).toEqual(1353);
    expect(EqualSigma(1500)).toEqual(1353);
  });
});