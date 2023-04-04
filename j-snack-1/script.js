const users = [
  {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 28
  },
  {
    firstName: 'Mario',
    lastName: 'Bianchi',
    age: 35
  },
  {
    firstName: 'Luca',
    lastName: 'Bianchi',
    age: 65
  },
  {
    firstName: 'Luca',
    lastName: 'Rossi',
    age: 15
  },
  {
    firstName: 'Antonio',
    lastName: 'Verdi',
    age: 85
  },
  {
    firstName: 'Antonio',
    lastName: 'Rossi',
    age: 45
  },
  {
    firstName: 'Antonio',
    lastName: 'BIanchi',
    age: 17
  },
  {
    firstName: 'Luca',
    lastName: 'Verdi',
    age: 47
  },
  {
    firstName: 'Mario',
    lastName: 'Verdi',
    age: 87
  }
];

const usersBorderAge = users.filter(user => ((user.age < 18) || (user.age > 64)));

console.log(usersBorderAge);

const usersContainer = document.querySelector('.users-container');
const borderAgeUsersContainer = document.querySelector('.border-age-users-container');

usersContainer.innerHTML = (users.map( (user) => {
  const {firstName, lastName, age} = user;
  const card = `
    <div class="card p-2">
      <div class="card-header">${firstName} ${lastName}</div>
      <div class="card-text">
        Età: ${age}
      </div>
    </div>
  `
  return card;
}).join(''));

borderAgeUsersContainer.innerHTML = (usersBorderAge.map( (user) => {
  const {firstName, lastName, age} = user;
  const card = `
    <div class="card p-2">
      <div class="card-header">${firstName} ${lastName}</div>
      <div class="card-text">
        Età: ${age}
      </div>
    </div>
  `
  return card;
}).join(''));