(function(){

if(typeof(require) !== "undefined") {
    var WaitGroup = require("../lib/waitgroup");
} else {
    var WaitGroup = window.WaitGroup;
}

// Test a non-asynchronous task
console.log("\nNON-ASYNC");

var task = function(callback){
    callback();
};

wg = new WaitGroup;

wg.add();
task(function(){
    wg.done();
});

wg.wait(function(){
    console.log("All done!");
});

})();
