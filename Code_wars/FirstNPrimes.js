
module.exports = {
  isPrime: function(n){
    if (n === 2 || n === 3) {
      return true;
    }
    
    if (n % 2 === 0) {
      return false;
    }
    
    if (n % 3 === 0) {
      return false;
    }
    
    var i = 5;
    var w = 2;
    
    while (i * i <= n) {
      if (n % i === 0) {
        return false;
      }
      
      i += w;
      w = 6 - w;
    }
    
    return true;
    
  },
  
  first: function(n){
    
    var prime_ary = [];
    var counter1 = 0;
    var counter2 = 2;
    
    while(counter1 < n) {
      if(this.isPrime(counter2)) {
        prime_ary.push(counter2);
        counter1++;
        counter2++;
      } else {
        counter2++;
      }
    }
   
    return prime_ary;
    
  }
}