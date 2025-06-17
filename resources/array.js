// Array in JavaScript
// Tính chất:
// 1. Liên tục và sắp xếp theo index.
// 2. Có thể chứa nhiều kiểu dữ liệu.

// Syntax:
let selectedColors = [];
console.log(selectedColors);

selectedColors = ["red", "blue", "green"];
console.log(selectedColors);

let selectedBikes = ["yamaha", "honda", "piago"];

// print member to console
console.log(selectedBikes[0]);

// dynamic array
selectedBikes[2] = 666;
console.log(selectedBikes);

console.log(selectedBikes.length);
selectedBikes[3] = "new index";
console.log(selectedBikes[3]);
console.log(selectedBikes);

selectedBikes[999] = "new index";
console.log(selectedBikes);

// Array & Object: Giống hay Khác ?
console.log(typeof selectedBikes);

// ví dụ:
let arr = [1, 2, 3, 4, 5];
let arrObj_1 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
};
console.log(arr);
console.log(arrObj_1);
