/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console. */


const teams = [
  {
    nome: 'Inter',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Juve',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Roma',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Lazio',
    puntiFatti: 0,
    falliSubiti: 0
  },
  {
    nome: 'Napoli',
    puntiFatti: 0,
    falliSubiti: 0
  }  
];

const teamsContainer = document.querySelector('.teams-container');
let output = '';

teams.forEach(team => {
  team.puntiFatti = Math.floor(Math.random() * 100) + 1;
  team.falliSubiti = Math.floor(Math.random() * 100) + 1;
  // console.log(team);
});

const printTeams = teams.map(team => {
  const {nome, falliSubiti} = team;
  return {nome, falliSubiti};
});

printTeams.forEach( team => output += `<p>${team.nome} - Falli subiti: ${team.falliSubiti}</p>`);
teamsContainer.innerHTML = output;

// console.log(printTeams);
