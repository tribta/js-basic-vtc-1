/* TODO: Viết hàm calculateGrade(marks):
a. Tính điểm trung bình (average) của một mảng điểm.
b. Xác định và trả về xếp loại (grade) theo danh sách sau:
i. 0–59: "F"
ii. 60–69: "D"
iii. 70–79: "C"
iv. 80–89: "B"
v. 90–100: "A" */

// 1. Tính ra điểm trung bình
function calculateGrade(marks) {
  let sum = 0;
  for (let mark of marks) sum += mark;
  const averageMarks = sum / marks.length;
  //   (marks[0] + marks[1] + ...)/marks.length(4) = averageMArks

  if (averageMarks < 60) return "F";
  if (averageMarks < 70) return "D";
  if (averageMarks < 80) return "C";
  if (averageMarks < 90) return "B";
  return "A";
}

const m = [60, 100, 100, 100];
console.log(calculateGrade(m));
