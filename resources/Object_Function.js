/**
 * ==============================
 * LESSON: Object Function
 * ==============================
 * 1. Function là Object
 * ==============================
 */

function Circle(r) {
  this.radius = r;
  this.draw = function () {
    console.log("I draw a Circle!");
  };
}
// tím là method
// xanh là property
console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);
console.log(Circle.prototype);

const Circle2 = new Function(
  "radius",
  `
  this.r = radius;
  this.draw = function () {
    console.log("I draw a Circle!");
  };
  `
);

const c = new Circle2(100);
console.log(c);

// Build-In Methods:
const obj = {};

// Gọi Circle, truyền obj = "this"
Circle.call(obj, 5);
console.log(obj);
