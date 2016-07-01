// You're going to implement a simple counter class.
// The counter will start at zero, and every time its `incr`
// method is called, it will increase by 1.
//
// There's one caveat: Your counter must act like a
// number and support arithmetic operations and
// comparisons.


function Counter(){
  //constructors cannot return things, they only set the initial conditios
  //when a new object is created
  this.count = 0;  //start at 0
}

Counter.prototype.incr = function(){
    //when incr is called, we increase the object's (this) counter variable by 1
    return this.count++;  //increments by 1
};

//.toString returns a string or an integer, but strips the object
Counter.prototype.toString = function () {  //to prevent [object,object]1
  return this.count;   //initally zero
};

//c is a new object, so you're returning a new object, not an integer
//declare a new instance of an object and sets the variable to c
var c = new Counter();
c.incr(); // counter is now at 1
console.assert(c+1, 2);
console.assert(c > 1 === false);
console.assert(c > 0);
console.assert(c == 1);
Math.sqrt(c); // 1
