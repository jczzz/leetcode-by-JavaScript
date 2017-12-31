/**
Given an integer, write a function to 
determine if it is a power of two.

是否存在k n等于2^k
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    while(n>5){
        n = n/2;
    }
    return n%2 === 0;
};