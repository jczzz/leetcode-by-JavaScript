/**
Given an integer, write a function 
to determine if this integer is a power of three.3的幂次方
   判断是否存在k，使得n=3^k,
 * @param {number} n
 * @return {boolean}
 */
 // 这题有意思 当k=0，1，2时， n=1,3,9
var isPowerOfThree = function(n) {
    while(n>2){
        if(n%3 !== 0) return false;
        n = parseInt(n/3);
    }

    return n==1;
};


console.log(isPowerOfThree(79+2));