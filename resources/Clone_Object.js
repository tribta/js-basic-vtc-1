/**
 * ==============================
 * LESSON: Clone Object
 * ==============================
 * 1. Sao chép Object
 * ==============================
 */

// cách 1: for..in
const circle = {
  r: 1,
  draw() {
    console.log("draw");
  },
};

const anotherCircle = {};

for (const key in circle) {
  anotherCircle[key] = circle[key];
}

// cách 2: Object.assign
const anotherCircle2 = Object.assign({ color: "Red" }, circle);

// cách 3: Spread operator
const anotherCircle3 = { ...circle, color: "Red" };
