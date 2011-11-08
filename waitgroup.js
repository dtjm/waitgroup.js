// WaitGroup
// ---------
// Taken from Go's sync.WaitGroup type. Use this if you want initialize
// multiple resources concurrently, then run a callback only when they are all
// done.
//
//     var WaitGroup = require("waitgroup");
//
//     var wg = new WaitGroup(function(){
//         console.log("All done!");
//     });
//
//     waitGroup.add(3);
//
//     initResource1().on("done", function(){
//         waitGroup.done();
//     });
//
//     initResource2().on("done", function(){
//         waitGroup.done();
//     });
//
//     initResource3().on("done", function(){
//         waitGroup.done();
//     });
//
// You don't know what order they will finish in, but the callback will be
// called when they are all done.

var WaitGroup = function(fn){
    this.total = 0; // Number of total items
    this.ready = 0; // Number of items ready
    this.callback = fn; // Callback when waitgroup is ready
    this.complete = false;  // WaitGroup has already completed
};

// Add a member to the waitgroup.
// @params Number of members to add to the wait group. Defaults to 1
WaitGroup.prototype.add = function WaitGroupAdd(num){
    if(!num) {
        num = 1;
    }
    this.total += num;
};

// Call this when a wait group member is complete. If all are complete, the 
// callback will be executed.
WaitGroup.prototype.done = function WaitGroupDone(){
    this.ready++;
    if(this.ready === this.total) {
        this.callback();
    }
};

exports.WaitGroup = WaitGroup;
