/**
 * ==============================
 * TODO: EX2
 * ==============================
 * 1. Viết hàm isLandscape(width, height)
 * trả về true nếu ảnh là landscape (ngang:
 * width > height), ngược lại trả về false.
 * ==============================
 */

// NOTE: Cách 1: IF/ELSE
function isLandscape(width, height) {
  if (width > height) return true;
  else return false;
}
// IMPORTANT: lúc này isLandscape = true/false;

// WARNING: Cách 2: TERNARY (toán tử 3 ngôi):
// (condition) ? true : false;

function isLandscape(width, height) {
  width > height ? true : false;
}
// IMPORTANT: lúc này isLandscape = undefined;
function isLandscape(width, height) {
  return width > height ? true : false;
}
// IMPORTANT: lúc này isLandscape = true/false;
/**
 * ==============================
 * IMPORTANT: NULL/ UNDEFINED
 * ==============================
 * 1. Một biến chứa giá trị NULL khi nó không chứa gì hết.
 * 2. Một biến chứa giá trị UNDEFINED khi mà khai báo, nhưng
 * không truyền giá trị.
 * ==============================
 */

console.log(isLandscape(200, 100));
console.log(isLandscape(100, 200));
