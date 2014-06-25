waitgroup.js - concurrency synchronization primitive
============
This is a translation of Go's [sync.WaitGroup](http://golang.org/pkg/sync/#WaitGroup)
for JavaScript, used extensively in [TextDrop](http://www.textdropapp.com).

Use this if you want run several asynchronous tasks concurrently and run a
function when all the results come back. (E.g. if you want to make
multiple web requests or database queries, then use them together).

This is much better than making each request in serial, and takes advantage of
JavaScript's asynchronous design to boost the response time of your program by
making your requests concurrent.

Usage
-----

```js
var wg = new WaitGroup;

wg.add();
initResource1().on("done", function(){
  wg.done();
});

wg.add();
initResource2().on("done", function(){
  wg.done();
});

wg.add();
initResource3().on("done", function(){
  wg.done();
});

wg.wait(function(){
  console.log("All done!")
});
```

Methods
-------

### add()

Increments the WaitGroup counter

### done()

Decrements the WaitGroup counter. When the counter becomes `0`, the function
passed to `wait()` will be called.

### wait(func)

Registers a callback to be called when all tasks in the WaitGroup are done.



