function Student(name, id, grades = []) {
  return {
    name,
    id,
    grades,
  }
}

let chaggai = new Student('Chaggai', 111, [90, 98, 68]);

function main(student, minGrade) {
  return student.grades.filter(grade => grade > minGrade);
}

const result = main(chaggai, 80)
console.log(...result);