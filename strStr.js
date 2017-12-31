/**
Implement strStr().
Returns the index of the first occurrence of needle 
in haystack, or -1 if needle is not part of haystack.


 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
}



var strStr = function(haystack, needle) {
    if(!needle) return 0;
    if(!haystack || needle.length > haystack.length) return -1;

    var i,j;
    for(i = 0 ; i < haystack.length ; i++){
       var str = haystack.substr(i,needle.length);
       if(str == needle){
           return i;
       }
    }

    return -1;
};


var h = "kjadklfjalkfjkladjfa";
var y = "jkl";

console.log(strStr(h,y));