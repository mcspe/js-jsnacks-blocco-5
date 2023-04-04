const students = [
  {
    firstName: 'Mario',
    lastName: 'Rossi',
    registrationNumber: 747100,
    grades: [28, 29, 30, 18, 25, 23]
  },
  {
    firstName: 'Mario',
    lastName: 'Bianchi',
    registrationNumber: 747101,
    grades: [26, 29, 22, 21, 25, 23]
  },
  {
    firstName: 'Luca',
    lastName: 'Bianchi',
    registrationNumber: 747102,
    grades: [29, 26, 19, 18, 29, 29]
  },
  {
    firstName: 'Luca',
    lastName: 'Rossi',
    registrationNumber: 747103,
    grades: [28, 29, 29, 18, 25, 23]
  },
  {
    firstName: 'Antonio',
    lastName: 'Verdi',
    registrationNumber: 747104,
    grades: [30, 29, 30, 26, 25, 29]
  },
  {
    firstName: 'Antonio',
    lastName: 'Rossi',
    registrationNumber: 747105,
    grades: [21, 29, 30, 18, 26, 22]
  },
  {
    firstName: 'Antonio',
    lastName: 'BIanchi',
    registrationNumber: 747106,
    grades: [25, 29, 30, 18, 25, 26]
  },
  {
    firstName: 'Luca',
    lastName: 'Verdi',
    registrationNumber: 747107,
    grades: [18, 29, 30, 18, 25, 23]
  },
  {
    firstName: 'Mario',
    lastName: 'Verdi',
    registrationNumber: 747108,
    grades: [28, 29, 22, 18, 25, 30]
  }
];

const studentsAverageGrades = [];

const studentsContainer = document.querySelector('.students-container');

students.forEach(student => {
  const {firstName, lastName, registrationNumber} = student;
  const averageGrade = (getAverageGrade(student.grades)).toFixed(2);
  const avatar = 'http://placebeard.it/480/notag';
  const obj = {
    name: `${lastName} ${firstName}`,
    registrationNumber,
    averageGrade,
    avatar
  }
  studentsAverageGrades.push(obj);
});

studentsContainer.innerHTML = (studentsAverageGrades.map( (student) => {
  const {name, registrationNumber, averageGrade, avatar} = student;
  const card = `
    <div class="card my-3 mx-auto">
      <img src="${avatar} alt="${name}" class="card-img-top">
      <div class="card-header">${name}</div>
      <div class="card-text">
        <p>Matricola: ${registrationNumber}</p>
        <p>Media dei voti: ${averageGrade}</p>
      </div>
    </div>
  `
  return card;
}).join(''));

function getAverageGrade(grades){
  const average = grades.reduce((tot, grade) => tot + grade) / grades.length;
  return average;
}
console.log(students, studentsAverageGrades);