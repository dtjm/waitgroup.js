var waitgroup = require("./waitgroup");

var initResource = function(name, callback){
    setTimeout(function(){
        console.log(name + " initialized");
        callback();
    }, Math.random()*3000);
};


var wg = new waitgroup.WaitGroup(function(){
    console.log("All done");
});

// We will initialize 3 resources
wg.add(3);

initResource("alpha", function(){
    wg.done();
});

initResource("beta", function(){
    wg.done();
});

initResource("gamma", function(){
    wg.done();
});
