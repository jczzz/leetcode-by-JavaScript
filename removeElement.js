/**
Given an array and a value, remove all instances of that value in place and return the new length.+

Do not allocate extra space for another array, you must do this in place with constant memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
Example: Given input array nums = [3,2,2,3], val = 3
Your function should return length = 2, with the first two elements of nums being 2.

 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums.length == 0) return nums.length;
	//排除找不到 不存在的情况， 如果找不到nums.indexOf(val) = -1
    if(nums.indexOf(val) < 0) return nums.length;

    var count = 0;
    for(var i = 0, max = nums.length; i<max ; i++){
        if(nums[i] != val) {
		//如果找到/等于，  就会不执行，之后下面数组的index会岔开
            nums[count++] = nums[i];
        } 
    }

    return count;
	
};


var  h =[ 2,4,2,32,4,67,3,2,42,6,8,2,4,5,4,6,09,23,45,34];
//var p =4;
console.log(removeElement(h,4));