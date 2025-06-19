function countTruthy(array) {
  let count = 0;
  for (let value of array) {
    if (value) count++;
  }
  return count;
}

const array = [null, false, 1, true];
console.log(countTruthy(array));
