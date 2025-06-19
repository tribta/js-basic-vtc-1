/**
 * ==============================
 * LESSON: CONTROL FLOW
 * ==============================
 * 1. If/ else statement
 * ==============================
 */

/**
 * ==============================
 * TODO:
 * ==============================
 * 1. "6h - 12h": morning
 * 2. "12h - 17h": afternoon
 * 3. "17h - 6h": evening
 * ==============================
 */

// let time = ;
// if (time >= 6 && time <= 12) return morning
// if (time > 12  && time <= 17) return afternoon
// if (time > 17  && time < 6) return evening.
let time = 5.99;
if (time >= 6 && time <= 12) {
  console.log("Good Morning.");
} else if (time > 12 && time <= 17) {
  console.log("Good Afternoon.");
} else {
  console.log("Good Evening.");
}

/**
 * ==============================
 * TODO: Switch ... Case
 * ==============================
 */

/**
 * ==============================
 * EXAMPLE:
 * ==============================
 * 1. guest
 * 2. moderator
 * 3. anonymous
 * ==============================
 */

// sử dụng switch ... case để phân role cho user
let role = "!!!";

switch (role) {
  case "guest":
    console.log("guest");
    break;
  case "moderator":
    console.log("moderator");
    break;
  case "anonymous":
    console.log("anonymous");
    break;
  default:
    console.log("Please choose your role.");
}

/**
 * ==============================
 * LESSON: FOR LOOP
 * ==============================
 * 1.
 * ==============================
 */

// console.log("Print something");
// console.log("Print something");
// console.log("Print something");
// console.log("Print something");

for (let i = 0; i < 4; i++) {
  console.log("Print something");
}

// print odd number
// for (let i = 1; i < 4; i += 2) {
//   console.log(i);
// }
for (let i = 0; i < 4; i++) {
  if (i % 2 != 0) console.log(i);
}

// 1 2 3 4 => 4 3 2 1
for (let i = 4; i > 0; i--) {
  console.log(i);
}

/**
 * ==============================
 * LESSON: WHILE
 * ==============================
 * 1.
 * ==============================
 */

// while(condition){
// logic
// }(...)
let j = 0;
//EXAMPLE:
// while (j <= 5) {
//   console.log(j);
//   j++;
// }

while (j <= 5) {
  if (j % 2 == 0) console.log(j);
  j++;
}

/**
 * ==============================
 * LESSON: DO...WHILE
 * ==============================
 */
console.log("Do...While Loops");
let k = 0;
do {
  if (k % 2 == 0) {
    console.log(k);
  }
} while (k <= 5);
