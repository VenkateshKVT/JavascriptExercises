// console.log("Started ", new Date());
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { console.log(i); console.log("progress ", new Date()); }, 1000 + i);
// }
// console.log("end ", new Date());


// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { console.log(i); }, 1000 + 1000*i);
// }

// The above for loop is executed 3 times in less than a sec. And prints 3 for 3 times each sec. But it will not print 1, 2, 3

// for (var i = 0; i < 3; i++) {
//   setTimeout(function(i_local) { 
//     return function() { console.log(i_local); } 
//   }(i), 1000*i);
// }


function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; },
    subtract: function(decrement) { return _counter -= decrement; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 
c.subtract(2);
// now we can access the private variable in the following way
console.log(c.retrieve()); // => The counter is currently at: 14