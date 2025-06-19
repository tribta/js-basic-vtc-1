/**
 * ==============================
 * TODO: Viết hàm showNumbers(limit):
 * ==============================
 a. In ra tất cả các số từ 0 đến limit.
 b. Mỗi số, nếu là even thì in kèm label "EVEN", 
 nếu là odd thì in "ODD".
 * ==============================
 */

// let i;
// for (i = 0, i <= Limit, i++)
// log(i, "EVENT/ODD")

// NOTE: cách 1: sử dụng 2 lần console.log()
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, "EVENT");
    else console.log(i, "ODD");
  }
}

// NOTE: cách 2: lưu kết quả vào biến
function showNumbersByMessage(limit) {
  let i;
  let message;
  for (i = 0; i <= limit; i++) {
    message = i % 2 === 0 ? "EVENT" : "ODD";
    console.log(i, message); // 11, even
  }
  
}

// TEST_CASE:
showNumbers(10);
showNumbersByMessage(10);
