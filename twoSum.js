/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 

var twoSum = function(nums, target) {
    
    for( var i=0; i< nums.length;i++){
       
        var ind1=nums[i];
         //j is always bigger than i by 1
        for(var j=i+1; j<nums.length;j++){
            var ind2=nums[j];
		    var sum =ind1+ind2;
            if(sum == target){
                return [i,j];
            }
    }
    
}
    
};

var n= [2,5,5,11];
var t = 10;

console.log(twoSum(n,t));