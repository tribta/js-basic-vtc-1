/**
 * ==============================
 * LESSON: Object Loops
 * ==============================
 * 1. for ... in & for ... of
 * ==============================
 */

const circle = {
  r: 1,
  draw() {
    console.log("Draw me a Circle!");
  },
};

// lặp qua all props & methods for...in
for (const k in circle) {
  console.log(k + ": " + circle[k]);
}

// lặp qua all props & methods for...of
for (const j of Object.keys(circle)) {
  console.log(j + ": " + circle[j]);
}

// TEST_CASE: 1
const f = new Object(1);
console.log(f);
console.log(typeof f);
console.log(f instanceof Number);
console.log(f.constructor === Number);

console.log(Object.getPrototypeOf(f));
console.log(f.toFixed(4));

// thay đổi prototype của f từ number -> string
Object.setPrototypeOf(f, String.prototype);
