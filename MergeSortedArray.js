/**Given two sorted integer arrays nums1 
and nums2, merge nums2 into nums1 as one sorted array.
The number of elements initialized in nums1 
and nums2 are m and n respectively

m為nums1的元素數量，n為nums2的元素數量
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    var index = 0;
    //將nums2裡面的值放在nums1
    for(var i = m ; i < m+n ; i++){
            nums1[i] = nums2[index];
            index++;
    }

    //使用泡沫排序法重新排序
    for(var j = 0 ; j < nums1.length - 1 ; j++){
        for(var k = j + 1 ; k < nums1.length ; k++){
            if(nums1[j] > nums1[k]){
                var temp = nums1[j];
                nums1[j] = nums1[k];
                nums1[k] = temp;
            }
        }
    }
	return  nums1;
};

var p =[4,5,21,32,43,56,3];
var n1=7;
var n2 =6;
var  o = [5,62,45,23,90,09];
console.log(merge(p,n1,o,n2));

