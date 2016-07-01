// Define a function called `Robot()`.
// Typically, we would create a new instance with `new Robot()`.
// Instead, create a "factory" that creates more `Robots with this call:
// ---
// Robot.new()
//
// When `Robot.new()` is called it should return a new instance
//with the prototype set to Robot e.g.:
// ---
// var robby = Robot.new();

//FACTORY FUNCTION  -- something that returns a new instance of an object
// creates a new object and returns it

function Robot(){
  //return new Robot();
  //console.log(this);
}

Robot.prototype.new = function () {
  return new Robot();
};

robot = new Robot();  //first robot

robby = robot.new();  //new instance of the first robot, above
console.log(robby);

//OR

function Robot(){};

//static method
Robot.new = function(){
  return new Robot();
}

//instance method : instance factory function
Robot.prototype.new = function () {
  return new Robot();
};
