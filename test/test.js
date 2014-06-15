(function(){

if(typeof(require) !== "undefined") {
    var WaitGroup = require("../waitgroup");
} else {
    var WaitGroup = window.WaitGroup;
}

var initResource = function(name, callback){
    var rnd = Math.random() * 2000;
    setTimeout(function(){
        console.log(name + " initialized");
        callback(rnd);
    }, rnd);
};

var wg = new WaitGroup();
var alpha, beta, gamma;

// We will initialize 3 resources
wg.add();
initResource("alpha", function(val){
    alpha = val;
    wg.done();
});

wg.add();
initResource("beta", function(val){
    beta = val;
    wg.done();
});

wg.add();
initResource("gamma", function(val){
    gamma = val;
    wg.done();
});

wg.wait(function(){
    console.log("All done",
                "\nalpha =", alpha, "\nbeta =", beta, "\ngamma =", gamma);
});

})();
