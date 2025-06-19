/**
 * ==============================
 * TODO: EX4
 * ==============================
 * Viết hàm checkSpeed(speed) kiểm tra tốc độ xe:
● Giới hạn tốc độ: 70 km/h.
● Dưới hoặc bằng giới hạn: Hiện “OK”.
● Mỗi 5 km/h vượt quá giới hạn: Cộng 1 điểm.
● Từ 12 điểm trở lên: Hiện “License suspended”.
● Dùng Math.floor để làm tròn số điểm xuống.
● Tránh sử dụng “magic number” trong code.
 * ==============================
 */

/**
 * ==============================
 * IMPORTANT: Cách tính điểm:
 * ==============================
 * 1. (speed - speedLimited) / kmPerPoint
 * ==============================
 */

function checkSpeed(speed) {
  const speedLimited = 70;
  let kmPerPoint = 5;

  if (speed <= speedLimited) {
    console.log("OK");
    return;
  }
  let points = Math.floor((speed - speedLimited) / kmPerPoint);
  if (points >= 12) console.log("License Supspend");
  else console.log("Points: ", points);

  //   if (points >= 12) {
  //     return console.log("License Supspend");
  //   } else {
  //     return console.log("Points: ", points);
  //   }
}

checkSpeed(130);
