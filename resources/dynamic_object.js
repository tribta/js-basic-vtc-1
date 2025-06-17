// Dynamic Type

// 1. Thay đổi kiểu dữ liệu của biến
// int x = 99;
// x = "chín chín"; // không được.
// => static type

// js - 'typeof'
let myName = "Donald Trump";
console.log(typeof myName);

myName = 9999;
console.log(typeof myName);

myName = false;
console.log(typeof myName);

let myAge = 99.99;
console.log(typeof myAge);

myAge = 9999;
console.log(typeof myAge);

myAge = null;
console.log(typeof myAge);

myAge = undefined;
console.log(typeof myAge);

// checking "null" or "not null"
let x = null;

if (typeof x === "object") {
  console.log("x is an object");
}

if (typeof x === "object" && x !== null) {
  console.log("x is an object");
} else {
  // typeof x !== "object" && x === null
  console.log("x is Null");
}

if (x === null) {
  console.log("x is null");
}

// OBJECT Type
// bên trong {} là các cặp key:value.
let myCar = {
  brand: "Vin-Fat",
  price: 2_000_000,
  // ...
};
console.log(myCar);

// sử dụng object:
// 1. truy cập vào object và thay đổi nội dung
// 1.1/ dot (.) syntax
console.log(myCar.brand);
console.log(myCar.price);

// 1.2/ [] syntax
myCar["brand"] = "Mec-Sa-Dec";
console.log(myCar["brand"]);
console.log(myCar);

// 1.3/ Sử dụng [] để khởi tạo Property.
let selection = "Engine";
myCar[selection] = "V8.1";
console.log(myCar);
