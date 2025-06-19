/**
 * ==============================
 * TODO: Viết hàm showProperties(object)
 * ==============================
 a. Nhận vào một object.
 b. Hiển thị ra tất cả các thuộc tính của object 
    mà giá trị là kiểu string.
 * ==============================
 */

const movie = {
  title: "Titanic",
  releaseYear: 2000,
  rating: 4.5,
  director: "Harry Potter",
};

// NOTE: CACH 1:
// typeof movie[myKey] === "string" ? movie[myKey] : null
function showProperties(object) {
  for (let myKey in object) {
    if (typeof object[myKey] === "string")
      console.log(myKey + ":" + object[myKey]);
  }
}

// NOTE: CACH 2:
function showProperties(object) {
  for (let myKey in object) {
    if (typeof object[myKey] === "string") {
      console.log(myKey + ":" + object[myKey]);
    }
  }
}

// TEST_CASE:
showProperties(movie);
