/**Reverse digits of an integer.
Example1: x = 123, return 321 Example2: x = -123, return -321
Have you thought about this? Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.




 * @param {number} x
 * @return {number}
 */
var reverseInt = function(x) {
    
	var INT_MAX = Math.pow(2,31)-1;
    
    if(0 <= x && x < 10) return x;
    
    //var nFlag = "";
    // number x to string
    var str = x.toString();

    // reverse number string
    var rStr = str.split("").reverse().join("");
	
	console.log(rStr);

    // if x < 0, move '-'  from rStr back to front
	
	//indexOf('-') returns -1 if the value to search for never occurs
    if(rStr.indexOf('-') != -1){
        rStr = '-' + rStr.replace('-','');    
    }
	console.log(rStr);
     //string to Int  消除前几位是0000的情况
    var result = parseInt(rStr);

    if(result > INT_MAX || result < -(1+INT_MAX)) return 0;
    return result;
};

var nub= -88900000000000000000000029000;
//有问题啊
console.log(reverseInt(nub));