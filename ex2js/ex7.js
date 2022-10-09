function Student(name, id, grades = []) {
  return {
    name,
    id,
    grades,
  }
}

let chaggai = new Student('Chaggai', 1, [90, 98, 68]);
let pnina = new Student('Pnina', 2, [77, 92, 84]);
let avishai = new Student('Avishai', 3, [91, 92, 99, 100, 83]);

let students = [chaggai, pnina, avishai];

const main = (students, minGradeToDisplay) => {
  const grades = [];
  students.forEach(student => {
    student.grades.forEach(grade => grade > minGradeToDisplay ? grades.push(grade) : null)
  });
  return grades;
}

const result = main(students, 80)
console.log(...result);