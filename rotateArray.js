/**
Rotate an array of n elements to the right by k steps.
For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


var rotateArray = function(nums, k) {
    //var step = k%nums.length;
    for(var i = 0 ; i <= k-1 ; i++){
        var value = nums.pop();
        nums.unshift(value);
    }
}


var  rotate=function (nums,k){
	
	var temp=[];
	//var step = nums.length;
	
	for( var i =  k; i>0; i--){
		var index = nums.length-i;
		temp.push(nums[index]);
	}
	
	for (var j =nums.length-1; j>=0; j--){
		if(j>=k)
		{
			nums[j]= nums[j-k];
		}else{
			nums[j]= temp[j];
		}
	}
        			
	
	
	
};


var n = [7,2,3,6,4,3,6,2,9,0];
var l = 3;

rotate(n,l);
console.log(n);