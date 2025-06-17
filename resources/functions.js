// Khai báo 4 Objects
// Khai báo 4 console.log để in 4 object
// Block of Code (4 obj + 4 clg).

// Functions
// C - static void main()

// JS
// () dùng để truyền tham số
// void func là func không có return.
function Greet() {
  console.log("This is my First JS Function");
}

Greet();

// pass param to func:
function saySomething(something = "I am Cow.") {
  console.log("CowSay: " + something);
}
saySomething();
saySomething("I am NOT Cow.");

// pass multiple params to func:
function sayManyThings(thing1, thing2) {
  console.log(thing1 + " " + thing2);
}

sayManyThings("Donald", " Trump");

// Return Value Functions
function square(number) {
  return number * number;
}

// Call function & return Values
let results = square(4); // 16
console.log(results);

console.log(square(2)); // 4
