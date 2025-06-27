/**
 * ==============================
 * LESSON: Arrays
 * ==============================
 * 1. CRUD array.
 * ==============================
 */

const numbers = [3, 4];
// numbers = []; // TypeError: Assignment to constant variable.

// add to the last array: push
numbers.push(5, 6);
// add to the head array: unshift
numbers.unshift(1, 2);
// add to between array: splice
numbers.splice(2, 0, "X", "Y");

// tìm kiếm index trong array: find()
const courses = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const courseFind = courses.find(function (c) {
  return c.name === "B";
});
const courseArrowFunc = courses.find((c) => c.name === "B");

/**
 * ==============================
 * LESSON: Arrow Function
 * ==============================
 */

// syntax
// const arrowFunction = () => {}

/**
 * ==============================
 * LESSON: Array : Sort/ Reverse
 * ==============================
 */

let num = [2, 3, 1];

num.sort();
num.reverse();

