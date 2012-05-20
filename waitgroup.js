// Copyright (c) 2012 Sam Nguyen <samxnguyen@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(function(){
var WaitGroup = function(fn){
    this.total = 0; // Number of total items
    this.ready = 0; // Number of items ready
    this.callback = fn; // Callback when waitgroup is ready
    this.complete = false;  // WaitGroup has already completed
};

WaitGroup.prototype.add = function WaitGroupAdd(){
    this.total++;
};

WaitGroup.prototype.done = function WaitGroupDone(){
    this.ready++;
    if(this.ready === this.total) {
        var self = this;
        // Defer this call just in case one of the tasks is not performed
        // asynchronously. In that case, the callback would have been
        // called before the callback was assigned through the wait
        // function
        setTimeout(function(){
            if(self.ready == self.total) {
                self.callback();
            }
        }, 0);
    }
};

WaitGroup.prototype.wait = function(fn) {
    this.callback = fn;
};

// Export to node.js
if(typeof(module) !== "undefined") {
    module.exports = WaitGroup;
}
// Export to browser
else {
    window.WaitGroup = WaitGroup;
}

})();
