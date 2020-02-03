// Function Syntax

// Function Definition
const avg = function(a, b) {
  return (a + b) / 2;
};

// Function call
console.log(avg(5, 6));

// another Definition
const print = function(a,b) {
  console.log(`a=${a}, b=${b}`)
};

// Undefined values
const result = print(7, 8);
console.log(result);
print(9);
print();

// Object literal with a method
const rectangle = {
  width: 10,
  height: 20,
  area: function() {
    return this.width * this.height;
  }
};

// Method call
console.log(rectangle.area());

// Construct Definition (similar to a class)
const Rectangle = function(width, height) {
  this.width = width;
  this.height = height;
};

// Shared Method
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

// Constructing Objects
const small = new Rectangle(1, 2);
const large = new Rectangle(10, 20);

// Method calls
console.log(small.area());
console.log(large.area());
