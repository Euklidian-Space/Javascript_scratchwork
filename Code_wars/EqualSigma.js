// The function sigma 1, σ1 in mathematics, is known as the one that gives the sum of the divisors of an integer number.

// For example for the number 10,

// σ1(10) = 18 # because the divisors of 10 are: 1, 2, 5, 10

// σ1(10) = 1 + 2 + 5 + 10 = 18

// The number 528 and its reversed, 825 have equal value for the function σ1.

// n fact 528 is the smallest non palindromic integer that has this property.

// We need a function, equal_sigma1(), that may collect all the positive integers that fulfill the property described above.

// The function receives an upper limit, nMax, will output the total sum of these numbers and its reversed while are less or equal nMax.

// Let's see some cases:

// equal_sigma1(100) = 0 # There are no numbers.

// equal_sigma1(1000) = 1353 # 528 and its revesed 825 were found, 528 +  825 = 1353

// equal_sigma1(2000) = 4565 # There are four numbers_: 528 + 825 + 1561 + 1651 = 4565

// equal_sigma1(1600) = 2914 # Now we have three numbers: 528 + 825 + 1561 = 2914

// equal_sigma1(1561) = 2914

// The palindromic numbers (like 88, 808, 929), numbers that are equal to its reversed should be discarded.

// Happy coding!!

var Primes = require("./FirstNPrimes");

  
  var EqualSigma =  function(n) {
    var data = dataScrub(n);
    //var data_reversed = reverseElements(data);
    
    var EqualSigmas = [];
    
    for(var i = 0; i < data.length; i++) {
      if(sigma1(data[i]) === sigma1(reverseElement(data[i]))) {
        EqualSigmas.push(data[i]);
      }
    }
    
    
    
    if (EqualSigmas.length === 0) {
      return 0;
    } else{
      return EqualSigmas.reduce(function(prev,next) {
        return prev + next;
      });  
    }
    
    
  };
  




  var findDivisors = function(n) {
    
    var limit = Math.sqrt(n);
    var divisors = [];
    
    for(var i = 1; i <= limit; i++) {
      if(n % i === 0){
        divisors.push(i);
        if(i !== n/i){
          divisors.push(n/i);
        }
      }
    }
    
    return divisors.sort(function(prev, next){
      return prev - next;
    });
    
  };
  
  var isPalindrome = function(n) {
    return n == n.toString().split("").reverse().join("");
  };
  
  var sigma1 = function(n) {
    var divisors = findDivisors(n);
    return divisors.reduce(function(prev,next){
      return prev + next;
    });
  };
  
  
  
  var dataScrub = function(n) {
    var int_array = [];
   // var palindromic = [];
    
    for(var i = 100; i <= n; i++) {
      int_array.push(i);  
    }
    
    
    //take out multiples of 10
    int_array = int_array.filter(function(elem) {
       return elem % 10 !== 0  
    });
    
    
     //take out palindromes
    return int_array.filter(function(elem){
      return !isPalindrome(elem);
    });
    
  };
  
  
  
  var reverseElement = function(n) {
    
    return parseInt(n.toString().split("").reverse().join("")); 
    
  };
  
  module.exports = EqualSigma;