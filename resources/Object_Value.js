/**
 * ==============================
 * LESSON: Value Type & Reference types
 * ==============================
 * 1. Premitive & Reference
 * ==============================
 */

// Premitive (Value Type):
let aNumber = 10;
let aString = "Hello";
let aBoolean = false;
let aUndefined = undefined;
let aNull = null;

// Reference type:
let aObject = { myName: "Donald Trump" };
let aFunction = function () {};
let anArray = [1, 2, 3];

// TEST_CASE: 1
let x = 10;
let y = x;
x = 20;

// TEST_CASE: 2
let z = { value: 10 };
let m = z; // {value : 20} // 10 ???

z.value = 20;

// TEST_CASE: 3
function increase(n) {
  n++; // = ???
  console.log(n);
}

let num = 10;
increase(num); // = 10

// TEST_CASE: 4
function increase(n) {
  n.v++;
}

let numObject = { v: 10 };
increase(numObject); // = ???
console.log(numObject);

// numObject = {v:10}
// increase = numObject
// increase.v += 1
