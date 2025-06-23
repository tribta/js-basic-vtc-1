// TODO: Viết hàm showPrimes(limit):
// a. In ra tất cả các số nguyên tố từ 2 đến limit.
// b. Số nguyên tố là số lớn hơn 1, chỉ chia hết cho 1 và chính nó

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(number);
  }
}

showPrimes(10);
