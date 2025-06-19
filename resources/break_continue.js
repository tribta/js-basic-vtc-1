/**
 * ==============================
 * LESSON: break/ continue
 * ==============================
 * 1. continue sẽ bỏ qua cái điều kiện thỏa.
 * ==============================
 */
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// NOTE: Muốn chương trình dừng ở 5 thì Break!
let j = 0;
while (j <= 10) {
  if (j == 5) {
    break;
  }
  console.log(j);
  j++;
}

// NOTE: muốn bỏ qua kết quả thì dùng Continue!
let k = 0;
while (k <= 10) {
  if (k % 2 === 0) {
    k++;
    continue;
  }
  console.log(k);
  k++;
}
