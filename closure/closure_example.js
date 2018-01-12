function makeFunc() {
    let name = "Mozilla斤斤计较";
    function displayName() {
        console.log(`name = ${name}`); 
    }
    return displayName;
}

// var myFunc = displayName() { console.log(`name = ${name}`); }
var myFunc = makeFunc();
myFunc();