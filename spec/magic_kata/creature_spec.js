describe('Creature battles', function(){
  
  var battle = require("../../Code_wars/MagicKata/Creatures");
  
  var player1, player2, result;
  
  it('Expected 2 empty arrays when all creatures are killed.',function(){
    
    player1 = [[1,1]];
    player2 = [[1,1]];
    result = {'player1':[], 'player2':[]};
    expect(battle(player1,player2)).toEqual(result);
    
  });
  
  it("Expected player2 to have no creatures.", function() {
    player1 = [[2,2]]; player2 = [[1,1]];
    result = { 'player1': [2,2], 'player2': [] }; 
    
    expect(battle(player1,player2)).toEqual(result);
  });
  
  it("Expected player1 to have no creatures.",function() {
    player1 = [[1,1]]; player2 = [[2,2]];
    result = { 'player1': [], 'player2': [[2,2]] };
    
    expect(battle(player1,player2)).toEqual(result);
  });
  
  it('player2 should have more creatuers left', function() {
    player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
    player2 = [[1, 2], [1, 2], [3, 3]];
    result = { 'player1': [[5,5]], 'player2': [[1,2], [3,3]] }; 
    
    expect(battle(player1,player2)).toEqual(result);
  });
  
  it("Expected output to equal input. Player1 has no creatures.",function() {
    player1 = []; player2 = [[1,1],[2,3],[10,10]];
    result = { 'player1': [], 'player2': [[1,1],[2,3],[10,10]] }; 
    
    expect(battle(player1,player2)).toEqual(result);
  });
  
});