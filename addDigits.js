//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

var addDigits = function(num) {
    while(num >= 10){
       var n = num;
       var sum = 0;
       // 取出每個位數的值
       // ex. n = 138, 138%10 = 8, sum = 8, n = 13
       //     n = 13,  13%10  = 3, sum =11, n = 1
	   // parseInt(number/10)= Integer整数
       while(parseInt(n/10) > 0){
           sum += n%10;
           n = parseInt(n/10);  
       }
       // sum = 11, n = 1, sum + n%10 = 12,
       num = n%10 + sum;
    }
    return num;
};

var n=8762;

console.log(parseInt(7/10));// =0
console.log(4%10);// =4
console.log(addDigits(n));