/**
 * ==============================
 * TODO: Viết hàm fizzBuzz(input):
 * ==============================
 * a. Nếu số chia hết cho 3: trả về "Fizz"
 * b. Nếu số chia hết cho 5: trả về "Buzz"
 * c. Nếu số chia hết cho cả 3 và 5: trả về "FizzBuzz"
 * d. Nếu không chia hết cho 3 hay 5: trả về chính số đó
 * e. Nếu không phải số: trả về "Not a number"
 * ==============================
 */

//NOTE: CÁCH 1 - SWITCH...CASE => không phù hợp

//NOTE: CÁCH 2 - IF...ELSE IF...ELSE
// if input !== number data type => return "NaN"
// input % 3 === 0 => return "Fizz"
// input % 5 === 0 => return "Buzz"
function FizzBuzz(input) {
  if (typeof input !== "number") return "NaN";
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";

  return input;
}

console.log(FizzBuzz(16));
