/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
 
 var containsDuplicate1 = function(nums) {
    var keep = [];
    for(var i in nums){
        if(keep.indexOf(nums[i])<0){
            keep.push(nums[i]);
        } else {
            return true;
        }
    }
    return false;
};


var containsDuplicate = function(nums) {

     for( var i =0; i< nums.length; i++){
	 
	      var item = nums[i];
		  console.log(item);
		  // 注意：确保每次是index i的后一位，  j=i+1
		  for ( var j= i+1; j< nums.length; j++){
		  
		   if (item == nums[j]) return true;
			   
		     
			
			   
		   
		      
		   }
		   
		  
        }
		return false;
};		

var n = [78,46,54,39,98,23,46,16,21,83,2342,4,26,34,34];
console.log(containsDuplicate(n));