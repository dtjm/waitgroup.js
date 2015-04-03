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
var WaitGroup = function(){
    this.total = 0; // Number of total items
    this.ready = 0; // Number of items ready
};

WaitGroup.prototype.add = function WaitGroupAdd(){
    this.total++;
};

WaitGroup.prototype.done = function WaitGroupDone(){
    this.ready++;
};

WaitGroup.prototype.wait = function(fn) {
  var self = this;
  setTimeout(function(){
    if(self.ready == self.total) return fn();
    self.wait(fn);
  }, 0);
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
