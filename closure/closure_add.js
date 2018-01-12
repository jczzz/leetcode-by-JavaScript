/*
self-invoking function
Function expressions will execute automatically if 
the expression is followed by ()

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

*/


var add = function () {
    var counter = 0;
    return function () {
		return console.log(counter += 1);
		}
};

var x = add();
x();
x();
x();