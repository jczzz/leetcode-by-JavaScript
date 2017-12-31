/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false;

    // 使用map儲存出現過的數字
    var map = {};

    for(var i in nums){
        var v = nums[i];
        console.log(map[v]);
		
		//什么玩意啊map[v]
		
		
        if(map[v] && (i - map[v] <= k)){
            // 如果有出現重複的數字，判斷目前的位置-之前儲存的位置 <= k，符合條件return true
            return true;
        }
        // 將出現過的數字與其位置放入map
        map[v] = i;
    }

    // 全部跑完，沒符合條件的配對，return false
    return false;
};

var containsDuplicate2 = function(nums,k) {

     for( var i =0; i< nums.length; i++){
	 
	      //var item = nums[i];
		  //console.log(item);
		  // 注意：确保每次是index i的后一位，  j=i+1
		  for ( var j= i+1; j< nums.length; j++){
		  
		   if (nums[i] == nums[j]){
			   
			   
		     var diff = j-i;
			   
			   if(diff<=k) {
				   console.log(diff);
				   return true;
			   }
			  
		   
		      
		   }
		   
		  
        }
		
	 }
	 return false;
};
var n = [78,46,54,39,98,23,46,16,21,83,2342,4,26,34,34];
var i =4;


console.log(containsDuplicate2(n,i));