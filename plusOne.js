/**Given a non-negative number represented as an array of digits, plus one to the number.
The digits are stored such that the most significant digit is at the head of the list.


陣列最後一個數是個位數，所以從後面開始讀，個位數+1後，如果有進位，儲存進位值，val = 0，沒進位直接存儲。
然后處理十位數，如果個位數有進位，十位數+1，再判斷十位數是否有進位
重複上面動做值到陣列結束
如果全是999999，则增加一位在最高位



 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 判斷相加後是否需進位
    var carry = 0;

    for(var i = digits.length - 1 ; i >= 0 ; i--){
        // 目前位數 = 目前位數+前面是否進位
        digits[i]= digits[i] + carry;

        // list最後一個數字，也就是個位數，給他+1
        if(i == digits.length - 1 ){
          digits[i] = digits[i] + 1;
        } 

        // 如果目前這個位數等於10(因為只+1，所以不會超過10)，進位
        if(digits[i] == 10){
          digits[i] = 0;
          carry = 1;
        } else {
          carry = 0;
        }
    }

    // 最後如果有進位
    if(carry == 1){
        digits.unshift(carry); 
    }

    return digits;
};



//居然还可以处理负数
var n = [-9999];
console.log(plusOne(n));