/**Description:
Count the number of prime numbers less than a non-negative number, n.


判斷n之下有幾個質數，只要跑迴圈判斷從2~(n-1)中毎一個數是不是質數就可以
質數p的定義就是 p%2 , p%3 , p%4 .... p%(p-1)都不等於0（没余数）
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // n = 3的時候，才會出現第一個比n小的質數2
    if(n < 3) return 0;

    var count = 1;
    // 加快速度，所以跳過2的倍數
    for(var i = 3 ; i < n ; i+=2){
        var flag = true;
        // 判斷i是不是質數
        for(var j = 3 ; j < i; j+=2){
            if(i%j == 0){
                // i能被比自己小的數除盡，表示i不是質數
                flag = false; 
				//一旦存在，立马断开循环
                break;
            }
        }

        if(flag) count++;
    }

    return count;
};


var n=999999174;
// 效率太低了
console.log(countPrimes(n));