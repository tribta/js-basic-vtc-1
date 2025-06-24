/**
 * ==============================
 * LESSON: Object - Dynamic Methods
 * ==============================
 * 1. Có thể CRUD object
 * ==============================
 */

const circle = { r: 1 };

// Add new Property
circle.color = "Red";

// Add new Method
circle.draw = function () {
  console.log("Draw a circle");
};
console.log(circle);

// Remove Property:
delete circle.color;
delete circle.draw;

// Replace Object Constant:
// circle = { r: 2 };
// TypeError: Assignment to constant variable.
