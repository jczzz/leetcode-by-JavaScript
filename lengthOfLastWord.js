/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var ary = s.split(/\s/); //使用regex將字串切開 \s 发现空白项
    console.log(ary);
    if(s.length == 0) return 0;
    if(ary.length == 0) return 0;

    // 從陣列最後面取出單字，如果是空白' '就不是單字，所以繼續往前找
    while(ary.length > 0){
        var v = ary.pop();
		//显示切下最尾的word
		console.log(v);
        if(v.length > 0){
            return v.length;
        }

    }

    return 0;
};

var h =" shadh  hsiadh asd adsa hihia   ";
console.log(lengthOfLastWord(h));