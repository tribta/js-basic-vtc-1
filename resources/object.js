/**
 * ==============================
 * LESSON: OBJECT
 * ==============================
 * 1. Tập hợp các cặp key:value
 * 2. Group các variables,...
 * ==============================
 */

let r = 1;
let x = 1;
let y = 2;
// Syntax: Object literal
const circle = {
  r: 1,
  location: {
    x: 1,
    y: 2,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw a Circle!");
  },
};

// Syntax: Factory Function
// IMPORTANT:
// CamelCase (vd: createCircle)
function createCircle(radius) {
  return {
    r: radius,
    draw: function () {
      console.log("Draw a Circle!");
    },
  };
}
// rút gọn:
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw a Circle!");
    },
  };
}

const c1 = createCircle(1);
const c2 = createCircle(1);
const c3 = createCircle(1);
const c4 = createCircle(1);
const c5 = createCircle(1);
console.log(c1, c2, c3, c4, c5);

// Syntax: Constructor Function
// IMPORTANT:
// PascalCase (vd: CreateCircle)
// Sử dụng keyword: "this"

function CreateCircle(radius) {
  this.r = radius;
  this.draw = function () {
    console.log("Draw a circle");
  };
}

// khởi tạo object bằng constructor
// sử dụng từ khóa "new"
const myCircle1 = new CreateCircle(1);
console.log(myCircle1);
myCircle1.draw();
