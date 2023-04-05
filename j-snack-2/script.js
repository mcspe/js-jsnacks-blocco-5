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
    lastName: 'Bianchi',
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
  const {firstName, lastName, registrationNumber, grades} = student;
  const averageGrade = (getAverageGrade(student.grades)).toFixed(2);
  const avatar = 'http://placebeard.it/480/notag';
  const obj = {
    name: `${lastName} ${firstName}`,
    registrationNumber,
    grades,
    averageGrade,
    avatar
  }
  studentsAverageGrades.push(obj);
});

studentsAverageGrades.sort((a, b) => {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
});


studentsContainer.innerHTML = (studentsAverageGrades.map( student => {
  const {name, registrationNumber, averageGrade, avatar} = student;
  const card = `
    <div class="card my-3 mx-auto">
      <img src="${avatar}?random=${Math.random()}" alt="${name}" class="card-img-top">
      <div class="card-header">${name}</div>
      <div class="card-text">
        <p>Matricola: ${registrationNumber}</p>
        <p class="grades-container">Media dei voti: ${averageGrade}</p>
      </div>
    </div>
  `
  return card;
}).join(''));

const gradesContainerCollection = document.querySelectorAll('.grades-container');
const gradesContainer = Array.from(gradesContainerCollection);
//console.log(gradesContainerCollection, gradesContainer);
gradesContainer.forEach((container, i) => {
  const arrowSpan = document.createElement('div');
  arrowSpan.style.cursor = 'pointer';
  arrowSpan.style.display = 'inline-block';
  arrowSpan.style.position = 'relative';
  arrowSpan.id = `arrow${i}`;
  arrowSpan.innerHTML = '&#x25BE;';
  container.append(arrowSpan);
});

studentsAverageGrades.forEach((student, i) => {
  const arrow = document.getElementById(`arrow${i}`);
  const arrowTooltip = document.createElement('div');
  arrowTooltip.style = `display:none;`;
  arrowTooltip.innerHTML = `Voti: ${ student.grades.join('<br>') }`;
  arrow.append(arrowTooltip);
  arrow.addEventListener('mouseenter',function(){
    this.lastChild.style = `
      visibility: visible;
      width: 80px; 
      background-color: #555;  
      color: #fff;
      text-align: right;
      padding: 10px;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      bottom: 100%;
      left: 50%;
      margin-left: -60px;`;
    //console.log(this.lastChild);
  });
  arrow.addEventListener('mouseleave',function(){
    this.lastChild.style = `display:none;`;
    //console.log(this.lastChild);
  });
});

function getAverageGrade(grades){
  const average = grades.reduce((tot, grade) => tot + grade) / grades.length;
  return average;
}