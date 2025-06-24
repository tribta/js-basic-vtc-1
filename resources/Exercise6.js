// Bài 6:
// Tạo một mảng gồm 3 object đại diện cho các mức giá (price range).
// Mỗi object có 4 thuộc tính:
// ● label: nhãn hiển thị (ví dụ: $, $$, $$$)
// ● price: nội dung khi hover chuột (ví dụ: "Inexpensive", "Moderate", "Expensive")
// ● min: giá tối thiểu cho 1 người
// ● max: giá tối đa cho 1 người

objectArray = [
  { label: "$", price: "Inexpensive", min: 1, max: 10 },
  { label: "$$", price: "Moderate", min: 11, max: 20 },
  { label: "$$$", price: "Expensive", min: 21, max: 30 },
];

// Requirement: Filter Restaurant mà có price là "Inexpensive"
const restaurants = [
  { name: "Pho24", avg: 5 },
  { name: "Pho99", avg: 25 },
  { name: "Pho69", avg: 15 },
];

const i = objectArray[0];

const result = restaurants.filter(function (r) {
  return i.min <= r.avg && i.max >= r.avg;
});

console.log(result);
