/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // map儲存計算過的數字
    var store = {};

    // 如果map裡面出現過這個數字 或 數字 = 1，停止迴圈。
    while(!store[n] && n!=1){
        store[n] = n; 
        // 單純的計算毎一個位數的平方和
        n.toString().split("").forEach(function(v,i){
            //这里的i是个啥
			if(i == 0) n = 0;
            n += v*v;
        })
        n = parseInt(n);
    }
    return n == 1;
};

var nub= 19;
console.log(isHappy(nub));