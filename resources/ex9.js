// TODO: Viết hàm showStars(rows):
// a. In ra số hàng bằng giá trị rows.
// b. Ở mỗi hàng, số dấu * đúng bằng số thứ tự hàng đó.
// i. Ví dụ, showStars(5) sẽ in:
//
// 1. *
// 2. **
// 3. ***
// 4. ****
// 5. *****

// typeof * = string
// console.log(typeof "*");
function showStars(rows) {
  let pattern = "";
  // * + * + *
  for (let i = 1; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

// TEST_CASE:
showStars(5);
