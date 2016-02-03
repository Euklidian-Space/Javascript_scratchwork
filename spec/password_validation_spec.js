describe('Password_validation', function(){
  
  it('should pass the following cases', function(){
    
    var password = require("../Code_wars/PassValidate");
    
    expect(password("Abcd1234")).toBe(true);
    expect(password("Abcd123")).toBe(false);
    expect(password("abcd1234")).toBe(false);
    expect(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")).toBe(true);
    expect(password("ABCD1234")).toBe(false);
    expect(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,")).toBe(true);
    expect(password("!@#$%^&*()-_+={}[]|\:;?/>.<,")).toBe(false);
    
  });
  
});