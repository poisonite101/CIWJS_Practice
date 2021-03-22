// Every type of function
// Practice and examples


// The following functions writen as a function declarations

// 1st func that accepts a callback 
function functionRunner(callback) { 
    callback();
}
// 2nd func we will use as the callback
function log() {
    console.log("Hello World!");
}
// 1st func called with the 2nd func acting as callback 
functionRunner(log);



// The following function does the same as above but the callback is writen as an annonomys function

// 1st func called with annonomys func acting as callback 
functionRunner( () => console.log("Hello World!") );
// With es6 syntax you can reduce the code above to look like the following line
functionRunner(console.log("Hello World!"));

