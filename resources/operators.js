// OPERATORS

let x = 10;
const y = 5;

//1. Alrithmetic operator (toán tử số học)

let result = x + y; // cộng
result = x - y; // trừ
result = x * y; // nhân
result = x / y; // chia
result = x % y; // modular

//2. Assignment operator (Toán tử gán)
x++;
x = x + 1;
x += 1;
x -= 1;
x *= 1;
x /= 1;

//3. Comparison operator (toán tử so sánh)
console.log(x > y); // true/false
console.log(x === y);
console.log(x !== y);
console.log(x >= y);
console.log(x == y);
console.log(x != y);

// 4. Logical operator (toán tử logic)

// Logical AND (&&)
// - Phải thỏa ít nhất 2 điều kiện
// Logical OR (||)
// - Phải thỏa 1 trong 2
// Logical NOT (!)
// - Phủ định hoặc đảo ngược giá trị.

// Ví dụ:
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(true && !false); // ??? true
console.log(true || (true && !false)); // ??? true

// ứng dụng thực tế 1
let highIcome = true;
let goodCreditScore = true;

let eligibleLoan = highIcome && goodCreditScore;
console.log("Eligible to Loan: " + eligibleLoan);

// ứng dụng thực tế 2
highIcome = false;
goodCreditScore = true;

eligibleLoan = highIcome || goodCreditScore;
console.log("Eligible to Loan: " + eligibleLoan);

// ứng dụng thực tế 3
highIcome = false;
goodCreditScore = false;

eligibleLoan = highIcome && goodCreditScore;
console.log("Eligible to Loan: " + !eligibleLoan);

// TERNARY OPERATOR (toán tử điều kiện)
// Condition Operator

// ví dụ:
// Customer A trên 50 điểm, VIP rank.
// Customer B dưới 50, General rank.

// Syntax: condition ? true : false

let points = 50;
let customerRank = points > 50 ? "VIP" : "General";
console.log(customerRank);

// Tương tự if statement.
if (points > 50) {
  console.log("Vip");
}
console.log("General");

// Logical Operator + Non boolean Values.

console.log(false || true); // true
console.log(false || "Tín"); // Tín
console.log(true && "Tín"); // Tín
console.log("Tín" && true); // true
console.log(true && "Tín" && 1); // 1
console.log(false && null && 0 && undefined);

// JS truthly & falsy
// falsy List: undefined, null, 0, false, "", NaN (not a number)
num = -1;
if (num > 0) {
  console.log("Số dương");
} else {
  console.log("Số âm");
}

result = console.log("số dương" && num);

// ví dụ:
let userColor = null;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor); // red

// Bitwise operator (toán tử trên từng binary)

console.log(1 | 2); // 1 or 2
// 1 => 01
// 2 => 10
// true || false => true
// 1 | 0 => 1
// 0 | 1 => 1
// 0000 0011 => 3

console.log(1 & 2); // 1 or 2
// true && false => false
// 1 & 0 => 0
// 0 & 1 => 0
// 0000 0000 => 0

// ví dụ thực tế:
// read: 4 (0000 0100)
// write: 2 (0000 0010)
// execute: 1 (0000 0001)

const readPermission = 4;
const writePermission = 2;
const executepermission = 1;

let userPermission = 0;
userPermission = writePermission | readPermission | userPermission;
console.log(userPermission); // (0000 0111)

let message = userPermission & readPermission ? "Yes" : "No";
console.log(message);

userPermission = userPermission & ~readPermission;
message = userPermission & readPermission ? "Yes" : "No";
console.log(message);

// Thứ tự ưu tiên giữa các toán tử:
let z = (2 + 3) * 4;

let f = 2 * 3 + 8 * 7 >= (2 + 8) * 9 ? true : false;
