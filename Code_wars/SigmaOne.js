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