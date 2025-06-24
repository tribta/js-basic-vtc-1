/**
 * ==============================
 * LESSON: Constructor Property
 * ==============================
 * 1. Mỗi Object đều có Property Constructor
 * 2. Constructor sẽ Reference về Func tạo ra Obj
 * ==============================
 */

// Constructor Property của Constructor function
function Circle(r) {
  this.radius = r;
}

const anotherCircle = new Circle(5);
console.log(anotherCircle);

// Factory Function constructor props
function circle(r) {
  return { radius: r };
}
const anotherCircle1 = circle(5);
console.log(anotherCircle1);

// ví dụ 1:
let x = {};
console.log(x);

let y = new Object();
console.log(y);

// ví dụ 2:
let z = { myName: "John" };
let j = new String("John");
console.log(j.toLowerCase());
console.log(j.valueOf());
console.log(j.length);
console.log(j[0]);

let h = new Number(1);
console.log(h.toFixed(4));

let t = new Boolean(true);

let f = new Function("a=1", "b=2", "c=3", "return a+b+c");
console.log(f());
console.log(f(5, 6, 7));
