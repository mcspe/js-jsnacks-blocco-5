const students = [
  {
    ID: 213,
    name: 'Marco della Rovere',
    grades: 78
  },
  {
    ID: 110,
    name: 'Paola Cortellessa',
    grades: 96
  },
  {
    ID: 250,
    name: 'Andrea Mantegna',
    grades: 48
  },
  {
    ID: 145,
    name: 'Gaia Borromini',
    grades: 74
  },
  {
    ID: 196,
    name: 'Luigi Grimaldello',
    grades: 68
  },
  {
    ID: 102,
    name: 'Piero della Francesca',
    grades: 50
  },
  {
    ID: 120,
    name: 'Francesca da Polenta',
    grades: 84
  },
  
];

const studentList = [];
const studentListGrade = [];
const studentListGradeAndID = [];
const studentsContainer = document.querySelector('.students-container');

students.forEach(student => {
  const {ID, name, grades} = student;
  studentList.push(name.toUpperCase());
  if (grades >= 70) {
    studentListGrade.push({name, grades});
    if (ID >= 120) {
      studentListGradeAndID.push({name, grades, ID});
    }
  }
});

const printList = printStudentList(studentList, 'Lista studenti da stampare');
const printListWithGrades = printStudentList(studentListGrade, 'Lista studenti con voti superiori a 70');
const printListWithGradesAndID = printStudentList(studentListGradeAndID, 'Lista studenti da stampare con voti superiori a 70 e ID superiore a 120');

function printStudentList(list, message) {
  const container = document.createElement('div');
  const listTitle = document.createElement('h3');
  listTitle.innerHTML = message;
  const listUL = document.createElement('ul');
  list.forEach(element => {
    //console.log(typeof(element));
    const listLI = document.createElement('li');
    if (typeof(element) === 'string') {
      listLI.innerHTML = element;
      listUL.append(listLI);
    }
    if (typeof(element) === 'object') {
      let output = '';
      for (let property in element) {
        //console.log(property, element[property]);
        output +=  `${property}: <strong>${element[property]}</strong> `;
      }
      listLI.innerHTML = output;
      listUL.append(listLI);
    }
  })
  container.append(listTitle, listUL);
  return container;
}

studentsContainer.append(printList);
studentsContainer.append(printListWithGrades);
studentsContainer.append(printListWithGradesAndID);
// console.log(studentList, studentListGrade, studentListGradeAndID);



