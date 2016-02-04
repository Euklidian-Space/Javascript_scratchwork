describe('Sum Consecutives', function(){
  var SumConsecutives = require("../Code_wars/SumConsecutives");
  it('should pass the following cases',function(){
    expect(SumConsecutives([1,4,4,4,0,4,3,3,1])).toEqual([1,12,0,4,6,1]);
    expect(SumConsecutives([1,1,7,7,3])).toEqual([2,14,3]);
    expect(SumConsecutives([-5,-5,7,7,12,0])).toEqual([-10,14,12,0]);
    expect(SumConsecutives([3,3,3,3,1])).toEqual([12, 1]);
  });
});