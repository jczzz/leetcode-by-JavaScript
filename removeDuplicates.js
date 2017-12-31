/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;
    var count = 0;
    for(var i = 1 ; i < nums.length ; i++){
	   //使用一个count 替代一个for loop
        if(nums[count] != nums[i]){
            count++;
            nums[count] = nums[i];
        }
    }    
    return ++count;
};

var p =[4,5,21,32,43,56,3,5,62,45,23,90,09];
console.log(removeDuplicates(p));