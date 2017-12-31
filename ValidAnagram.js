/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    var s = s.split("").sort().join("");
    var t = t.split("").sort().join("");

    return s==t;
};

var m1="bibikkkas";
var m2 ="asikbbikk";

console.log(isAnagram(m1,m2));